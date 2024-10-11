import { FC, useContext } from 'react';
import InfoRow from '../../../components/infoRow';
import toMoneyFormat from '../../../utilities/toMoneyFormat';
import { useChargesContext } from '../../../app.context';

const BillInfo: FC = () => {
   const { selectedChargeBillInfo } = useChargesContext();
   return (
      selectedChargeBillInfo && (
         <div>
            <InfoRow
               title="مبلغ کل(ریال)"
               value={toMoneyFormat(
                  selectedChargeBillInfo.value_to_pay.toString(),
               )}
            />
            <InfoRow title="شناسه قبض" value={selectedChargeBillInfo.bill_no} />
            <InfoRow
               title="شناسه پرداخت"
               value={selectedChargeBillInfo.payment_no}
            />
         </div>
      )
   );
};

export default BillInfo;
