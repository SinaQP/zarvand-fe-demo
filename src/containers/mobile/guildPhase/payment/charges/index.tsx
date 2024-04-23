import { FC } from 'react';
import { separateByThree } from '../../../../../utilities/separatetByThree';
import { Bill } from '../../../../../pages/desktop/trades/payment/index.interface';

const Charges: FC<{ bill: Bill | null }> = ({ bill }) => {
   return (
      <div className="mobile-payment__charges">
         <div className="mobile-payment__charges-header">
            <span>از سال</span>
            <span>تا سال</span>
            <span>مبلغ(ريال)</span>
            <span>توضیحات</span>
         </div>
         <div className="mobile-payment__charges-rows-container">
            {bill?.last_bill_details
               ? bill.last_bill_details.map((charge) => (
                    <div className="mobile-payment__charges-row">
                       <span>{charge.from_year}</span>
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
