import { HOST } from './ApiService';

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${localStorage.getItem('@Auth:access_token')}`,
};

export const createCategory = async (name: string) => {
  const res = await fetch(`${HOST}/categories`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      name,
    }),
  });

  if (res.status !== 201) {
    const data = await res.json();
    throw new Error(data.message);
  }

  return res.json();
};

export const getCategories = async () => {
  const res = await fetch(`${HOST}/categories`, {
    method: 'GET',
    headers,
  });
  const data = await res.json();
  return data;
};

export const updateCategory = async (id: number, name: string) => {
  const res = await fetch(`${HOST}/categories/${id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      name,
    }),
  });

  if (res.status !== 200) {
    const data = await res.json();
    throw new Error(data.message);
  }

  return res.json();
};

export const deleteCategory = async (id: string) => {
  const res = await fetch(`${HOST}/categories/${id}`, {
    method: 'DELETE',
    headers,
  });

  if (res.status !== 200) {
    const data = await res.json();
    throw new Error(data.message);
  }

  return res.json();
};
