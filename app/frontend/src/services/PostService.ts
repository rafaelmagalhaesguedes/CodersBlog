/* eslint-disable max-params */
import { PostType } from '../types/PostType';
import { getCache, setCache } from './CacheService';
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
  const token = localStorage.getItem('@Auth:access_token');

  if (!token) {
    throw new Error('No authorization token found');
  }

  const res = await fetch(`${HOST}/post`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title,
      content,
      image,
      categoryIds,
    }),
  });

  if (res.status !== 201) {
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    throw new Error(data.message);
  }

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
  const data = { title, content, image };

  const response = await fetch(`${HOST}/post/${postId}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return true;
  }
  throw new Error('Failed to update post');
};

export const findAllPosts = async () => {
  //
  let data = getCache();

  if (data) {
    return data;
  }

  const res = await fetch(`${HOST}/post`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  //
  data = await res.json();
  data = data.sort((a: PostType, b: PostType) => b.id - a.id);

  // Update cache
  setCache(data);

  return data;
};

export const searchPost = async (searchQuery: string) => {
  //
  const dataCashed = getCache();

  if (dataCashed) {
    return dataCashed.filter((post: PostType) => post.title
      .toLowerCase().includes(searchQuery.toLowerCase()));
  }

  const res = await fetch(`${HOST}/post/search?q=${searchQuery}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  //
  let data = await res.json();
  data = data.sort((a: PostType, b: PostType) => b.id - a.id);
  console.log(data);

  setCache(data);

  return data;
};
