import Swal from 'sweetalert2';
import { useState } from 'react';
import { useAuth } from '../context/auth';
import { updateUserProfile } from '../services/ProfileService';

type ProfileType = { user: any; Logout: () => void };

export function useProfile() {
  //
  const { user, Logout } = useAuth() as ProfileType;
  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [image, setImage] = useState(user.image);

  const handleLogout = () => {
    Logout();
  };

  const handleEdit = async () => {
    if (!editing) {
      setEditing(true);
    } else {
      const res = await updateUserProfile(user.id, username, email, image);

      if (res) {
        setEditing(false);
        Swal.fire({
          title: 'Profile updated',
          icon: 'success',
          timer: 2500,
        });
      } else {
        console.error('Error editing profile');
      }
    }
  };

  return {
    user,
    editing,
    setEditing,
    username,
    setUsername,
    email,
    setEmail,
    image,
    setImage,
    handleLogout,
    handleEdit,
  };
}
