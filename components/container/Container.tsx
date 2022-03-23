import s from './container.module.scss';

type Props = {
  children: JSX.Element;
};

const Container = ({ children }: Props) => {
  return <main className={s.container}>{children}</main>;
};

export default Container;
