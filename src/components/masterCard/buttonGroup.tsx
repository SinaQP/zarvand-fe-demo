import { FC, useContext, useEffect, useRef, useState } from 'react';
import detailIcon from '../../assets/images/detail.svg';
import payIcon from '../../assets/images/pay.svg';
import downloadIcon from '../../assets/images/download.svg';
import { NewButton as Button } from '../button';
import styles from './index.module.scss';
import { AppContext } from '../../App.context';
import { BillDetail, BillInfo, RenovationCharge, TradeCharge } from '../../App.interface';
import { useReactToPrint } from 'react-to-print';
import { getTradePrintData } from '../../apis/trade/print';
import { PrintBill } from '../pdfs/trdChargePdf/index.interface';
import TrdChargePdf from '../pdfs/trdChargePdf';
import getSelectedChargeBillDetails from '../../utilities/getSelectedChargeBillDetails';

const ButtonGroup: FC<{
   isPayed?: boolean,
   charge: TradeCharge | RenovationCharge,
}> = ({ isPayed, charge }) => {
   const [chargeType, setChargeType] = useState<'Trade' | 'Renovation' | null>(null);
   const [isPrinting, setIsPrinting] = useState(false);
   const [printBill, setPrintBill] = useState<PrintBill | null>(null);
   const componentRef = useRef<HTMLDivElement>(null);
   const [printChargeBillDetails, setPrintChargeBillDetails] = useState<BillDetail[] | null>(null);
   const [printChargeBillInfo, setPrintChargeBillInfo] = useState<BillInfo | null>(null);
   useEffect(() => {
      if ('certificate_number' in charge) {
         setChargeType('Renovation');
      } else if ('TradeType' in charge) {
         setChargeType('Trade');
      }
   }, []);

   const {
      setSelectedTradeCharge,
      selectedTradeCharge,
      setSelectedRenovationCharge,
      token,
      selectedChargeBillInfo,
      selectedChargeBillDetails,
      user,
   } = useContext(AppContext);

   const handlePrint = useReactToPrint({
      content: () => componentRef.current,
   });
   const printChargeHandler = async () => {

      if (charge && !printBill) {
         if (chargeType === 'Trade' && !printChargeBillDetails)
            getSelectedChargeBillDetails(token, charge as TradeCharge, setPrintChargeBillDetails, setPrintChargeBillInfo);
         const { body, status } = await getTradePrintData(
            {
               last_paid_bill: !charge.is_paid,
               master_id: charge.master_id,
            },
            token,
         );
         if (status === 200) setPrintBill(body);
      }
      setIsPrinting(true);
      handlePrint();

   };
   useEffect(() => {
      const trdChargePdfButton = document.getElementById(`${charge.master_id}-charge-pdf-button`)! as HTMLButtonElement;
      if (isPrinting && trdChargePdfButton) {
         trdChargePdfButton.click();
      }
   }, [isPrinting, printChargeBillDetails]);

   const buttons = [
      {
         label: 'دانلود',
         icon: downloadIcon,
         alt: 'Download',
         onClick: async () => {
            await printChargeHandler();
         },
         id: `${charge.master_id}-charge-pdf-button`,
      },
      !isPayed && {
         label: 'پرداخت',
         icon: payIcon,
         alt: 'Pay',
      },
      !selectedChargeBillInfo ? {
         label: 'جزئیات',
         icon: detailIcon,
         alt: 'Detail',
         onClick: () => {
            if (chargeType === 'Renovation') {
               setSelectedRenovationCharge(charge as RenovationCharge);
            } else if (chargeType === 'Trade') {
               setSelectedTradeCharge(charge as TradeCharge);
            }
         },
      } : null,
   ];

   const visibleButtons = buttons.filter(button => button !== null);

   return (
      <div className={`${styles.buttons} ${visibleButtons.length === 1 ? styles.center : styles.spaceBetween}`}>
         {buttons.map((button, index) => button && (
            <Button key={index} className={styles.button} onClick={button.onClick} id={button.id}>
               <span>{button.label}</span>
               <img src={button.icon} alt={button.alt} />
            </Button>
         ))}
         {isPrinting &&
            printChargeBillDetails &&
            user && (
               <TrdChargePdf
                  componentRef={componentRef}
                  data={{
                     bill_details:
                     printChargeBillDetails,
                     person: {
                        name: user.name,
                        mobile_Number: user.mobile_number,
                        national_code: user.national_code,
                     },
                     place_address: charge.address,
                  }}
                  printBill={printBill}
                  onlyShow={false}
               />
            )}
      </div>
   );
};

export default ButtonGroup;