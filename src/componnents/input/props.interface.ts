import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
   className?: string;
   ref?:any;
}

export default Props;
