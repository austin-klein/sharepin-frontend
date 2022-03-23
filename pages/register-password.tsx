import type { NextPage } from 'next';
import Container from '../components/container';
import RegisterPassword from '../components/registerPassword';

const RegisterPasswordPage: NextPage = () => {
  return (
    <Container>
      <RegisterPassword />
    </Container>
  );
};

export default RegisterPasswordPage;
