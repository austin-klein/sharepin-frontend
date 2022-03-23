import type { NextPage } from 'next';
import Container from '../components/container';
import Login from '../components/login';

const LoginPage: NextPage = () => {
  return (
    <Container>
      <Login />
    </Container>
  );
};

export default LoginPage;
