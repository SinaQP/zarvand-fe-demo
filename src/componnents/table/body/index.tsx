import { TbodyProps } from './index.interface';
import styles from './scss/index.module.scss';

const Tbody: React.FC<TbodyProps> = ({ children, className }) => {
  return (
    <tbody
      className={`${styles['bodyContainer']} ${
        className === 'disabled' ? styles['disabled'] : className
      }`}
    >
      {children}
    </tbody>
  );
};
export default Tbody;
