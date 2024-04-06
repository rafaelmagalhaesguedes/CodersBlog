/* eslint-disable jsx-a11y/control-has-associated-label */
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { useCallback, useEffect, useState } from 'react';
import { Loading } from '../../Loading/Loading';
import { formatDate } from '../../../utils/formatDate';
import { trimContent } from '../../../utils/trimContent';
import { findAllPosts, searchPost } from '../../../services/PostService';
import {
  ButtonLoadMore,
  ContainerPosts,
  ContentBody,
  LoadMore, Menu, Post, PostCard, PostsNotFound, SearchBar } from './Style';

export function Posts() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [itemsToShow, setItemsToShow] = useState(5);
  const [loading, setLoading] = useState(true);

  // Load data when click on button load more
  const loadMore = () => setItemsToShow(itemsToShow + 5);

  const handleSearch = useCallback(async () => {
    const post = await searchPost(searchQuery);
    setPosts(post);
  }, [searchQuery]);

  useEffect(() => {
    const fetchPosts = async () => {
      const post = await findAllPosts();
      setPosts(post);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <ContainerPosts>
      <Menu>
        <SearchBar>
          <input
            type="text"
            value={ searchQuery }
            onChange={ (e) => setSearchQuery(e.target.value) }
            placeholder="Search"
            onKeyDown={ (e) => e.key === 'Enter' && handleSearch() }
          />
          <button type="button" onClick={ handleSearch }>
            <FaSearch size={ 20 } />
          </button>
        </SearchBar>
      </Menu>
      <Post>
        {posts.slice(0, itemsToShow).map((post: any) => (
          <PostCard key={ post.id }>
            <h3>{post.title}</h3>
            <div>
              <span>
                <strong>Author:</strong>
                {' '}
                {post.user.username}
              </span>
              <span>
                <strong>Published in:</strong>
                {' '}
                {formatDate(post.published)}
              </span>
            </div>
            <ContentBody>
              <img src={ post.image } alt="Post" />
              <div className="content">
                <Link to={ `/single-post/${post.id}` }>
                  <p>
                    {trimContent(post.content, 50)}
                  </p>
                </Link>
                <span className="read-more">
                  <Link to={ `/single-post/${post.id}` }>Read more</Link>
                </span>
              </div>
            </ContentBody>
            <span>
              <span className="category">
                {post.categories.map((category: any) => (
                  <span className="category-item" key={ category.id }>
                    {category.name}
                  </span>
                ))}
              </span>
            </span>
          </PostCard>
        ))}
        <LoadMore>
          {posts && itemsToShow < posts.length && (
            <ButtonLoadMore onClick={ loadMore }>More posts</ButtonLoadMore>
          )}
        </LoadMore>
        <PostsNotFound>
          {posts.length === 0 && <h2>No posts found!</h2>}
        </PostsNotFound>
      </Post>
    </ContainerPosts>
  );
}
