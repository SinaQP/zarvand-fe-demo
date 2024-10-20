import { FC, useEffect, useRef, useState } from 'react';
import detailIcon from '../../../assets/images/detail.svg';
import payIcon from '../../../assets/images/pay.svg';
import downloadIcon from '../../../assets/images/download.svg';
import styles from '../index.module.scss';
import { PrintBill } from '../../pdfs/trdChargePdf/index.interface';
import {
   BillDetail,
   BillInfo,
   RenovationCharge,
   TradeCharge,
} from '../../../interfaces/models.interface';
import { useChargesContext, useUserContext } from '../../../App.context';
import TradePrint from './tradePrint';
import ButtonList from './buttonList';
import { printChargeHandler } from './functions/printChargeHandler';
import TrdChargePdf from '../../pdfs/trdChargePdf';
import { useReactToPrint } from 'react-to-print';

const ButtonGroup: FC<{
   isPayed?: boolean;
   charge: TradeCharge | RenovationCharge;
}> = ({ isPayed, charge }) => {
   const [chargeType, setChargeType] = useState<'Trade' | 'Renovation' | null>(
      null,
   );
   const [isPrinting, setIsPrinting] = useState(false);
   const [printBill, setPrintBill] = useState<PrintBill | null>(null);
   const [printChargeBillDetails, setPrintChargeBillDetails] = useState<
      BillDetail[] | null
   >(null);
   const [printChargeBillInfo, setPrintChargeBillInfo] =
      useState<BillInfo | null>(null);

   useEffect(() => {
      setChargeType('certificate_number' in charge ? 'Renovation' : 'Trade');
   }, [charge]);

   const { token, setShowPaymentHistory } = useUserContext();
   const {
      selectedChargeBillInfo,
      setSelectedTradeCharge,
      setSelectedRenovationCharge,
   } = useChargesContext();

   useEffect(() => {
      const trdChargePdfButton = document.getElementById(
         `${charge.master_id}-charge-pdf-button`,
      )! as HTMLButtonElement;
      console.log('useEffect REF', componentRef);
      if (isPrinting && trdChargePdfButton) {
         trdChargePdfButton.click();
      }
   }, [isPrinting, printChargeBillDetails]);

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
            setPrintChargeBillDetails,
            setPrintChargeBillInfo,
            handlePrint,
            setIsPrinting,
            printChargeBillDetails,
         });
      },
      id: `${charge.master_id}-charge-pdf-button`,
   };

   const payButton = !isPayed && {
      label: 'پرداخت',
      icon: payIcon,
      alt: 'Pay',
   };

   const detailsButton = !selectedChargeBillInfo
      ? {
           label: 'جزئیات',
           icon: detailIcon,
           alt: 'Detail',
           onClick: () => {
              if (chargeType === 'Renovation') {
                 setSelectedRenovationCharge(charge as RenovationCharge);
              } else if (chargeType === 'Trade') {
                 setSelectedTradeCharge(charge as TradeCharge);
              }
              if (charge.is_paid) setShowPaymentHistory(true);
           },
        }
      : null;

   const paymentHistoryButton =
      selectedChargeBillInfo &&
      selectedChargeBillInfo.bills.length > 0 &&
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
   useEffect(() => {
      console.log(printChargeBillDetails, 'NIGA');
   }, [printChargeBillDetails]);
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
            printBill={printBill}
            printChargeBillDetails={printChargeBillDetails}
            componentRef={componentRef}
         />
      </div>
   );
};

export default ButtonGroup;
