import { useState } from 'react';
import s from './registerUsername.module.scss';
import StageOne from './stages/StageOne';
import StageTwo from './stages/StageTwo';

const RegisterUsername = () => {
  const [stage, setStage] = useState(1);
  return (
    <section className={s.container}>
      {stage === 1 && <StageOne setStage={setStage} />}
      {stage === 2 && <StageTwo setStage={setStage} />}
    </section>
  );
};

export default RegisterUsername;
