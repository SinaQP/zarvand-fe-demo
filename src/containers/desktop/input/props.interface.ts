import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
   className?: string;
   label?: string;
}

export default Props;
