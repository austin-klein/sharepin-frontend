import { useRouter } from 'next/router';
import s from './forgotLogin.module.scss';

const ForgotLogin = () => {
  const router = useRouter();

  const checkEmail = () => {
    const email = true;
    if (email === true) {
      router.push('/email-sent');
    }
  };
  return (
    <section className={s.container}>
      <h1 className={s.heading}>Forgot Login</h1>
      <p className={s.text}>Enter Your Account Email</p>
      <input className={s.input} placeholder='email' />
      <button className={s.button} onClick={() => checkEmail()}>
        Next
      </button>
    </section>
  );
};

export default ForgotLogin;
