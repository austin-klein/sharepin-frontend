import s from './emailSent.module.scss';

const EmailSent = () => {
  return (
    <section className={s.container}>
      <p className={s.text}>
        An email has been sent to <span>test@email.com</span> check your inbox for further
        instructions
      </p>
      <button className={s.button}>Resend Email</button>
    </section>
  );
};

export default EmailSent;
