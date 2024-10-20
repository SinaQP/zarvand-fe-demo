import { FC } from 'react';
import TrdChargePdf from '../../pdfs/trdChargePdf';
import { useUserContext } from '../../../App.context';
import { TradePrintProps } from './index.interface';

const TradePrint: FC<TradePrintProps> = ({
   isPrinting,
   printChargeBillDetails,
   printBill,
   charge,
   chargeType,
   componentRef,
}) => {
   const { user } = useUserContext();
   if (
      !isPrinting ||
      !printChargeBillDetails ||
      chargeType !== 'Trade' ||
      !user
   )
      return null;
   return (
      <TrdChargePdf
         componentRef={componentRef}
         data={{
            bill_details: printChargeBillDetails,
            person: {
               name: user ? user.name : '',
               mobile_Number: user ? user.mobile_number : '',
               national_code: user ? user.national_code : '',
            },
            place_address: charge.address,
         }}
         printBill={printBill}
         onlyShow={false}
      />
   );
};

export default TradePrint;
