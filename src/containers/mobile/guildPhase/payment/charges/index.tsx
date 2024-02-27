import { FC } from 'react';
import toMoneyFormat from '../../../../../utilities/toMoneyFormat';
import { separateByThree } from '../../../../../utilities/separatetByThree';
import { Bill } from '../../../../../pages/desktop/guildPhase/payment/index.interface';

const Charges: FC<{ bill: Bill | null }> = ({ bill }) => {
   return (
      <div className="mobile-payment__charges">
         <div className="mobile-payment__charges-header">
            <span>سال</span>
            <span>مبلغ(ريال)</span>
            <span>توضیحات</span>
         </div>
         <div className="mobile-payment__charges-rows-container">
            {bill?.bill_details
               ? bill.bill_details.map((charge) => (
                    <div className="mobile-payment__charges-row">
                       <span>{charge.to_year}</span>
                       <span>{separateByThree(charge.creditor)}</span>
                       <span>{charge.desc}</span>
                    </div>
                 ))
               : ''}
            {/* <div className="mobile-payment__charges-row">
               <span>{'----'}</span>
               <span>
                  {separateByThree(bill ? bill.city_service_charges : 0)}
               </span>
               <span>خدمات شهری</span>
            </div>
            <div className="mobile-payment__charges-row">
               <span>{'----'}</span>
               <span>
                  {separateByThree(bill ? bill.safety_service_charges : 0)}
               </span>
               <span>خدمات ایمنی</span>
            </div>
            <div className="mobile-payment__charges-row">
               <span>{'----'}</span>
               <span>
                  {separateByThree(bill ? bill.garbage_collection_charges : 0)}
               </span>
               <span>خدمات زباله شهری</span>
            </div> */}
         </div>
      </div>
   );
};

export default Charges;
