import { FC, useContext, useEffect, useRef, useState } from 'react';
import Header from '../../../../containers/mobile/payment/header';
import { AppContext } from '../../../../App.context';
import { useHistory } from 'react-router-dom';
import Button from '../../../../componnents/button';
import { separateByThree } from '../../../../utilities/separatetByThree';
import GuildCard from '../../../../componnents/guildCard';
import { useReactToPrint } from 'react-to-print';
import TrdChargePdf from '../../../../componnents/pdfs/trdChargePdf';

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
   const [printCharge, setPrintCharge] = useState<boolean>(false);
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
      if (printCharge) trdChargePdfButton.click();
   }, [printCharge]);
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
            onClick={() => {
               setPrintCharge(true);
               handlePrint();
            }}
            id="trd-charge-pdf-button"
         >
            نمایش قبض
         </Button>
         {printCharge &&
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

export default MobileGuildPayedDetail;
