import Swal from 'sweetalert2';
import { useCallback, useEffect, useState } from 'react';
import { getCategories } from '../services/CategoryService';
import { createPost, findAllPosts, searchPost } from '../services/PostService';

export function usePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<any>([]);

  const handleFetchPosts = async () => {
    try {
      const response = await findAllPosts();
      setPosts(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleFetchPosts();
  }, []);

  const fetchCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  const handleSearch = useCallback(async () => {
    const post = await searchPost(searchQuery);
    setPosts(post);
  }, [searchQuery]);

  useEffect(() => {
    handleSearch();
  }, [searchQuery, handleSearch]);

  const handleCreatePost = async () => {
    try {
      await createPost(title, content, image, selectedCategories.map(Number));
      Swal.fire({
        icon: 'success',
        title: 'Post created',
        showConfirmButton: false,
        timer: 1500,
      });
      setTitle('');
      setContent('');
      setImage('');
      setSelectedCategories([]);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid data, try again!',
      });
      console.error(error);
    }
  };

  const handleCheckboxChange = (event: any) => {
    const value = Number(event.target.value);
    if (event.target.checked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(selectedCategories
        .filter((category: any) => category !== value));
    }
  };

  return {
    title,
    setTitle,
    content,
    setContent,
    image,
    setImage,
    categories,
    selectedCategories,
    posts,
    setPosts,
    handleFetchPosts,
    fetchCategories,
    handleCreatePost,
    handleCheckboxChange,
    handleSearch,
    searchQuery,
    setSearchQuery,
  };
}
