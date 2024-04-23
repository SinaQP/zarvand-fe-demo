import { FC } from 'react';

import { Props } from './index.interface';
import './index.scss';

const Button: FC<Props> = (props) => (
   <button {...props} className={`${props.className} button`}>
      {props.children}
   </button>
);

export default Button;