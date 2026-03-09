import { FC, useEffect, useRef, useState } from 'react';
import detailIcon from '../../../assets/images/detail.svg';
import payIcon from '../../../assets/images/pay.svg';
import downloadIcon from '../../../assets/images/download.svg';
import styles from '../index.module.scss';
import { PrintBill as TradePrintBill } from '../../pdfs/trdChargePdf/index.interface';
import { PrintBill as RnvPrintBill } from '../../pdfs/rnvChargePdf/index.interface';
import {
   RenovationCharge,
   TradeCharge,
} from '../../../interfaces/models.interface';
import { useChargesContext, useUserContext } from '../../../App.context';
import TradePrint from './tradePrint';
import ButtonList from './buttonList';
import { printChargeHandler } from './functions/printChargeHandler';
import { useReactToPrint } from 'react-to-print';
import RenovationPrint from './renovationPrint';
import payCharges from './functions/payChargeHandler';
import { useNavigate } from 'react-router-dom';
import getSelectedChargeBillDetails from '../../../utilities/getSelectedChargeBillDetails';
import { toast } from 'react-toastify';

const ButtonGroup: FC<{
   isPayed?: boolean;
   charge: TradeCharge | RenovationCharge;
}> = ({ isPayed, charge }) => {
   const [chargeType, setChargeType] = useState<'Trade' | 'Renovation' | null>(
      null,
   );
   const [isPrinting, setIsPrinting] = useState(false);
   const [printBill, setPrintBill] = useState<
      TradePrintBill | RnvPrintBill | null
   >(null);
   const navigate = useNavigate();

   useEffect(() => {
      setChargeType('certificate_number' in charge ? 'Renovation' : 'Trade');
   }, [charge]);

   const { token, setShowPaymentHistory, showPaymentHistory } =
      useUserContext();
   const {
      setSelectedTradeCharge,
      setSelectedRenovationCharge,
      setTradeCharges,
      setRenovationCharges,
      selectedRenovationCharge,
      selectedTradeCharge,
   } = useChargesContext();

   useEffect(() => {
      const chargePdfButton = document.getElementById(
         `${charge.master_id}-charge-pdf-button`,
      ) as HTMLButtonElement | null;

      if (isPrinting && chargePdfButton) {
         chargePdfButton.click();
      }
   }, [charge.master_id, isPrinting]);

   const componentRef = useRef<HTMLDivElement>(null);
   const handlePrint = useReactToPrint({ content: () => componentRef.current });

   const downloadButton = {
      label: 'دانلود',
      icon: downloadIcon,
      alt: 'Download',
      onClick: async () => {
         await printChargeHandler({
            charge,
            printBill,
            setPrintBill,
            chargeType,
            token,
            handlePrint,
            setIsPrinting,
            setCharges:
               chargeType === 'Trade' ? setTradeCharges : setRenovationCharges,
         });
      },
      id: `${charge.master_id}-charge-pdf-button`,
   };

   const getLastBillInfo = async () => {
      if (chargeType === 'Renovation') {
         setSelectedRenovationCharge(charge as RenovationCharge);
      } else if (chargeType === 'Trade') {
         setSelectedTradeCharge(charge as TradeCharge);
      }
      setShowPaymentHistory(false);
   };

   const payButton = !isPayed && {
      label: 'پرداخت',
      icon: payIcon,
      alt: 'Pay',
      onClick: async () => {
         const startBankProccess = async (
            selectedCharge: TradeCharge | RenovationCharge | null,
         ) => {
            if (!selectedCharge) return;

            const result = await payCharges(selectedCharge, token, navigate);

            if (result && typeof result === 'object' && 'status' in result) {
               const demoResult = result as {
                  status: number;
                  body: {
                     message?: string;
                     trade_charges?: TradeCharge[];
                     renovation_charges?: RenovationCharge[];
                  };
               };

               if (demoResult.status !== 200) {
                  toast.error(
                     demoResult.body?.message || 'پرداخت با خطا مواجه شد.',
                  );
                  return;
               }

               if (demoResult.body.trade_charges) {
                  setTradeCharges(demoResult.body.trade_charges);
                  const updatedTradeCharge = demoResult.body.trade_charges.find(
                     (item) => item.master_id === selectedCharge.master_id,
                  );
                  if (updatedTradeCharge) {
                     setSelectedTradeCharge(updatedTradeCharge);
                  }
               }

               if (demoResult.body.renovation_charges) {
                  setRenovationCharges(demoResult.body.renovation_charges);
                  const updatedRenovationCharge =
                     demoResult.body.renovation_charges.find(
                        (item) => item.master_id === selectedCharge.master_id,
                     );
                  if (updatedRenovationCharge) {
                     setSelectedRenovationCharge(updatedRenovationCharge);
                  }
               }

               setShowPaymentHistory(false);
            }
         };

         if (charge.last_bill_info) {
            return await startBankProccess(charge);
         }

         if (chargeType === 'Trade') {
            const result = await getSelectedChargeBillDetails(
               token,
               charge,
               chargeType,
               setTradeCharges,
            );
            await startBankProccess(result as TradeCharge | null);
         } else if (chargeType === 'Renovation') {
            const result = await getSelectedChargeBillDetails(
               token,
               charge,
               chargeType,
               setRenovationCharges,
            );
            await startBankProccess(result as RenovationCharge | null);
         }
      },
   };

   const detailsButton =
      !selectedRenovationCharge && !selectedTradeCharge
         ? {
              label: 'جزئیات',
              icon: detailIcon,
              alt: 'Detail',
              onClick: getLastBillInfo,
           }
         : null;

   const paymentHistoryButton =
      (selectedRenovationCharge || selectedTradeCharge) &&
      charge.last_bill_info &&
      charge.bills.length > 0 &&
      !showPaymentHistory &&
      !charge.is_paid
         ? {
              label: 'سابقه پرداخت',
              icon: payIcon,
              alt: 'Payment History',
              onClick: () => {
                 setShowPaymentHistory(true);
                 if (chargeType === 'Renovation') {
                    setSelectedRenovationCharge(charge as RenovationCharge);
                 } else if (chargeType === 'Trade') {
                    setSelectedTradeCharge(charge as TradeCharge);
                 }
              },
           }
         : null;

   const buttons = [
      downloadButton,
      payButton,
      detailsButton,
      paymentHistoryButton,
   ];
   const visibleButtons = buttons.filter((button) => button !== null);

   return (
      <div
         className={`${styles.buttons} ${
            visibleButtons.length === 1 ? styles.center : styles.spaceBetween
         }`}
      >
         <ButtonList buttons={visibleButtons} isPayed={isPayed} />

         <TradePrint
            charge={charge}
            chargeType={chargeType}
            isPrinting={isPrinting}
            printBill={printBill as TradePrintBill}
            printChargeBillDetails={
               charge.is_paid
                  ? printBill?.bill_details
                     ? printBill.bill_details
                     : []
                  : charge.last_bill_details
            }
            componentRef={componentRef}
         />
         <RenovationPrint
            charge={charge}
            chargeType={chargeType}
            componentRef={componentRef}
            isPrinting={isPrinting}
            printBill={printBill as RnvPrintBill}
            printChargeBillDetails={
               charge.is_paid
                  ? printBill?.bill_details
                     ? printBill.bill_details.filter((bd) => bd.type_id === 81)
                     : []
                  : charge.last_bill_details && charge.last_bill_details.length
                  ? charge.last_bill_details.filter((bd) => bd.type_id === 81)
                  : []
            }
         />
      </div>
   );
};

export default ButtonGroup;
