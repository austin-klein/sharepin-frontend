import type { NextPage } from 'next';
import Container from '../components/container';
import RegisterUsername from '../components/registerUsername';

const RegisterUsernamePage: NextPage = () => {
  return (
    <Container>
      <RegisterUsername />
    </Container>
  );
};

export default RegisterUsernamePage;
