import { Dispatch, SetStateAction } from 'react';
import s from './modal.module.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';

type Props = {
  setModal: Dispatch<SetStateAction<boolean>>;
};

const profileData = ['username123', 'username456', 'username789'];

const Modal = ({ setModal }: Props) => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <AiOutlineClose className={s.close} onClick={() => setModal(false)} />
        <p className={s.text}>
          Each username comes with a completely unique identicon as a profile picture!
        </p>
        <span className={s.example}>
          Examples <BsFillArrowDownCircleFill className={s.arrow} />
        </span>
        <div className={s.profileContainer}>
          {profileData.map((username) => (
            <div className={s.profile} key={username}>
              <p>{username}</p>
              <img
                src={`https://avatars.dicebear.com/api/identicon/${username}.svg`}
                alt='Username Image'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
