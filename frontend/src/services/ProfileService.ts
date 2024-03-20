import { HOST } from './ApiService';

export const updateUserProfile = async (
  userId: string,
  username: string,
  email: string,
  image: string,
) => {
  const response = await fetch(`${HOST}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('@Auth:access_token')}`,
    },
    body: JSON.stringify({ username, email, image }),
  });

  if (!response.ok) {
    throw new Error(`Error updating user: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  if (data) return true;
};
