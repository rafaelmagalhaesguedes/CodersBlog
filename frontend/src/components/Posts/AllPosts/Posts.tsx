import { useEffect, useState } from 'react';
import { formatDate } from '../../../utils/formatDate';
import { useAuth } from '../../../context/auth';
import { UserType } from '../../../types/UserType';
import { findAllPosts, searchPost } from '../../../services/PostService';
import Banner from '../../../assets/img/coffeeandcode.jpg';
import {
  BannerHome,
  BannerImage, ContainerPosts, Menu, Post, PostCard, SearchBar, Title } from './Style';

export function Posts() {
  const [posts, setPosts] = useState([]);
  const { user } = useAuth() as { user: UserType };
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    const post = await searchPost(searchQuery);
    setPosts(post);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await findAllPosts();
      setPosts(allPosts);
    };
    fetchPosts();
  }, []);

  return (
    <ContainerPosts>
      <BannerHome>
        <Title>
          <h1>COFFEE AND CODE</h1>
          <p>
            Welcome to Coffee and Code, a place to share your knowledge with the community
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
                {user.id === post.userId ? user.username : post.user.username}
              </span>
              <span>
                Published in:
                {' '}
                {formatDate(post.published)}
              </span>
            </div>
            <p>{post.content}</p>
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
      </Post>
    </ContainerPosts>
  );
}
