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
   printChargeBillDetails: BillDetail[] | null;
   setPrintBill: Dispatch<SetStateAction<PrintBill | null>>;
   chargeType: 'Trade' | 'Renovation' | null;
   token: string;
   setPrintChargeBillDetails: Dispatch<SetStateAction<BillDetail[] | null>>;
   setPrintChargeBillInfo: Dispatch<SetStateAction<BillInfo | null>>;
   handlePrint: () => void;
   setIsPrinting: (isPrinting: boolean) => void;
}

export const printChargeHandler = async ({
   charge,
   printBill,
   setPrintBill,
   chargeType,
   token,
   printChargeBillDetails,
   setPrintChargeBillDetails,
   setPrintChargeBillInfo,
   handlePrint,
   setIsPrinting,
}: PrintChargeHandlerParams) => {
   if (charge && !printBill) {
      if (chargeType === 'Trade') {
         if (!printChargeBillDetails && setPrintChargeBillDetails) {
            await getSelectedChargeBillDetails(
               token,
               charge as TradeCharge,
               'Trade',
               setPrintChargeBillDetails,
               setPrintChargeBillInfo,
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
         if (!printChargeBillDetails && setPrintChargeBillDetails) {
            await getSelectedChargeBillDetails(
               token,
               charge as RenovationCharge,
               'Renovation',
               setPrintChargeBillDetails,
               setPrintChargeBillInfo,
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
