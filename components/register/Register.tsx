import Link from 'next/link';
import { useRouter } from 'next/router';
import s from './register.module.scss';

const Register = () => {
  const router = useRouter();

  const checkUsername = () => {
    const username = true;
    if (username === true) {
      router.push('/email-sent');
    }
  };

  return (
    <section className={s.container}>
      <h1 className={s.heading}>Register</h1>
      <input className={s.input} type='text' placeholder='email' />
      <button className={s.button} onClick={() => checkUsername()}>
        Next
      </button>
      <p className={s.text}>
        Already Have An Account? <Link href='/login'>Login</Link>
      </p>
    </section>
  );
};

export default Register;
