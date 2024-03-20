import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaPlusCircle } from 'react-icons/fa';
import { SinglePostType } from '../../../types/SinglePostType';
import { findPostById } from '../../../services/PostService';
import { CategoryType } from '../../../types/CategoryType';
import { formatDate } from '../../../utils/formatDate';
import {
  Category,
  ContainerPost, Content, MenuBody, PostCard, Published, Title } from './Style';

export function SinglePost() {
  const [post, setPost] = useState<SinglePostType[]>([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const getPost = await findPostById(Number(id));
      setPost(getPost);
    };
    fetchPost();
  }, [id]);

  return (
    <ContainerPost>
      <MenuBody>
        <Link to="/">
          <FaArrowLeft size={ 15 } />
          Back
        </Link>
        <h3>Single post</h3>
        <Link to="/create-post">
          <span>
            <p>New post</p>
            <FaPlusCircle size={ 20 } />
          </span>
        </Link>
      </MenuBody>
      {post.map((el: SinglePostType) => (
        <PostCard key={ el.id }>
          <Title>
            {el.title}
          </Title>
          <Published>
            <span>
              Author:
              { el.user?.username }
            </span>
            <span>
              Published in:
              {formatDate(el.published)}
            </span>
          </Published>
          <Content>{el.content}</Content>
          <Category>
            <span>
              {el.categories?.map((category: CategoryType) => (
                <span key={ category.id }>
                  <span className="category-item">
                    {category.name}
                  </span>
                  {' '}
                </span>
              ))}
            </span>
          </Category>
        </PostCard>
      ))}
    </ContainerPost>
  );
}
