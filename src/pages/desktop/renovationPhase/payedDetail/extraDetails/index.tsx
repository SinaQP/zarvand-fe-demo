import { FC, useContext } from 'react';
import { separateByThree } from '../../../../../utilities/separatetByThree';
import { AppContext } from '../../../../../App.context';

const ExtraDetails: FC = () => {
   const { selectedRenovationBillDetail } = useContext(AppContext);
   return (
      <>
         <div className="payment__charges-row">
            <span>{'----'}</span>
            <span>
               {separateByThree(
                  selectedRenovationBillDetail
                     ? selectedRenovationBillDetail.city_service_charges
                     : 0,
               )}
            </span>
            <span>خدمات شهری</span>
         </div>
         <div className="payment__charges-row">
            <span>{'----'}</span>
            <span>
               {separateByThree(
                  selectedRenovationBillDetail
                     ? selectedRenovationBillDetail.safety_service_charges
                     : 0,
               )}
            </span>
            <span>خدمات ایمنی</span>
         </div>
         <div className="payment__charges-row">
            <span>{'----'}</span>
            <span>
               {separateByThree(
                  selectedRenovationBillDetail
                     ? selectedRenovationBillDetail.garbage_collection_charges
                     : 0,
               )}
            </span>
            <span>خدمات پسماند</span>
         </div>
      </>
   );
};

export default ExtraDetails;
