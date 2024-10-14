import { FC, useState } from 'react';
import StatusTab from '../../../components/statusTab';
import UnPayedCardIcon from '../../../assets/images/unpayed-card.svg';
import PayedCardIcon from '../../../assets/images/payed-card.svg';
import { Status } from '../../../components/statusTab/index.interface';
import PaidBillCard from '../../../components/paidBillsCard';
const DesktopChargeCards: FC = () => {
   const initialStatuses = [
      { label: 'پرداخت شده', isActive: true, icon: PayedCardIcon },
      { label: 'پرداخت نشده', isActive: false, icon: UnPayedCardIcon },
   ];
   const [statuses, setStatuses] = useState<Status[]>(initialStatuses);
   const statusOnClick = (clickedStatus: Status) => {
      const updatedStatuses = statuses.map((status) =>
         status.label === clickedStatus.label
            ? { ...status, isActive: true }
            : { ...status, isActive: false },
      );
      setStatuses(updatedStatuses);
   };
   const activeStatus = statuses.find((status) => status.isActive);

   return (
      <div>
         <StatusTab statuses={statuses} onClick={statusOnClick} />
         {activeStatus?.label === 'پرداخت شده' ? (
            <>
               <PaidBillCard Bill={undefined} />
            </>
         ) : (
            <>unpaid</>
         )}
      </div>
   );
};

export default DesktopChargeCards;
