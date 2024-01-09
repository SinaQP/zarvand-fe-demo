import { Dispatch, SetStateAction } from 'react';

interface Props {
   inp: string[];
   setInp: Dispatch<SetStateAction<string[]>>;
   className?: string;
}

export default Props;
