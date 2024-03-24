/* eslint-disable max-params */
import { PostType } from '../types/PostType';
import { HOST } from './ApiService';

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${localStorage.getItem('@Auth:access_token')}`,
};

export const createPost = async (
  title: string,
  content: string,
  image: string,
  categoryIds: number[],
) => {
  //
  const token = localStorage.getItem('@Auth:access_token');

  if (!token) throw new Error('No authorization token found');

  const res = await fetch(`${HOST}/post`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ title, content, image, categoryIds }),
  });

  if (res.status !== 201) throw new Error('Error creating post');

  return res.json();
};

export const findPostById = async (id: number) => {
  const res = await fetch(`${HOST}/post/${id}`, {
    method: 'GET',
    headers,
  });
  const data = await res.json();
  return data;
};

export const updatePost = async (
  postId: number,
  title: string,
  content: string,
  image: string,
) => {
  //
  const data = { title, content, image };

  const response = await fetch(`${HOST}/post/${postId}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error('Failed to update post');
  return true;
};

export const findAllPosts = async () => {
  //
  const res = await fetch(`${HOST}/post`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  //
  let data = await res.json();
  data = data.sort((a: PostType, b: PostType) => b.id - a.id);

  return data;
};

export const searchPost = async (searchQuery: string) => {
  //
  const res = await fetch(`${HOST}/post/search?q=${searchQuery}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  //
  let data = await res.json();
  data = data.sort((a: PostType, b: PostType) => b.id - a.id);

  return data;
};
