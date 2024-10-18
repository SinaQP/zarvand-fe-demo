import { FC } from 'react';
import { FooterIconType } from '../index.interface';

const ExitIcon: FC<FooterIconType> = ({
   height,
   width,
   className,
   color = 'white',
}) => {
   return (
      <svg
         width={width}
         height={height}
         viewBox="0 0 60 60"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         className={`${className}`}
      >
         <path
            d="M56.249 35.001H32.8787"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
         />
         <path
            d="M48.1544 45.6058L58.333 34.9996L48.1544 24.3936"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
         />
         <path
            d="M39.2423 20.417V11.667H11.6666V58.3337H39.2423V49.5837"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
         />
      </svg>
   );
};

export default ExitIcon;
