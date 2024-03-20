import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaPlusCircle } from 'react-icons/fa';
import { useAuth } from '../../../context/auth';
import { UserType } from '../../../types/UserType';
import { useUser } from '../../../hooks/useUser';
import { formatDate } from '../../../utils/formatDate';
import { trimContent } from '../../../utils/trimContent';
import {
  UserPostsContainer,
  MenuBody,
  Post,
  PostHeader,
  PostTitle,
  PostFooter,
  PostContent,
  PostCategory,
} from './Style';

export function UserPosts() {
  const { user } = useAuth() as { user: UserType };
  const { id } = user;
  const {
    userPosts,
    fetchUserPosts,
    handleDeleteUserPost,
  } = useUser();

  useEffect(() => {
    fetchUserPosts(id);
  }, [id]);

  return (
    <UserPostsContainer>
      <MenuBody>
        <Link to="/">
          <FaArrowLeft size={ 15 } />
          Back
        </Link>
        <h3>My Posts</h3>
        <Link to="/create-post">
          <span>
            <p>New post</p>
            <FaPlusCircle size={ 20 } />
          </span>
        </Link>
      </MenuBody>
      {userPosts && userPosts.length > 0 ? (
        userPosts.map((post: any) => (
          <Post key={ post.id }>
            <PostHeader>
              <PostTitle>{post.title}</PostTitle>
              <div>
                <button><Link to={ `/edit-post/${post.id}` }>Edit</Link></button>
                <button onClick={ () => handleDeleteUserPost(post.id) }>Delete</button>
              </div>
            </PostHeader>
            <PostFooter>
              <div>
                Author:
                {post.user.username}
              </div>
              <div>
                Published in:
                {formatDate(post.published)}
              </div>
              <div>
                Updated in:
                {formatDate(post.updated)}
              </div>
            </PostFooter>
            <PostContent>
              <Link to={ `/single-post/${post.id}` }>
                {trimContent(post.content, 50)}
              </Link>
            </PostContent>
            <PostCategory>
              {post.categories.map((category: any) => (
                <span key={ category.id }>{category.name}</span>
              ))}
            </PostCategory>
          </Post>
        ))
      ) : (
        <div className="message-not-found">
          <p>
            You have not published any posts yet. Create a new post
          </p>
        </div>
      )}
    </UserPostsContainer>
  );
}
