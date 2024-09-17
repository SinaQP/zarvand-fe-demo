import { FC, useContext, useEffect, useRef, useState } from 'react';
import Header from '../../../../containers/mobile/payment/header';
import { AppContext } from '../../../../App.context';
import { useHistory } from 'react-router-dom';
import Button from '../../../../components/button';
import { getTradeBillDetailsInfo } from '../../../../apis/trade/guild-bill-details-info';
import { Bill } from '../../../desktop/trades/payment/index.interface';
import GuildCard from '../../../../components/guildCard';
import Charges from '../../../../containers/mobile/guildPhase/payment/charges';
import Amounts from '../../../../containers/mobile/guildPhase/payment/amounts';
import { useReactToPrint } from 'react-to-print';
import TrdChargePdf from '../../../../components/pdfs/trdChargePdf';
import { getTradePrintData } from '../../../../apis/trade/print';
import { PrintBill } from '../../../../components/pdfs/trdChargePdf/index.interface';

const PaymentGuild: FC = () => {
   const emptyGuild = {
      address: '',
      TradeType: '',
      is_paid: false,
      master_id: '',
   };
   const { token, selectedGuildCharge, selectedGuildBillDetail, user } =
      useContext(AppContext);
   const history = useHistory();
   const [bill, setBill] = useState<Bill | null>(null);
   const componentRef = useRef<HTMLDivElement>(null);
   const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      onAfterPrint: () => setIsPrinting(false),
   });
   const [isPrinting, setIsPrinting] = useState(false);
   const [printBill, setPrintBill] = useState<PrintBill | null>(null);
   const printChargeHandler = async () => {
      if (selectedGuildCharge) {
         const { body, status } = await getTradePrintData(
            {
               last_paid_bill: false,
               master_id: selectedGuildCharge.master_id,
            },
            token,
         );
         if (status === 200) setPrintBill(body);
      }
      setIsPrinting(true);
      handlePrint();
   };
   useEffect(() => {
      if (!token) history.push('');
      const fetch = async function () {
         if (selectedGuildCharge) {
            const bill = await getTradeBillDetailsInfo(
               { master_id: selectedGuildCharge.master_id },
               token,
            );
            setBill(bill.body);
         }
      };
      fetch();
   }, []);

   useEffect(() => {
      if (!token) history.push('/');
   }, [token]);
   useEffect(() => {
      const trdChargePdfButton = document.getElementById(
         'trd-charge-pdf-button',
      )! as HTMLButtonElement;
      if (isPrinting) trdChargePdfButton.click();
   }, [isPrinting]);
   return (
      <div className="mobile-payment">
         <Header />
         <GuildCard
            guild={selectedGuildCharge ? selectedGuildCharge : emptyGuild}
            lock
            viewOnly
            className="mobile-payment__card"
            isFromMobile
         />
         <Charges bill={bill} />
         <Amounts
            bill_no={bill?.bill_no ? bill.bill_no : ''}
            payment_no={bill?.payment_no ? bill.payment_no : ''}
            value_to_pay={bill?.value_to_pay ? bill.value_to_pay : 0}
         />
         {selectedGuildBillDetail?.bill_details?.length ? (
            <Button
               className="mobile-payment__button"
               onClick={() => history.push('/payed-detail/guild')}
            >
               مشاهده سابقه پرداخت
            </Button>
         ) : null}
         <Button className="mobile-payment__button">پرداخت</Button>
         <Button
            className="mobile-payment__button"
            id="trd-charge-pdf-button"
            onClick={printChargeHandler}
         >
            چاپ
         </Button>
         {isPrinting &&
            selectedGuildCharge &&
            selectedGuildBillDetail &&
            user && (
               <TrdChargePdf
                  componentRef={componentRef}
                  data={{
                     bill_details: selectedGuildBillDetail.last_bill_details,
                     person: {
                        name: user.name,
                        mobile_Number: user.mobile_number,
                        national_code: user.national_code,
                     },
                     place_address: selectedGuildCharge.address,
                  }}
                  printBill={printBill}
                  onlyShow={false}
               />
            )}
      </div>
   );
};

export default PaymentGuild;
