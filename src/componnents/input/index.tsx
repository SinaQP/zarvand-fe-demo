import { FC } from 'react';
import Props from './props.interface';
import './_input.scss';

const Input: FC<Props> = (props) => {
   return <input {...props} className={`${props.className} input`} />;
};

export default Input;
