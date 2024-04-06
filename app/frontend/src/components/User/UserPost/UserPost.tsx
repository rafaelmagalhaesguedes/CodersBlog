/* eslint-disable react/jsx-max-depth */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import { FaSearch, FaTrash } from 'react-icons/fa';
import { useUser } from '../../../hooks/useUser';
import { formatDate } from '../../../utils/formatDate';
import { trimContent } from '../../../utils/trimContent';
import { searchPost } from '../../../services/PostService';
import {
  UserPostsContainer,
  Post,
  PostHeader,
  PostTitle,
  PostFooter,
  PostContent,
  PostCategory,
  Header,
  PostWrapper,
  ReadMore,
} from './Style';

export function UserPosts() {
  const { userPosts, setUserPosts, fetchUserPosts, handleDeleteUserPost } = useUser();
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchUserPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = async () => {
    try {
      const searchResult = await searchPost(search);
      setUserPosts(searchResult);
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <UserPostsContainer>
      <Header>
        <h1>Dashboard</h1>
        <div>
          <input
            type="text"
            placeholder="Search post"
            value={ search }
            onChange={ (e) => setSearch(e.target.value) }
            onKeyDown={ handleKeyDown }
          />
          <FaSearch onClick={ handleSearch } size={ 25 } color="#FFF" />
        </div>
      </Header>
      {userPosts && userPosts.length > 0 ? (
        userPosts.map((post: any) => (
          <Post key={ post.id }>
            <PostWrapper>
              <PostHeader>
                <PostTitle>{post.title}</PostTitle>
                <div>
                  <button>
                    <Link to={ `/edit-post/${post.id}` }>
                      <FiEdit />
                      Edit
                    </Link>
                  </button>
                  <button onClick={ () => handleDeleteUserPost(post.id) }>
                    <FaTrash />
                    Delete
                  </button>
                </div>
              </PostHeader>
              <PostFooter>
                <div>
                  <span>Published in:</span>
                  {' '}
                  <p>{formatDate(post.published)}</p>
                </div>
                <div>
                  <span>Updated in:</span>
                  {' '}
                  <p>{formatDate(post.updated)}</p>
                </div>
              </PostFooter>
              <PostContent>
                <Link to={ `/single-post/${post.id}` }>
                  {trimContent(post.content, 50)}
                </Link>
                <ReadMore>
                  <Link to={ `/single-post/${post.id}` }>Read more</Link>
                </ReadMore>
              </PostContent>
              <PostCategory>
                {post.categories.map((category: any) => (
                  <span key={ category.id }>{category.name}</span>
                ))}
              </PostCategory>
            </PostWrapper>
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
