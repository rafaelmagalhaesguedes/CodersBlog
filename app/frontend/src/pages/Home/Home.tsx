import ButtonBackToTop from '../../components/Button/ButtonBackToTop';
import { Posts } from '../../components/Posts/AllPosts/Posts';
import { Container } from './Style';

export function Home() {
  return (
    <Container>
      <Posts />
      <ButtonBackToTop />
    </Container>
  );
}
