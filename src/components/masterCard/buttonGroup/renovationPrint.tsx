import { FC } from 'react';
import TrdChargePdf from '../../pdfs/trdChargePdf';
import { useUserContext } from '../../../App.context';
import { RenovationPrintProps, TradePrintProps } from './index.interface';
import RnvChargePdf from '../../pdfs/rnvChargePdf';
import {
   RenovationCharge,
   TradeCharge,
} from '../../../interfaces/models.interface';
const isRenovationCharge = (
   charge: TradeCharge | RenovationCharge,
): charge is RenovationCharge => {
   return 'certificate_number' in charge;
};

const RenovationPrint: FC<RenovationPrintProps> = ({
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
      !printBill ||
      !printChargeBillDetails ||
      chargeType !== 'Renovation' ||
      !user ||
      !isRenovationCharge(charge)
   )
      return null;
   return (
      <RnvChargePdf
         componentRef={componentRef}
         data={{
            bill_details: printChargeBillDetails,
            person: {
               name: user ? user.name : '',
               mobile_Number: user ? user.mobile_number : '',
               national_code: user ? user.national_code : '',
            },
            address: charge.address,
            certificate_number: charge.certificate_number,
            id: charge.master_id,
         }}
         printBill={printBill}
         onlyShow={false}
      />
   );
};

export default RenovationPrint;
