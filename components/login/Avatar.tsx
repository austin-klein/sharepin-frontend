import s from './login.module.scss';

type Props = {
  username: string;
  focus: boolean;
};

const Avatar = ({ username, focus }: Props) => {
  if (username === '' || focus) return <></>;
  return (
    <img
      className={s.avatar}
      src={`https://avatars.dicebear.com/api/identicon/${username}.svg`}
      alt='Username Image'
    />
  );
};

export default Avatar;
