import { useAuth } from '../context/auth';
import { ProtectRoutes } from './ProtectRoutes';
import { SignRoutes } from './SignRoutes';

export function Routes() {
  const { signed, loading } = useAuth();

  if (loading) {
    return (
      <div>
        <div>Loading...</div>
      </div>
    );
  }

  return signed ? <ProtectRoutes /> : <SignRoutes />;
}
