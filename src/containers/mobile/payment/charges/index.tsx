import { FC } from 'react';
import { Bill } from '../../../../pages/desktop/payment/index.interface';
import toMoneyFormat from '../../../../utilities/toMoneyFormat';
import { separateByThree } from '../../../../utilities/separatetByThree';

const Charges: FC<{ bill: Bill | null }> = ({ bill }) => {
   return (
      <div className="mobile-payment__charges">
         <div className="mobile-payment__charges-header">
            <span>سال</span>
            <span>مبلغ(ريال)</span>
            <span>توضیحات</span>
         </div>
         <div className="mobile-payment__charges-rows-container">
            {bill
               ? bill.charges_by_year.map((charge) => (
                    <div className="mobile-payment__charges-row">
                       <span>{charge[0]}</span>
                       <span>{separateByThree(charge[1])}</span>
                       <span>عوارض سالیانه</span>
                    </div>
                 ))
               : ''}
            <div className="mobile-payment__charges-row">
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
            </div>
         </div>
      </div>
   );
};

export default Charges;
