import { FC } from 'react';
import Input from '../input';
import Props from './props.interface';

const Fieldset: FC<Props> = (props) => {
   return (
      <fieldset {...props} className="fieldset">
         <legend className="fieldset__legend">{props.label}</legend>
         <Input {...props.inputProps} className="filedset__input" />
      </fieldset>
   );
};

export default Fieldset;
