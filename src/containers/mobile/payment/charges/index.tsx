import { FC } from 'react';
import { Bill } from '../../../../pages/desktop/renovationPhase/payment/index.interface';
import { separateByThree } from '../../../../utilities/separatetByThree';

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
            {bill
               ? bill.charges_by_year.map((charge) => (
                    <div className="mobile-payment__charges-row">
                       <span>{charge[0]}</span>
                       <span>{charge[0]}</span>
                       <span>{separateByThree(charge[1])}</span>
                       <span>عوارض سالیانه</span>
                    </div>
                 ))
               : ''}
            <div className="mobile-payment__charges-row">
               <span>{bill?.first_year}</span>
               <span>{bill?.last_year}</span>
               <span>
                  {separateByThree(bill ? bill.city_service_charges : 0)}
               </span>
               <span>خدمات شهری</span>
            </div>
            <div className="mobile-payment__charges-row">
               <span>{bill?.first_year}</span>
               <span>{bill?.last_year}</span>
               <span>
                  {separateByThree(bill ? bill.safety_service_charges : 0)}
               </span>
               <span>خدمات ایمنی</span>
            </div>
            <div className="mobile-payment__charges-row">
               <span>{bill?.first_year}</span>
               <span>{bill?.last_year}</span>
               <span>
                  {separateByThree(bill ? bill.garbage_collection_charges : 0)}
               </span>
               <span>خدمات زباله شهری</span>
            </div>
            <div className="mobile-payment__charges-row">
               <span>{bill?.first_year}</span>
               <span>{bill?.last_year}</span>
               <span>{separateByThree(bill ? bill.total_penalty : 0)}</span>
               <span>جریمه دیرکرد</span>
            </div>
         </div>
      </div>
   );
};

export default Charges;
