import { SxProps, Theme } from '@mui/material';
import { MouseEventHandler } from 'react';

interface Props {
  margin?: 'dense' | 'normal' | 'none';
  required?: boolean;
  id?: string;
  label?: string;
  name?: string;
  autoComplete?: string;
  placeholder?: string;
  disabled?: boolean;
  maxLength?: number;
  type?:
    | 'password'
    | 'email'
    | 'number'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'file'
    | 'hidden'
    | 'image'
    | 'tel'
    | 'text'
    | 'submit'
    | 'radio'
    | 'reset'
    | 'range';
  size?: 'small' | 'medium';
  autoFocus?: boolean;
  onlyNumber?: boolean;
  error?: boolean;
  sx?: SxProps<Theme>;
  fullWidth?: boolean;
  className?: string;
  value?: string;
  onChange?: (event: any) => void;
  onBlur?: any;
  onFocus?: any;
  multiline?: boolean;
  searchIcon?: {
    visibility?: boolean;
    onClick?: MouseEventHandler<SVGSVGElement>;
  };
}

export default Props;
