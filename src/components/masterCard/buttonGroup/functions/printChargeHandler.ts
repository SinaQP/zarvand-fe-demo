import { Dispatch, SetStateAction } from 'react';
import {
   BillDetail,
   BillInfo,
   RenovationCharge,
   TradeCharge,
} from '../../../../interfaces/models.interface';
import getSelectedChargeBillDetails from '../../../../utilities/getSelectedChargeBillDetails';
import { getRnvPrintData } from '../../../../apis/renovation/print';
import { PrintBill } from '../../../pdfs/trdChargePdf/index.interface';
import { getTradePrintData } from '../../../../apis/trade/print';

interface PrintChargeHandlerParams {
   charge: TradeCharge | RenovationCharge;
   printBill: PrintBill | null;
   setPrintBill: Dispatch<SetStateAction<PrintBill | null>>;
   chargeType: 'Trade' | 'Renovation' | null;
   token: string;
   handlePrint: () => void;
   setIsPrinting: (isPrinting: boolean) => void;
   setCharges:
      | Dispatch<SetStateAction<RenovationCharge[]>>
      | Dispatch<SetStateAction<TradeCharge[]>>;
}

export const printChargeHandler = async ({
   charge,
   printBill,
   setPrintBill,
   chargeType,
   token,
   handlePrint,
   setIsPrinting,
   setCharges,
}: PrintChargeHandlerParams) => {
   if (charge && !printBill) {
      if (chargeType === 'Trade') {
         if (!charge.last_bill_info) {
            await getSelectedChargeBillDetails(
               token,
               charge as TradeCharge,
               'Trade',
               setCharges,
            );
         }
         const { body, status } = await getTradePrintData(
            {
               last_paid_bill: charge.is_paid,
               master_id: charge.master_id,
            },
            token,
         );
         if (status === 200) {
            setPrintBill(body);
            setIsPrinting(true);
         }
      }
      if (chargeType === 'Renovation') {
         if (!charge.last_bill_info) {
            await getSelectedChargeBillDetails(
               token,
               charge as RenovationCharge,
               'Renovation',
               setCharges,
            );
         }
         const { body, status } = await getRnvPrintData(
            {
               last_paid_bill: charge.is_paid,
               master_id: charge.master_id,
            },
            token,
         );
         if (status === 200) {
            setPrintBill(body);
            setIsPrinting(true);
         }
      }
   }
   handlePrint();
};
