//
import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './context/auth';
import { GlobalStyle } from './styles/GlobalStyle';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalStyle />
      <App />
    </AuthProvider>
  </React.StrictMode>,
);
