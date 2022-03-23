import { Dispatch, SetStateAction } from 'react';
import s from '../registerUsername.module.scss';

type Props = {
  setStage: Dispatch<SetStateAction<number>>;
};

const StageOne = ({ setStage }: Props) => {
  return (
    <>
      <h1 className={s.heading}>Pick Username</h1>
      <p className={s.text}>Create your completely unique username</p>
      <input className={s.input} type='text' placeholder='username' />
      <button className={s.button} onClick={() => setStage(2)}>
        Check If Available
      </button>
    </>
  );
};

export default StageOne;
