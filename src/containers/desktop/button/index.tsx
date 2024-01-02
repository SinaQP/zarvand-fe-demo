import { FC } from 'react';

import Props from './props.interface';
import './_button.scss';

const Button: FC<Props> = (props) => (
      <button {...props} className={`${props.className} button`}>
            {props.children}
      </button>
);

export default Button;
