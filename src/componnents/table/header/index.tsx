import { THeadprops } from './index.interface';
import styles from './scss/index.module.scss';

const THead: React.FC<THeadprops> = ({ children, className }) => {
  return (
    <thead className={`${styles['headerContainer']} ${className}`}>
      {children}
    </thead>
  );
};
export default THead;
