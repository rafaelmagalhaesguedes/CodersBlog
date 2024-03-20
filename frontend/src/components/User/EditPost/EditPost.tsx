import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaBookOpen } from 'react-icons/fa';
import { findPostById, updatePost } from '../../../services/PostService';
import { Container, Form, Button, MenuBody } from './Style';

export function EditPost() {
  const { id } = useParams() as { id: any };
  const [post, setPost] = useState<any>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      const posts = await findPostById(id);
      if (posts.length > 0) {
        const p = posts[0];
        setPost(p);
        setTitle(post.title);
        setContent(post.content);
      }
    };
    fetchPost();
  }, [id]);

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await updatePost(id, title, content);

    if (response) {
      Swal.fire({
        title: 'Post updated successfully',
        icon: 'success',
        timer: 2000,
      });
      return;
    }

    Swal.fire({
      title: 'Failed to update post',
      icon: 'error',
      timer: 2000,
    });
  };

  return (
    <Container>
      <MenuBody>
        <Link to="/user-posts">
          <FaArrowLeft size={ 15 } />
          Back
        </Link>
        <h3>Edit post</h3>
        <Link to="/user-posts">
          <span>
            <p>My posts</p>
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
