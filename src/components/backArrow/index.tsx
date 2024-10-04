import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import BackArrowIcon from '../../assets/images/back-arrow.svg';
import styles from './index.module.scss';

const BackArrow: FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = (props) => {
   return <div {...props} className={`${props.className} ${styles['back-arrow']}`}>
      <img src={BackArrowIcon} alt="back-arrow" />
   </div>;

};

export default BackArrow;