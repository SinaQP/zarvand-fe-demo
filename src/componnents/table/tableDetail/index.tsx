import { TdProps } from './index.interface';
import styles from './scss/index.module.scss';

const Td: React.FC<TdProps> = ({ children, className, style }) => {
  return (
    <td
      className={`${styles['tdContainer']} ${
        className === 'operation' ? styles[className] : className
      }`}
      style={style}
    >
      {children}
    </td>
  );
};
export default Td;
