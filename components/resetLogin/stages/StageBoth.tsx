import { Dispatch, SetStateAction } from 'react';
import s from '../resetLogin.module.scss';

type Props = {
  setStage: Dispatch<SetStateAction<number>>;
};

const StageBoth = ({ setStage }: Props) => {
  return (
    <>
      <h1 className={s.heading}>New Login</h1>
      <input className={s.input} type='text' placeholder='new username' />
      <input className={s.input} type='text' placeholder='confirm username' />
      <input className={s.input} type='password' placeholder='new password' />
      <input className={s.input} type='password' placeholder='confirm password' />
      <button className={s.button}>Continue</button>
      <p className={s.cancel} onClick={() => setStage(0)}>
        Cancel
      </p>
    </>
  );
};

export default StageBoth;
