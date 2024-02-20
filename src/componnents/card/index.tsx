import { FC, useContext, useState } from 'react';
import Button from '../../containers/desktop/button';
import Props from './props.interface';
import PropertyNumberInput from '../propertyNumberInput';
import { useHistory } from 'react-router-dom';
import handleChargeDetailButton from './handleChargeDetailButton';
import { AppContext } from '../../App.context';
import './index.scss';

const Card: FC<Props> = ({ className = '', renovation, lock, viewOnly=false }) => {
   const [propertyNumber, setPropertyNumber] = useState<string[]>([
      renovation.certificate_number.slice(0, 3),
      renovation.certificate_number.slice(3, 7),
      renovation.certificate_number.slice(7, 14),
      renovation.certificate_number.slice(14, 16),
      renovation.certificate_number.slice(16, 19),
   ]);   
   const history = useHistory();
   const { setSelectedCharge } = useContext(AppContext);

   return (
      <div
         className={`card ${renovation.is_paid && 'card--payed'} ${className}`}
      >
         <div className="card__header">
            <svg
               width="30"
               height="30"
               viewBox="0 0 30 30"
               fill="none"
               className="card__icon"
            >
               <path
                  d="M17.2451 5.17C16.9537 4.8691 16.6049 4.62984 16.2192 4.46644C15.8335 4.30305 15.4189 4.21885 15.0001 4.21885C14.5812 4.21885 14.1667 4.30305 13.781 4.46644C13.3953 4.62984 13.0465 4.8691 12.7551 5.17L6.75635 11.365C6.4126 11.72 6.18135 12.17 6.09135 12.6575C5.36295 16.6301 5.30928 20.6971 5.9326 24.6875L6.1526 26.1C6.2226 26.5462 6.6076 26.875 7.05885 26.875H11.2501C11.4159 26.875 11.5748 26.8092 11.692 26.6919C11.8092 26.5747 11.8751 26.4158 11.8751 26.25V17.5H18.1251V26.25C18.1251 26.4158 18.1909 26.5747 18.3082 26.6919C18.4254 26.8092 18.5843 26.875 18.7501 26.875H22.9413C23.1598 26.8749 23.3711 26.7968 23.537 26.6547C23.703 26.5126 23.8127 26.3159 23.8463 26.1L24.0676 24.6875C24.6908 20.6971 24.6372 16.6301 23.9088 12.6575C23.8192 12.1703 23.5874 11.7206 23.2426 11.365L17.2451 5.17Z"
                  fill="white"
               />
            </svg>

            <h3>{renovation.address}</h3>
         </div>
         <PropertyNumberInput
            inp={propertyNumber}
            setInp={lock ? () => {} : setPropertyNumber}
            className={`${
               renovation.is_paid && 'card__property-number--payed'
            }`}
            lock={lock}
         />
         {!viewOnly ? (
            renovation.is_paid ? (
               <span className="card__caption">پرداخت شده</span>
            ) : (
               <Button
                  className="card__button"
                  onClick={() =>
                     handleChargeDetailButton(
                        setSelectedCharge,
                        renovation,
                        history,
                     )
                  }
               >
                  مشاهده جزئیات قبض
               </Button>
            )
         ) : (
            ''
         )}
      </div>
   );
};

export default Card;
