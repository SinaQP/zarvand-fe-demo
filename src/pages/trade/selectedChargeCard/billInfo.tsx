import { FC, useContext } from 'react';
import InfoRow from '../../../components/infoRow';
import toMoneyFormat from '../../../utilities/toMoneyFormat';
import { useChargesContext } from '../../../App.context';

const BillInfo: FC = () => {
   const { selectedChargeBillInfo } = useChargesContext();
   return (
      selectedChargeBillInfo && (
         <div>
            <InfoRow

               title="مبلغ کل(ریال)"
               value={toMoneyFormat(
                  selectedChargeBillInfo.last_bill_info.value_to_pay.toString(),
               )}
            />
            <InfoRow title="شناسه قبض" value={selectedChargeBillInfo.last_bill_info.bill_no} />
            <InfoRow
               title="شناسه پرداخت"
               value={selectedChargeBillInfo.last_bill_info.payment_no}
            />
         </div>
      )
   );
};

export default BillInfo;
