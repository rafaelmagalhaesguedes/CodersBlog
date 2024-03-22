import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../context/auth';
import { Layout } from '../components/Layout/Layout';
import { Home } from '../pages/Home/Home';
import { SinglePost } from '../components/Posts/SinglePost/SinglePost';
import { EditPost } from '../components/User/EditPost/EditPost';
import { CreatePost } from '../components/User/CreatePost/CreatePost';
import { Categories } from '../components/Categories/Categories';
import { UserPosts } from '../components/User/UserPost/UserPost';
import { Profile } from '../pages/Profile/Profile';
import { LoginPage } from '../pages/Login/LoginPage';
import { Register } from '../pages/Register/Register';
import { Loading } from '../components/Loading/Loading';

export function AppRoutes() {
  const { signed, loading } = useAuth();

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <Routes>
      <Route path="/login" element={ <LoginPage /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path="/single-post/:id" element={ <SinglePost /> } />
        {signed && (
          <>
            <Route path="/edit-post/:id" element={ <EditPost /> } />
            <Route path="/create-post" element={ <CreatePost /> } />
            <Route path="/categories" element={ <Categories /> } />
            <Route path="/user-posts" element={ <UserPosts /> } />
            <Route path="/profile" element={ <Profile /> } />
          </>
        )}
        <Route path="*" element={ <h1>Page Not Found</h1> } />
      </Route>
    </Routes>
  );
}
