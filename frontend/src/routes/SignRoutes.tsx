import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from '../pages/Login/LoginPage';

export function SignRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LoginPage /> } />
      </Routes>
    </BrowserRouter>
  );
}
