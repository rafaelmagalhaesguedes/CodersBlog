//
import { LoginType } from '../types/LoginType';

export interface AuthContext {
  signed: boolean;
  user: object | null;
  loading: boolean;
  setUser: (user: object) => void;
  Login: (loginData: LoginType) => Promise<void>;
  Logout: () => void;
}
