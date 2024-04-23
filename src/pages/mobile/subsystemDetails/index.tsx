import { subsystemDetailsProps } from './index.interface';
import './style/index.scss';
import { useHistory } from 'react-router-dom';
import { FC, useContext, useEffect, useState } from 'react';
import { getRenovationMasters } from './getPersonRenovationMasters';
import { AppContext, RenovationMaster } from '../../../App.context';
import handleChargeDetailButton from './handleChargeDetailButton';
import RenovationCard from '../../../componnents/renovationCard';
import Button from '../../../componnents/button';

const SubsystemDetais: FC<subsystemDetailsProps> = () => {
   const history = useHistory();
   const { token, setSelectedCharge, setSelectedRenovationBillDetail } =
      useContext(AppContext);
   const [renovations, setRenovations] = useState<RenovationMaster[]>([]);

   useEffect(() => {
      if (!token) history.push('');
      async function loadRenovations() {
         const renovations: RenovationMaster[] = await getRenovationMasters(
            token,
         );
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
                  <RenovationCard
                     className={
                        renovation.is_paid
                           ? 'subsystemDetailsPage__paied_card mobileGuild'
                           : 'subsystemDetailsPage__card mobileGuild'
                     }
                     renovation={renovation}
                     lock
                     viewOnly
                  />
                  {renovation.is_paid ? (
                     <Button
                        className="card__caption"
                        onClick={() => {
                           handleChargeDetailButton(
                              setSelectedCharge,
                              renovation,
                              history,
                              token,
                              setSelectedRenovationBillDetail,
                              true
                           );
                        }}
                     >
                        پرداخت شده
                     </Button>
                  ) : (
                     <Button
                        className="card__button"
                        onClick={() => {
                           handleChargeDetailButton(
                              setSelectedCharge,
                              renovation,
                              history,
                              token,
                              setSelectedRenovationBillDetail,
                              false
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
