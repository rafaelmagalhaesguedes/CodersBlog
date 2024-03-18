import { useAuth } from '../context/auth';
import { SignRoutes } from './SignRoutes';
import { ProtectRoutes } from './ProtectRoutes';

function Routes() {
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
