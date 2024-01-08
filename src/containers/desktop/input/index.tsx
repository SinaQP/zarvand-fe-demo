import { FC } from 'react';
import Props from './props.interface';
import './_input.scss';

const Input: FC<Props> = (props) => {
   return (
      <fieldset className='input-wrapper'>
         <span>{props.label}</span>
         <input {...props} className={`${props.className} input-wrapper__input`} />
      </fieldset>
   );
};

export default Input;
