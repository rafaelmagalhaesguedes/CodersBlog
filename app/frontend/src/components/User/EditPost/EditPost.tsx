import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaBookOpen } from 'react-icons/fa';
import { findPostById, updatePost } from '../../../services/PostService';
import { Container, Form, Button, MenuBody } from './Style';
import { Loading } from '../../Loading/Loading';

export function EditPost() {
  const { id } = useParams() as { id: any };
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const posts = await findPostById(id);
      setTitle(posts.title);
      setContent(posts.content);
      setImage(posts.image);
      setIsLoading(false);
    };
    fetchPost();
  }, [id]);

  if (isLoading) {
    return (
      <Loading />
    );
  }

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await updatePost(id, title, content, image);
    if (!response) {
      Swal.fire({ title: 'Error updating post', icon: 'error', timer: 2000 });
      return;
    }

    Swal.fire({ title: 'Post updated successfully', icon: 'success', timer: 2000 });
  };

  return (
    <Container>
      <MenuBody>
        <Link to="/user-posts">
          <FaArrowLeft size={ 15 } />
          {' '}
          Go Back
        </Link>
        <h3>Edit post</h3>
        <Link to="/user-posts">
          <span>
            <p>My posts</p>
            {' '}
            <FaBookOpen />
          </span>
        </Link>
      </MenuBody>
      <Form>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={ title }
          onChange={ (e) => setTitle(e.target.value) }
        />
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="text"
          value={ image }
          onChange={ (e) => setImage(e.target.value) }
        />
        <label htmlFor="content">Content</label>
        <textarea
          value={ content }
          onChange={ (e) => setContent(e.target.value) }
        />
        <Button onClick={ handleEdit }>Edit</Button>
      </Form>
    </Container>
  );
}
