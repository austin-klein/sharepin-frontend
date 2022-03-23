import s from './registerPassword.module.scss';

const RegisterPassword = () => {
  return (
    <section className={s.container}>
      <h1 className={s.heading}>Create Password</h1>
      <input className={s.input} type='password' placeholder='password' />
      <input className={s.input} type='password' placeholder='confirm password' />
      <button className={s.button}>Register Now</button>
    </section>
  );
};

export default RegisterPassword;
