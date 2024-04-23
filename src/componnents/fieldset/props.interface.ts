import { FieldsetHTMLAttributes } from 'react';
import {Props as InputProps} from '../input/index.interface';

interface Props extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
   inputProps?: InputProps;
   className?: string;
   label?: string;
}

export default Props;
