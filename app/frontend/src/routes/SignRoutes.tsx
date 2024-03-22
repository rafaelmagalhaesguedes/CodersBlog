import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../pages/Login/LoginPage';
import { Register } from '../pages/Register/Register';

export function SignRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <LoginPage /> } />
      <Route path="/create-user" element={ <Register /> } />
    </Routes>
  );
}
