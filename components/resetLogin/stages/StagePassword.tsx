import { Dispatch, SetStateAction } from 'react';
import s from '../resetLogin.module.scss';

type Props = {
  setStage: Dispatch<SetStateAction<number>>;
};

const StagePassword = ({ setStage }: Props) => {
  return (
    <>
      <h1 className={s.heading}>New Password</h1>
      <input className={s.input} type='password' placeholder='new password' />
      <input className={s.input} type='password' placeholder='confirm password' />
      <button className={s.button}>Continue</button>
      <p className={s.cancel} onClick={() => setStage(0)}>
        Cancel
      </p>
    </>
  );
};

export default StagePassword;
