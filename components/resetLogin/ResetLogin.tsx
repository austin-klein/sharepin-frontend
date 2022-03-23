import { useState } from 'react';
import s from './resetLogin.module.scss';
import StageBoth from './stages/StageBoth';
import StagePassword from './stages/StagePassword';
import StageUsername from './stages/StageUsername';

const ResetLogin = () => {
  const [stage, setStage] = useState(0);
  return (
    <section className={s.container}>
      {stage === 0 && (
        <>
          <h1 className={s.heading}>Reset Login Credentials</h1>
          <p className={s.text}>test123@email.com</p>
          <button className={s.button} onClick={() => setStage(1)}>
            Reset Username
          </button>
          <button className={s.button} onClick={() => setStage(2)}>
            Reset Password
          </button>
          <button className={s.button} onClick={() => setStage(3)}>
            Reset Both
          </button>
        </>
      )}

      {stage === 1 && <StageUsername setStage={setStage} />}
      {stage === 2 && <StagePassword setStage={setStage} />}
      {stage === 3 && <StageBoth setStage={setStage} />}
    </section>
  );
};

export default ResetLogin;
