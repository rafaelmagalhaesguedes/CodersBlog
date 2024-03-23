/* eslint-disable react/jsx-max-depth */
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaPlusCircle } from 'react-icons/fa';
import { findPostById } from '../../../services/PostService';
import { CategoryType } from '../../../types/CategoryType';
import { formatDate } from '../../../utils/formatDate';
import {
  Card,
  Category,
  ContainerPost, Content, MenuBody, PostCard, Published, Title } from './Style';
import { useAuth } from '../../../context/auth';
import { Loading } from '../../Loading/Loading';

export function SinglePost() {
  const [post, setPost] = useState<any>({});
  const { signed } = useAuth();
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const singlePost = await findPostById(Number(id));
      console.log(singlePost);
      setPost(singlePost);
    };
    fetchPost();
  }, [id]);

  if (!post) {
    return <Loading />;
  }

  return (
    <ContainerPost>
      <MenuBody>
        <Link to="/">
          <FaArrowLeft size={ 15 } />
          {' '}
          Back
        </Link>
        <h3>Single post</h3>
        {signed && (
          <Link to="/create-post">
            <span>
              <p>New post</p>
              <FaPlusCircle size={ 20 } />
            </span>
          </Link>
        )}
      </MenuBody>
      <PostCard key={ post.id }>
        <Title>
          {post.title}
        </Title>
        <Published>
          <span>
            <strong>Author:</strong>
            {' '}
            { post.user?.username }
          </span>
          <span>
            <strong>Published in:</strong>
            {' '}
            {formatDate(post.published)}
          </span>
        </Published>
        <Content>
          <img src={ post.image } alt={ post.title } />
          <Card>
            <p>{post.content}</p>
            <Category>
              {post.categories?.map((category: CategoryType) => (
                <span key={ category.id }>
                  <span className="category-item">
                    {category.name}
                  </span>
                  {' '}
                </span>
              ))}
            </Category>
          </Card>
        </Content>
      </PostCard>
    </ContainerPost>
  );
}
