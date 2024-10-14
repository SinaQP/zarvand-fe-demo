import { FC, MouseEvent, useState } from 'react';
import { Props } from './index.interface';
import './index.scss';
import styles from './index.module.scss';
import Loading from '../loading/loading';

const Button: FC<Props> = (props) => {
   const [loading, setLoading] = useState(false);
   const handleOnClick = async (event: MouseEvent<HTMLButtonElement>) => {
      setLoading(true);
      if (props.onClick) {
         await props.onClick(event);
      }
      setLoading(false);
   };
   if (loading) {
      return <Loading />;
   }
   return (
      <button
         {...props}
         className={`${props.className} ${styles.button}`}
         onClick={props.haveLoading ? handleOnClick : props.onClick}
      >
         {props.children}
      </button>
   );
};

export default Button;
