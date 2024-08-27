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
   });
   const [printCharge, setPrintCharge] = useState<boolean>(false);
   const history = useHistory();

   useEffect(() => {
      if (!token) history.push('');
   }, [token, history]);
   useEffect(() => {
      const trdChargePdfButton = document.getElementById(
         'trd-charge-pdf-button',
      )! as HTMLButtonElement;
      if (printCharge) trdChargePdfButton.click();
   }, [printCharge]);
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
                              bill_details:
                                 selectedGuildBillDetail.bill_details,
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
                                 ? selectedGuildBillDetail.bill_details[0]
                                      .bill_code
                                 : '',
                              income_unit_bill_subtitle: '',
                              bill_no: selectedGuildBillDetail.bill_no,
                              payment_no: selectedGuildBillDetail.payment_no,
                              total_amount:
                                 selectedGuildBillDetail.value_to_pay,
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
