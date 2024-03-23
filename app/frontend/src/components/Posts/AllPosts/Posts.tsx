import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loading } from '../../Loading/Loading';
import { formatDate } from '../../../utils/formatDate';
import { trimContent } from '../../../utils/trimContent';
import Banner from '../../../assets/img/coffeeandcode.jpg';
import { findAllPosts, searchPost } from '../../../services/PostService';
import {
  BannerHome,
  BannerImage,
  ContainerPosts,
  ContentBody, Menu, Post, PostCard, PostsNotFound, SearchBar, Title } from './Style';

export function Posts() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    const post = await searchPost(searchQuery);
    setPosts(post);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const post = await findAllPosts();
      setPosts(post);
    };
    fetchPosts();
  }, []);

  if (!posts) {
    return <Loading />;
  }

  return (
    <ContainerPosts>
      <BannerHome>
        <Title>
          <h1>WELCOME TO THE BLOG!</h1>
          <p>
            Coffee and Code is a blog about programming,
            technology, and coffee. Enjoy reading!
          </p>
        </Title>
        <BannerImage>
          <img src={ Banner } alt="Banner" />
        </BannerImage>
      </BannerHome>
      <Menu>
        <h2>All Posts</h2>
        <SearchBar>
          <input
            type="text"
            value={ searchQuery }
            onChange={ (e) => setSearchQuery(e.target.value) }
            placeholder="Search for a post..."
            onKeyDown={ (e) => e.key === 'Enter' && handleSearch() }
          />
          <button onClick={ handleSearch }>Search</button>
        </SearchBar>
      </Menu>
      <Post>
        {posts.map((post: any) => (
          <PostCard key={ post.id }>
            <h3>{post.title}</h3>
            <div>
              <span>
                Author:
                {' '}
                {post.user.username}
              </span>
              <span>
                Published in:
                {' '}
                {formatDate(post.published)}
              </span>
            </div>
            <ContentBody>
              <img src={ post.image } alt="Post" />
              <div className="content">
                <Link to={ `/single-post/${post.id}` }>
                  <p>
                    {trimContent(post.content, 30)}
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
        <PostsNotFound>
          {posts.length === 0 && <h2>No posts found!</h2>}
        </PostsNotFound>
      </Post>
    </ContainerPosts>
  );
}
