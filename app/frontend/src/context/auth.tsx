import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../interfaces/AuthContext';
import { LoginType } from '../types/LoginType';
import { api } from '../services/ApiService';
import { isTokenDenied } from '../services/CasheService';

const Auth = createContext<AuthContext>({} as AuthContext);

function AuthProvider({ children }: any) {
  const [user, setUser] = useState<object | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

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

  const fetchUser = async (token: string, email: string) => {
    const userData = await api.get('/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const loggedInUser = userData.data.find((el: LoginType) => el.email === email);

    if (!loggedInUser) {
      console.log('User not found in users array');
      throw new Error('User not found in users array');
    }

    return loggedInUser;
  };

  const storeUser = (users: LoginType, token: string) => {
    setUser(users);
    localStorage.setItem('@Auth:access_token', token);
    localStorage.setItem('@Auth:user', JSON.stringify(users));
  };

  const Login = async ({ email, password }: LoginType) => {
    setLoading(true);
    try {
      const res = await api.post<{ token: string }>('/login', {
        email,
        password,
      });

      if (isTokenDenied(res.data.token)) {
        console.log('Token denied');
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Invalid token!',
        });
      }

      const loggedInUser = await fetchUser(res.data.token, email);

      storeUser(loggedInUser, res.data.token);

      navigate('/');
    } catch (err) {
      const newError = err as Error;
      console.log('Error login: ', newError.message);
      console.error('Error login: ', err);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid email or password!',
      });
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
