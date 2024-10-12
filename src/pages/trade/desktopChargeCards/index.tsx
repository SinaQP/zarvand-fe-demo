import { FC, useState } from 'react';
import StatusTab from '../../../components/statusTab';
import UnPayedCardIcon from '../../../assets/images/unpayed-card.svg';
import PayedCardIcon from '../../../assets/images/payed-card.svg';
import { Status } from '../../../components/statusTab/index.interface';
const DesktopChargeCards: FC = () => {
   const initialStatuses = [
      { label: 'پرداخت شده', isActive: false, icon: PayedCardIcon },
      { label: 'پرداخت نشده', isActive: true, icon: UnPayedCardIcon },
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
      </div>
   );
};

export default DesktopChargeCards;
