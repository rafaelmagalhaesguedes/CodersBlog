import { PostType } from '../types/PostType';
import { HOST } from './ApiService';

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${localStorage.getItem('@Auth:access_token')}`,
};

export const createPost = async (
  userId: number,
  title: string,
  content: string,
  categoryIds: number[],
) => {
  const res = await fetch(`${HOST}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      id: userId,
      title,
      content,
      categoryIds,
    }),
  });

  if (res.status !== 201) {
    const data = await res.json();
    throw new Error(data.message);
  }

  return res.json();
};

export const findAllPosts = async () => {
  const res = await fetch(`${HOST}`, {
    method: 'GET',
    headers,
  });
  let data = await res.json();
  data = data.sort((a: PostType, b: PostType) => b.id - a.id);
  return data;
};

export const findPostById = async (id: number) => {
  const res = await fetch(`${HOST}/${id}`, {
    method: 'GET',
    headers,
  });
  const data = await res.json();
  return data;
};

export const updatePost = async (postId: number, title: string, content: string) => {
  const data = { title, content };

  const response = await fetch(`${HOST}/${postId}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return true;
  }
  throw new Error('Failed to update post');
};

export const searchPost = async (searchQuery: string) => {
  const res = await fetch(`${HOST}/search?q=${searchQuery}`, {
    method: 'GET',
    headers,
  });
  let data = await res.json();
  data = data.sort((a: PostType, b: PostType) => b.id - a.id);
  return data;
};
