import { Dispatch, SetStateAction } from 'react';

export interface Props {
   initialCount: number;
   setShowConfirmationForm: Dispatch<SetStateAction<boolean>>;
}