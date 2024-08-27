import { FC, useContext, useEffect, useRef, useState } from 'react';
import Header from '../../../../containers/mobile/payment/header';
import { AppContext } from '../../../../App.context';
import { useHistory } from 'react-router-dom';
import Button from '../../../../componnents/button';
import toMoneyFormat from '../../../../utilities/toMoneyFormat';
import { getTradeBillDetailsInfo } from '../../../../apis/trade/guild-bill-details-info';
import { Bill } from '../../../desktop/trades/payment/index.interface';
import GuildCard from '../../../../componnents/guildCard';
import Charges from '../../../../containers/mobile/guildPhase/payment/charges';
import Amounts from '../../../../containers/mobile/guildPhase/payment/amounts';
import { useReactToPrint } from 'react-to-print';
import TrdChargePdf from '../../../../componnents/pdfs/trdChargePdf';

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
   });
   const [printCharge, setPrintCharge] = useState<boolean>(false);
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
      if (printCharge) trdChargePdfButton.click();
   }, [printCharge]);
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
            onClick={() => {
               console.log('selectedGuildBillDetail', selectedGuildBillDetail);
               console.log('selectedGuildCharge', selectedGuildCharge);
               setPrintCharge(true);
               handlePrint();
            }}
         >
            چاپ
         </Button>
         {printCharge &&
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
                  printBill={{
                     penalty: 0,
                     city: 'تست',
                     bill_code: selectedGuildBillDetail.bill_details
                        ? selectedGuildBillDetail.bill_details[0].bill_code
                        : '',
                     income_unit_bill_subtitle: '',
                     bill_no: selectedGuildBillDetail.bill_no,
                     payment_no: selectedGuildBillDetail.payment_no,
                     total_amount: selectedGuildBillDetail.value_to_pay,
                     total_amount_in_words: '',
                     annual_charges: [
                        { amount: 99, type_desc: 'TEST', type_id: 1 },
                        { amount: 99, type_desc: 'TEST', type_id: 1 },
                        { amount: 99, type_desc: 'TEST', type_id: 1 },
                     ],
                     trade_type_name: selectedGuildCharge.TradeType,
                  }}
                  onlyShow={false}
               />
            )}
      </div>
   );
};

export default PaymentGuild;
