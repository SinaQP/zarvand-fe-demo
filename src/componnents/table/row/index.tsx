import { Rowprops } from './index.interface';
import styles from './scss/index.module.scss';

const Tr: React.FC<Rowprops> = ({ children, className, onClick }) => {
  return (
    <tr
      className={`${styles['trContainer']} ${
        className === 'header'
          ? styles[className]
          : className === 'createButton'
          ? styles[className]
          : className === 'disabled'
          ? styles[className]
          : className === 'editCreateRowStyles'
          ? styles[className]
          : className === 'none'
          ? styles[className]
          : className
      }`}
      onClick={onClick}
    >
      {children}
    </tr>
  );
};
export default Tr;
