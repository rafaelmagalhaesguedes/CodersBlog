import { Outlet } from 'react-router-dom';
import { CustomHeader } from '../../Header/CustonHeader';
import { Container } from './Style';

export function LayoutDashboard() {
  return (
    <Container>
      <CustomHeader />
      <Outlet />
    </Container>
  );
}
