import { Dispatch, SetStateAction } from 'react';

export interface Props {
   inputsClassName?: string;
   numberOfInputs: number;
   value: any[];
   setValue: Dispatch<SetStateAction<any[]>>;
}
