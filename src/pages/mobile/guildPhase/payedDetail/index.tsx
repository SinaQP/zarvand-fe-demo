import { FC, useContext, useEffect, useRef, useState } from 'react';
import Header from '../../../../containers/mobile/payment/header';
import { AppContext } from '../../../../App.context';
import { useHistory } from 'react-router-dom';
import Button from '../../../../components/button';
import { separateByThree } from '../../../../utilities/separatetByThree';
import GuildCard from '../../../../components/guildCard';
import { useReactToPrint } from 'react-to-print';
import TrdChargePdf from '../../../../components/pdfs/trdChargePdf';
import { PrintBill } from '../../../../components/pdfs/trdChargePdf/index.interface';
import { getTradePrintData } from '../../../../apis/trade/print';

const MobileGuildPayedDetail: FC = () => {
   const emptyGuild = {
      address: '',
      TradeType: '',
      is_paid: false,
      master_id: '',
   };
   const { token, selectedGuildCharge, selectedGuildBillDetail, user } =
      useContext(AppContext);
   const history = useHistory();
   const [printBill, setPrintBill] = useState<PrintBill | null>(null);
   const [isPrinting, setIsPrinting] = useState(false);
   const componentRef = useRef<HTMLDivElement>(null);
   const handlePrint = useReactToPrint({
      content: () => componentRef.current,
   });
   useEffect(() => {
      if (!token) history.push('/');
   }, [token]);
   useEffect(() => {
      const trdChargePdfButton = document.getElementById(
         'trd-charge-pdf-button',
      )! as HTMLButtonElement;
      if (isPrinting) trdChargePdfButton.click();
   }, [isPrinting]);
   const printChargeHandler = async () => {
      if (selectedGuildCharge) {
         const { body, status } = await getTradePrintData(
            {
               last_paid_bill: true,
               master_id: selectedGuildCharge.master_id,
            },
            token,
         );
         if (status === 200) setPrintBill(body);
      }
      setIsPrinting(true);
      handlePrint();
   };
   return (
      <div className="mobile-payed-detail">
         <Header />
         <GuildCard
            guild={selectedGuildCharge ? selectedGuildCharge : emptyGuild}
            lock
            viewOnly
            className="mobile-payed-detail__card"
            isFromMobile
         />
         <div className="mobile-payed-detail__charges">
            {selectedGuildBillDetail
               ? selectedGuildBillDetail.bill_details.map((charge) => {
                    return (
                       <>
                          <div className="mobile-payed-detail__charges-header">
                             <div className="mobile-payed-detail__charges-colume">
                                <span>از سال: </span>
                                <span>{charge.from_year}</span>
                             </div>
                             <div className="mobile-payed-detail__charges-colume">
                                <span>تا سال: </span>
                                <span>{charge.to_year}</span>
                             </div>
                          </div>
                          <div className="mobile-payed-detail__charges-row">
                             <div className="mobile-payed-detail__charges-colume">
                                <span>مبلغ ريال: </span>
                                <span>{separateByThree(charge.creditor)}</span>
                             </div>
                             <div className="mobile-payed-detail__charges-colume">
                                <span>توضیحات: </span>
                                <span>{charge.desc}</span>
                             </div>
                             <div className="mobile-payed-detail__charges-colume">
                                <span>شماره قبض: </span>
                                <span>{charge.bill_code}</span>
                             </div>
                             <div className="mobile-payed-detail__charges-colume">
                                <span>کدقبض: </span>
                                <span>{charge.payment_date}</span>
                             </div>
                          </div>
                       </>
                    );
                 })
               : ''}
         </div>

         <Button
            className="trd-payed-detail__button"
            onClick={printChargeHandler}
            id="trd-charge-pdf-button"
         >
            نمایش قبض
         </Button>
         {isPrinting &&
            selectedGuildCharge &&
            selectedGuildBillDetail &&
            user && (
               <TrdChargePdf
                  componentRef={componentRef}
                  data={{
                     bill_details: selectedGuildBillDetail.bill_details,
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

export default MobileGuildPayedDetail;
