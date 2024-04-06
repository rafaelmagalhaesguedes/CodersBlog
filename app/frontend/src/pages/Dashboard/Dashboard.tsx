import { UserPosts } from '../../components/User/UserPost/UserPost';
import { Container } from './Style';

export function Dashboard() {
  return (
    <Container>
      <UserPosts />
    </Container>
  );
}
