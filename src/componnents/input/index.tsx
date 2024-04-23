import { FC } from 'react';
import { Props } from './index.interface';
import './index.scss';

const Input: FC<Props> = (props) => {
   return <input {...props} className={`${props.className} input`} />;
};

export default Input;
