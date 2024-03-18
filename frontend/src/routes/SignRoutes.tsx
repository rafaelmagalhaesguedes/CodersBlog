import { BrowserRouter, Routes, Route } from 'react-router-dom';

function SignRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
      </Routes>
    </BrowserRouter>
  );
}

export { SignRoutes };
