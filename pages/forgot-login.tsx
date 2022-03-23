import type { NextPage } from 'next';
import Container from '../components/container';
import ForgotLogin from '../components/forgotLogin';
const ForgotLoginPage: NextPage = () => {
  return (
    <Container>
      <ForgotLogin />
    </Container>
  );
};

export default ForgotLoginPage;
