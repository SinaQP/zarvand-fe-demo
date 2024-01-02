import { ThProps } from './index.interface';
import styles from './scss/index.module.scss';

const Th: React.FC<ThProps> = ({ children, className, style }) => {
  return (
    <th
      className={`${styles['thContainer']} ${
        className === 'operation' ? styles[className] : className
      }`}
      style={style}
    >
      {children}
    </th>
  );
};
export default Th;
