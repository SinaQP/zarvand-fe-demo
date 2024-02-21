import { subsystemDetailsProps } from './index.interface';
import './style/index.scss';
import { useHistory } from 'react-router-dom';
import Card from '../../../componnents/card';
import { FC, useContext, useEffect, useState } from 'react';
import { getRenovationMasters } from './getPersonRenovationMasters';
import { AppContext, Renovation } from '../../../App.context';
import Button from '../../../containers/desktop/button';
import handleChargeDetailButton from './handleChargeDetailButton';

const SubsystemDetais: FC<subsystemDetailsProps> = () => {
   const history = useHistory();
   const { token, setSelectedCharge } = useContext(AppContext);
   const [renovations, setRenovations] = useState<Renovation[]>([]);

   useEffect(() => {
      if (!token) history.push('');
      async function loadRenovations() {
         const renovations: Renovation[] = await getRenovationMasters(token);
         setRenovations(renovations);
      }
      loadRenovations();
   }, []);

   return (
      <div className="subsystemDetailsPage">
         <div className="headerSection">
            <div className="mainDiv">
               <button
                  className="back"
                  onClick={() => {
                     history.push('/subsystem');
                  }}
               >
                  &gt;
               </button>
               <div className="innerSection1">
                  <img src={require(`${'./LOGO 4.png'}`)} alt="" />
               </div>
               <div className="innerSection2">
                  <div className="infoSection">
                     <p className="infoText">
                        ملک های زیر در سیستم به نام شما ثبت شده‌اند. شما با
                        انتخاب هر یک از آن‌ها،می‌توانید صورتحساب مربوط به آن را
                        مشاهده و اقدام به پرداخت نمایید.
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="mainBillSection">
            {renovations.map((renovation) => (
               <>
                  <Card
                     className={
                        renovation.is_paid
                           ? 'subsystemDetailsPage__paied_card'
                           : 'subsystemDetailsPage__card'
                     }
                     renovation={renovation}
                     lock
                     viewOnly
                  />
                  {renovation.is_paid ? (
                     <span className="card__caption">پرداخت شده</span>
                  ) : (
                     <Button
                        className="card__button"
                        onClick={() => {
                           handleChargeDetailButton(
                              setSelectedCharge,
                              renovation,
                              history,
                           );
                        }}
                     >
                        مشاهده جزئیات قبض
                     </Button>
                  )}
               </>
            ))}
         </div>
         <div className="footerSection">
            <p className="footerDetails">Zaravand Co.</p>
         </div>
      </div>
   );
};
export default SubsystemDetais;
