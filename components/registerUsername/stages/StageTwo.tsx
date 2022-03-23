import s from '../registerUsername.module.scss';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { Dispatch, SetStateAction, useState } from 'react';
import Modal from '../../modal';
import { useRouter } from 'next/router';

type Props = {
  setStage: Dispatch<SetStateAction<number>>;
};

const StageTwo = ({ setStage }: Props) => {
  const [modal, setModal] = useState(false);

  const router = useRouter();

  const confirmUsername = () => {
    const username = true;
    if (username === true) {
      router.push('/register-password');
    }
  };
  return (
    <>
      <p className={s.text}>
        Yup! <span>username123</span> is available!
      </p>
      <div className={s.usernameContainer}>
        <div className={s.usernameProfile}>
          <p>username123</p>
          <img
            src='https://avatars.dicebear.com/api/identicon/username123.svg'
            alt='Username Image'
          />
        </div>
        <span className={s.question} onClick={() => setModal(true)}>
          <BsFillArrowLeftCircleFill className={s.icon} />
          What is this?
        </span>
      </div>
      <button className={s.button} onClick={() => confirmUsername()}>
        Next
      </button>
      <p className={s.change} onClick={() => setStage(1)}>
        Change Username
      </p>
      {modal && <Modal setModal={setModal} />}
    </>
  );
};

export default StageTwo;
