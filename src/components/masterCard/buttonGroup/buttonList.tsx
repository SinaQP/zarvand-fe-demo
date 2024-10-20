import { FC } from 'react';
import Button from '../../button';
import styles from '../index.module.scss';

interface ButtonProps {
   label: string;
   icon: string;
   alt: string;
   onClick?: () => Promise<void> | void;
   id?: string;
}

interface ButtonListProps {
   buttons: (ButtonProps | false)[];
}

const ButtonList: FC<ButtonListProps> = ({ buttons }) => {
   return (
      <>
         {buttons.map(
            (button, index) =>
               button && (
                  <Button
                     key={index}
                     className={styles.button}
                     onClick={button.onClick}
                     id={button.id}
                  >
                     <span>{button.label}</span>
                     <img src={button.icon} alt={button.alt} />
                  </Button>
               ),
         )}
      </>
   );
};

export default ButtonList;
