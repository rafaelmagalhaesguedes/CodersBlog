import Swal from 'sweetalert2';
import { useState } from 'react';
import { getCategories } from '../services/CategoryService';
import { createPost } from '../services/PostService';

export function usePost(userId: number) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState<any>([]);

  const fetchCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  const handleCreatePost = async () => {
    try {
      await createPost(userId, title, content, selectedCategories.map(Number));
      Swal.fire({
        icon: 'success',
        title: 'Post created',
        showConfirmButton: false,
        timer: 1500,
      });
      setTitle('');
      setContent('');
      setSelectedCategories([]);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
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
    categories,
    selectedCategories,
    fetchCategories,
    handleCreatePost,
    handleCheckboxChange,
  };
}