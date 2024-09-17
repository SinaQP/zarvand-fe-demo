import { FC } from 'react';
import Input from '../input';
import Props from './props.interface';
import './_index.scss';

const Fieldset: FC<Props> = (props) => {
   return (
      <fieldset {...props} className={`fieldset ${props.className}`}>
         <legend className="fieldset__legend">{props.label}</legend>
         <Input {...props.inputProps} className="fieldset__input" />
      </fieldset>
   );
};

export default Fieldset;
