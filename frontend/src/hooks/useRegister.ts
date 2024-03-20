// hooks/useRegister.ts
import { useState } from 'react';
import Swal from 'sweetalert2';
import { registerUser } from '../services/UserService';

export function useRegister() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role] = useState('user');
  const [image, setImage] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const validateEmail = (mail: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(mail);
  };

  const validatePassword = (pass: string) => pass.length >= 6;

  const validateDisplayName = (name: string) => name.length >= 8;

  const validatePasswordConfirmation = (pass: string, passConfirmation: string) => {
    return pass === passConfirmation;
  };

  const validateInputs = () => {
    if (!validateEmail(email)) {
      return { isValid: false, message: 'Invalid email' };
    }
    if (!validatePassword(password)) {
      return { isValid: false, message: 'Password must be at least 6 characters' };
    }
    if (!validatePasswordConfirmation(password, passwordConfirmation)) {
      return { isValid: false, message: 'Passwords do not match' };
    }
    if (!validateDisplayName(username)) {
      return { isValid: false, message: 'Display name must be at least 8 characters' };
    }
    return { isValid: true };
  };

  async function handleRegister() {
    const validation = validateInputs();
    if (!validation.isValid) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: validation.message,
      });
      return;
    }

    const userData: any = {
      username,
      email,
      password,
      role,
      image,
    };

    try {
      await registerUser(userData);

      // Clear the form
      setUsername('');
      setEmail('');
      setPassword('');
      setImage('');
      setPasswordConfirmation('');

      Swal.fire({
        icon: 'success',
        title: 'User created',
        text: 'User created successfully',
        timer: 3000,
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error creating user. Please try again.',
      });
      console.log(error);
    }
  }

  return {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    image,
    setImage,
    passwordConfirmation,
    setPasswordConfirmation,
    handleRegister,
  };
}
