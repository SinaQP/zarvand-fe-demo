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
import getSelectedChargeBillDetails from '../../../utilities/getSelectedChargeBillDetails';

const ButtonGroup: FC<{
   isPayed?: boolean;
   charge: TradeCharge | RenovationCharge;
}> = ({ isPayed, charge }) => {
   const [chargeType, setChargeType] = useState<'Trade' | 'Renovation' | null>(
      null,
   );
   const [isPrinting, setIsPrinting] = useState(false);
   const [printBill, setPrintBill] = useState<PrintBill | null>(null);

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
                 if (charge.is_paid) setShowPaymentHistory(true);
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
            printBill={printBill}
            printChargeBillDetails={
               charge.is_paid
                  ? charge.last_bill_details
                  : charge.last_bill_details
            }
            componentRef={componentRef}
         />
      </div>
   );
};

export default ButtonGroup;
