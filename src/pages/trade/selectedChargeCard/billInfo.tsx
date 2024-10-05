import { FC, useContext } from 'react';
import InfoRow from '../../../components/infoRow';
import { AppContext } from '../../../App.context';
import toMoneyFormat from '../../../utilities/toMoneyFormat';

const BillInfo: FC = () => {
   const { selectedChargeBillInfo } = useContext(AppContext);
   return selectedChargeBillInfo && <div>
      <InfoRow title="مبلغ کل(ریال)" value={toMoneyFormat(selectedChargeBillInfo.value_to_pay.toString())} />
      <InfoRow title="شناسه قبض" value={selectedChargeBillInfo.bill_no} />
      <InfoRow title="شناسه پرداخت" value={selectedChargeBillInfo.payment_no} />
   </div>;
};

export default BillInfo;