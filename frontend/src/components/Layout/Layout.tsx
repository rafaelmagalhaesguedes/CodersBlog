import { Outlet } from 'react-router-dom';
import { CustomHeader } from '../Header/CustonHeader';

export function Layout() {
  return (
    <>
      <CustomHeader />
      <Outlet />
    </>
  );
}
