import { FC } from 'react';
import { Props } from './index.interface';
import './index.scss';
import styles from './index.module.scss';

const Button: FC<Props> = (props) => (
   <button {...props} className={`${props.className} button`}>
      {props.children}
   </button>
);

export default Button;

export const NewButton: FC<Props> = (props) => (
   <button {...props} className={`${props.className} ${styles.button}`}>
      {props.children}
   </button>
);


