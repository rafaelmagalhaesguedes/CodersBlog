import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { useAuth } from '../context/auth';
import { Profile } from '../pages/Profile/Profile';
import { LoginPage } from '../pages/Login/LoginPage';
import { Register } from '../pages/Register/Register';
import { Loading } from '../components/Loading/Loading';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { EditPost } from '../components/User/EditPost/EditPost';
import { Categories } from '../components/Categories/Categories';
import { UserPosts } from '../components/User/UserPost/UserPost';
import { CreatePost } from '../components/User/CreatePost/CreatePost';
import { SinglePost } from '../components/Posts/SinglePost/SinglePost';
import { LayoutHome } from '../components/Layout/LayoutHome/LayoutHome';
import { LayoutDashboard } from '../components/Layout/LayoutDashboard/LayoutDashboard';

export function AppRoutes() {
  const { signed, loading } = useAuth();

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <Routes>
      <Route path="/" element={ signed ? <LayoutDashboard /> : <LayoutHome /> }>
        <Route index element={ signed ? <Dashboard /> : <Home /> } />
        <Route path="/single-post/:id" element={ <SinglePost /> } />
        {signed && (
          <>
            <Route path="/dashboard" element={ <Dashboard /> } />
            <Route path="/edit-post/:id" element={ <EditPost /> } />
            <Route path="/create-post" element={ <CreatePost /> } />
            <Route path="/user-posts" element={ <UserPosts /> } />
            <Route path="/categories" element={ <Categories /> } />
            <Route path="/profile" element={ <Profile /> } />
          </>
        )}
      </Route>
      <Route path="/login" element={ <LoginPage /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="*" element={ <h1>Page Not Found</h1> } />
    </Routes>
  );
}
