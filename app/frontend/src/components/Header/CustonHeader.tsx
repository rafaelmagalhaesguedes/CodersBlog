import { useAuth } from '../../context/auth';
import { UserType } from '../../types/UserType';
import { AdminHeader } from './AdminHeader/AdminHeader';
import { HomeHeader } from './HomeHeader/HomeHeader';
import { UserHeader } from './UserHeader/UserHeader';

export function CustomHeader() {
  const { user } = useAuth();
  const { role } = user as UserType | { role: string } || {};

  if (role === 'admin') {
    return <AdminHeader />;
  }

  if (role === 'user') {
    return <UserHeader />;
  }

  return <HomeHeader />;
}
