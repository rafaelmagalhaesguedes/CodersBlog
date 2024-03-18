import { PostType } from '../types/PostType';

export const findAll = async () => {
  const res = await fetch('http://localhost:3001/post', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('@Auth:access_token')}`,
    },
  });
  let data = await res.json();
  data = data.sort((a: PostType, b: PostType) => b.id - a.id);
  return data;
};

export const searchPost = async (searchQuery: string) => {
  const res = await fetch(`http://localhost:3001/post/search?q=${searchQuery}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('@Auth:access_token')}`,
    },
  });
  let data = await res.json();
  data = data.sort((a: PostType, b: PostType) => b.id - a.id);
  return data;
};
