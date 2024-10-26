import { FC, useState } from 'react';
import { CopyIconProps } from './interface';
import './CopyIcon.scss';
import Copy from './components/copy';
import Check from './components/check';

const CopyIcon: FC<CopyIconProps> = ({
   color = 'white',
   width = '2rem',
   height = '2rem',
   data,
}) => {
   const [clickCopy, setClickCopy] = useState(false);

   const handleClick = () => {
      if (!data) return;
      navigator.clipboard.writeText(`${data}`);
      setClickCopy(true);
      setTimeout(() => {
         setClickCopy(false);
      }, 2000);
   };

   return (
      <>
         {!clickCopy ? (
            <Copy
               width={width}
               height={height}
               color={color}
               handleClick={handleClick}
            />
         ) : (
            <Check width={width} height={height} color={color} />
         )}
      </>
   );
};

export default CopyIcon;
