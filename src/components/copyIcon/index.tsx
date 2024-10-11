import { FC } from 'react';
import { CopyIconProps } from './interface';
import './CopyIcon.scss';

const CopyIcon: FC<CopyIconProps> = ({
   color = 'white',
   width = '2rem',
   height = '2rem',
   data,
}) => {
   const handleClick = () => {
      if (!data) return;

      navigator.clipboard.writeText(`${data}`);
   };

   return (
      <svg
         width={width}
         height={height}
         viewBox="0 0 40 40"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         id="copyStyleWrapper"
         onClick={handleClick}
      >
         <path
            d="M34.9972 16.6663C34.977 13.0413 34.8162 11.0781 33.5355 9.79747C32.071 8.33301 29.714 8.33301 25 8.33301H20C15.2859 8.33301 12.9289 8.33301 11.4645 9.79747C10 11.2619 10 13.619 10 18.333V26.6663C10 31.3803 10 33.7373 11.4645 35.2018C12.9289 36.6663 15.2859 36.6663 20 36.6663H25C29.714 36.6663 32.071 36.6663 33.5355 35.2018C35 33.7373 35 31.3803 35 26.6663V24.9997"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
         />
         <path
            d="M5 16.6663V26.6663C5 29.4278 7.23858 31.6663 10 31.6663M30 8.33301C30 5.57159 27.7615 3.33301 25 3.33301H18.3333C12.0479 3.33301 8.90525 3.33301 6.95262 5.28562C5.86398 6.37426 5.38228 7.83282 5.16915 9.99967"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
         />
      </svg>
   );
};

export default CopyIcon;
