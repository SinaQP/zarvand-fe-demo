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

   useEffect(() => {
      setChargeType('certificate_number' in charge ? 'Renovation' : 'Trade');
   }, [charge]);

   const { token, setShowPaymentHistory } = useUserContext();
   const {
      setSelectedTradeCharge,
      setSelectedRenovationCharge,
      setTradeCharges,
      setRenovationCharges,
      selectedRenovationCharge,
      selectedTradeCharge,
   } = useChargesContext();

   useEffect(() => {
      const trdChargePdfButton = document.getElementById(
         `${charge.master_id}-charge-pdf-button`,
      )! as HTMLButtonElement;
      if (isPrinting && trdChargePdfButton) {
         trdChargePdfButton.click();
      }
   }, [isPrinting]);

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
               chargeType == 'Trade' ? setTradeCharges : setRenovationCharges,
         });
      },
      id: `${charge.master_id}-charge-pdf-button`,
   };

   const payButton = !isPayed && {
      label: 'پرداخت',
      icon: payIcon,
      alt: 'Pay',
      onclick: async () => {
         console.log('test');
      },
   };

   const detailsButton =
      !selectedRenovationCharge && !selectedTradeCharge
         ? {
              label: 'جزئیات',
              icon: detailIcon,
              alt: 'Detail',
              onClick: async () => {
                 if (chargeType === 'Renovation') {
                    setSelectedRenovationCharge(charge as RenovationCharge);
                 } else if (chargeType === 'Trade') {
                    setSelectedTradeCharge(charge as TradeCharge);
                 }
                 setShowPaymentHistory(charge.is_paid);
              },
           }
         : null;

   const paymentHistoryButton =
      (selectedRenovationCharge || selectedTradeCharge) &&
      charge.last_bill_info &&
      charge.bills.length > 0 &&
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
   const { user } = useUserContext();

   const buttons = [
      downloadButton,
      payButton,
      detailsButton,
      paymentHistoryButton,
   ];
   const visibleButtons = buttons.filter((button) => button !== null);
   const componentRef = useRef<HTMLDivElement>(null);
   const handlePrint = useReactToPrint({ content: () => componentRef.current });
   return (
      <div
         className={`${styles.buttons} ${
            visibleButtons.length === 1 ? styles.center : styles.spaceBetween
         }`}
      >
         <ButtonList buttons={visibleButtons} />

         <TradePrint
            charge={charge}
            chargeType={chargeType}
            isPrinting={isPrinting}
            printBill={printBill as TradePrintBill}
            printChargeBillDetails={
               charge.is_paid ? charge.bills : charge.last_bill_details
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
               charge.is_paid ? charge.bills : charge.last_bill_details
            }
         />
      </div>
   );
};

export default ButtonGroup;
