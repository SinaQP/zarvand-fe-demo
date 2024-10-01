import { FC } from 'react';
import InfoRow from '../../../components/infoRow';

const BillInfo: FC = () => {
   return <div>
      <InfoRow title="مبلغ کل(ریال)" value={'1000000'} />
      <InfoRow title="شناسه قبض" value={'5800453503377'} />
      <InfoRow title="شناسه پرداخت" value={'2620503195'} />
   </div>;
};

export default BillInfo;