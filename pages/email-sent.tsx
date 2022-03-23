import type { NextPage } from 'next';
import Container from '../components/container';
import EmailSent from '../components/emailSent';

const EmailSentPage: NextPage = () => {
  return (
    <Container>
      <EmailSent />
    </Container>
  );
};

export default EmailSentPage;
