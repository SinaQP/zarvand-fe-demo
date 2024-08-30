import Layout from '../../containers/layout';
import Header from './header';
import { useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../../../App.context';
import { separateByThree } from '../../../../utilities/separatetByThree';
import GuildCard from '../../../../componnents/guildCard';
import './index.scss';
import Button from '../../../../componnents/button';
import { useReactToPrint } from 'react-to-print';
import TrdChargePdf from '../../../../componnents/pdfs/trdChargePdf';
import { getTradePrintData } from '../../../../apis/trade/print';
import { PrintBill } from '../../../../componnents/pdfs/trdChargePdf/index.interface';

const TradePayedDetail = () => {
   const emptyGuild = {
      address: '',
      TradeType: '',
      is_paid: false,
      master_id: '',
   };
   const { token, selectedGuildCharge, selectedGuildBillDetail, user } =
      useContext(AppContext);
   const componentRef = useRef<HTMLDivElement>(null);
   const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      onAfterPrint: () => setIsPrinting(false),
   });
   const history = useHistory();
   const [isPrinting, setIsPrinting] = useState(false);
   const [printBill, setPrintBill] = useState<PrintBill | null>(null);
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
   useEffect(() => {
      if (!token) history.push('');
   }, [token, history]);
   useEffect(() => {
      const trdChargePdfButton = document.getElementById(
         'trd-charge-pdf-button',
      )! as HTMLButtonElement;
      if (isPrinting) trdChargePdfButton.click();
   }, [isPrinting]);
   return (
      <Layout>
         <div className="trd-payed-detail">
            <Header />
            <div className="trd-payed-detail__container">
               <div className="trd-payed-detail__colume">
                  <GuildCard
                     lock
                     viewOnly
                     guild={
                        selectedGuildCharge ? selectedGuildCharge : emptyGuild
                     }
                  />
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
                              bill_details:
                                 selectedGuildBillDetail.bill_details,
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
               <div className="trd-payed-detail__colume trd-payed-detail__colume--charges">
                  <div className="trd-payed-detail__charges">
                     <div className="trd-payed-detail__charges-row trd-payed-detail__charges-header">
                        <span>از سال</span>
                        <span>تا سال</span>
                        <span>مبلغ(ريال)</span>
                        <span>توضیحات</span>
                        <span>شماره قبض</span>
                        <span>تاریخ پرداخت</span>
                     </div>
                     {selectedGuildBillDetail?.bill_details
                        ? selectedGuildBillDetail.bill_details.map(
                             (charge: any) => (
                                <div className="trd-payed-detail__charges-row">
                                   <span>{charge.from_year}</span>
                                   <span>{charge.to_year}</span>
                                   <span>
                                      {separateByThree(charge.creditor)}
                                   </span>
                                   <span>{charge.type_desc}</span>
                                   <span>{charge.bill_code}</span>
                                   <span>{charge.payment_date}</span>
                                </div>
                             ),
                          )
                        : ''}
                  </div>
               </div>
            </div>
         </div>
      </Layout>
   );
};

export default TradePayedDetail;
