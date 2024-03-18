import { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../interfaces/AuthContext';
import { LoginType } from '../types/LoginType';
import { api } from '../services/ApiService';

const Auth = createContext<AuthContext>({} as AuthContext);

function AuthProvider({ children }: any) {
  const [user, setUser] = useState<object | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = localStorage.getItem('@Auth:user');
      const storageToken = localStorage.getItem('@Auth:access_token');

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  const Login = async ({ email, password }: LoginType) => {
    setLoading(true);
    try {
      const res = await api.post<{ token: string }>('/login', {
        email,
        password,
      });

      const userData = await api.get('/user', {
        headers: {
          Authorization: `Bearer ${res.data.token}`,
        },
      });

      const loggedInUser = userData.data.find((el: LoginType) => el.email === email);

      if (!loggedInUser) throw new Error('User not found in users array');

      setUser(loggedInUser);

      localStorage.setItem('@Auth:access_token', res.data.token);
      localStorage.setItem('@Auth:user', JSON.stringify(loggedInUser));
    } catch (err) {
      console.error(err);
      console.log('Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  const Logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <Auth.Provider
      value={ { signed: !!user, user, loading, Login, Logout } }
    >
      {children}
    </Auth.Provider>
  );
}

export const useAuth = () => {
  return useContext(Auth);
};

export { AuthProvider };
