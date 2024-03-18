import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { Home } from '../pages/Home/Home';

export function ProtectRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route path="/" element={ <Home /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
