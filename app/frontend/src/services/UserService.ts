import { UserType } from '../types/UserType';
import { HOST } from './ApiService';

const fetchWithAuth = async (url: string, options: RequestInit) => {
  //
  const token = localStorage.getItem('@Auth:access_token');

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
    ...options.headers,
  };

  const response = await fetch(url, { ...options, headers });

  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
};

export const registerUser = async (userData: UserType) => {
  //
  const { username, email, password, role, image } = userData;

  const data = await fetchWithAuth(`${HOST}/user`, {
    method: 'POST',
    body: JSON.stringify({
      username,
      email,
      password,
      role,
      image,
    }),
  });

  localStorage.setItem('@Auth:access_token', data.token);

  return data;
};

export const getUserPosts = async () => {
  return fetchWithAuth(`${HOST}/post/user`, { method: 'GET' });
};

export const editUserPost = async (postId: number, data: any) => {
  const response = await fetchWithAuth(`${HOST}/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Failed to update post: ${response.status} ${response.statusText}`);
  }

  return response.json();
};

export const deleteUserPost = async (postId: number) => {
  const response = await fetchWithAuth(`${HOST}/post/${postId}`, { method: 'DELETE' });

  if (!response.ok) {
    throw new Error(`Failed to delete post: ${response.status} ${response.statusText}`);
  }

  return true;
};
