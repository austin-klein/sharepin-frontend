import Link from 'next/link';
import { useState } from 'react';
import Avatar from './Avatar';
import s from './login.module.scss';

const Login = () => {
  const [username, setUsername] = useState('');
  const [focus, setFocus] = useState(true);
  return (
    <section className={s.container}>
      <h1 className={s.heading}>Login</h1>
      <input
        className={s.input}
        type='text'
        placeholder='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
      />
      <Avatar username={username} focus={focus} />
      <input className={s.input} type='password' placeholder='password' />
      <button className={s.button}>Login Now</button>
      <Link href='/forgot-login'>I Forgot My Username / Password</Link>
      <p className={s.text}>
        Don&apos;t Have An Account? <Link href='/register'>Register</Link>
      </p>
    </section>
  );
};

export default Login;
