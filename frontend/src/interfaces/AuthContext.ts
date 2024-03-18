//
import { LoginType } from '../types/LoginType';

export interface AuthContext {
  signed: boolean;
  user: object | null;
  loading: boolean;
  Login: (loginData: LoginType) => Promise<void>;
  Logout: () => void;
}
