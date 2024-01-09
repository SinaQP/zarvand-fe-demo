import { FieldsetHTMLAttributes } from 'react';
import InputProps from '../input/props.interface';

interface Props extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
   inputProps?: InputProps;
   className?: string;
   label?: string;
}

export default Props;
