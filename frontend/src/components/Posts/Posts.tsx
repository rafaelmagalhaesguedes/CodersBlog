import { useEffect, useState } from 'react';
import { ContainerPosts, Post, PostCard, SearchBar, Title } from './Style';
import { formatDate } from '../../utils/formatDate';
import { useAuth } from '../../context/auth';
import { UserType } from '../../types/UserType';
import { findAll, searchPost } from '../../services/PostService';

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
      const allPosts = await findAll();
      setPosts(allPosts);
    };
    fetchPosts();
  }, []);

  return (
    <ContainerPosts>
      <Title>
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
        <a href="/create-post">New Post</a>
        <a href="/create-category">New Category</a>
        <a href="/user-posts">My Posts</a>
        <a href="/">All Posts</a>
      </Title>
      <Post>
        {posts.map((post: any) => (
          <PostCard key={ post.id }>
            <h3>{post.title}</h3>
            <div>
              <span>
                Author:
                {user.displayName}
              </span>
              <span>
                Published in:
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
