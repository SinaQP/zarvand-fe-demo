import Layout from '../../containers/layout';
import Amounts from './amounts';
import Header from './header';
import { useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../../../App.context';
import { Bill } from './index.interface';
import { separateByThree } from '../../../../utilities/separatetByThree';
import GuildCard from '../../../../componnents/guildCard';
import { getTradeBillDetailsInfo } from '../../../../apis/trade/guild-bill-details-info';
import Button from '../../../../componnents/button';
import './index.scss';
import { useReactToPrint } from 'react-to-print';
import TrdChargePdf from '../../../../componnents/pdfs/trdChargePdf';

const TradePayment = () => {
   const { token, selectedGuildCharge, selectedGuildBillDetail, user } =
      useContext(AppContext);
   const history = useHistory();
   const [bill, setBill] = useState<Bill | null>(null);
   const [isPrinting, setIsPrinting] = useState(false);
   const componentRef = useRef<HTMLDivElement>(null);

   const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      onAfterPrint: () => setIsPrinting(false),
   });
   useEffect(() => {
      if (!token) {
         history.push('');
         return;
      }
      const fetchBillDetails = async () => {
         if (selectedGuildCharge) {
            const { body } = await getTradeBillDetailsInfo(
               { master_id: selectedGuildCharge.master_id },
               token,
            );
            setBill(body);
         }
      };
      fetchBillDetails();
   }, [token, history, selectedGuildCharge]);

   const printChargeHandler = () => {
      setIsPrinting(true);
      handlePrint();
   };
   const renderChargeRows = () => {
      if (!bill?.last_bill_details) return null;
      return bill.last_bill_details.map((charge, index) => (
         <div key={index} className="trd-payment__charges-row">
            <span>{charge.from_year}</span>
            <span>{charge.to_year}</span>
            <span>{separateByThree(charge.creditor)}</span>
            <span>{charge.type_desc}</span>
         </div>
      ));
   };
   return (
      <Layout>
         <div className="trd-payment">
            <Header />
            <div className="trd-payment__container">
               <div className="trd-payment__colume">
                  <GuildCard
                     className="trd-payment__guildCard"
                     lock
                     viewOnly
                     guild={
                        selectedGuildCharge || {
                           address: '',
                           TradeType: '',
                           is_paid: false,
                           master_id: '',
                        }
                     }
                  />
                  <Button
                     className="trd-payment__button trd-payment__button--print"
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
                              bill_details:
                                 selectedGuildBillDetail.last_bill_details,
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
                              bill_code:
                                 selectedGuildBillDetail.bill_details?.[0]
                                    ?.bill_code || '',
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
               <div className="trd-payment__colume">
                  <div className="trd-payment__charges">
                     <div className="trd-payment__charges-header">
                        <span>از سال</span>
                        <span>تا سال</span>
                        <span>مبلغ(ريال)</span>
                        <span>توضیحات</span>
                     </div>
                     <div className="trd-payment__charges-rows-container">
                        {renderChargeRows()}
                     </div>
                  </div>
               </div>
               <div className="trd-payment__colume">
                  <Amounts
                     bill_no={bill?.bill_no || ''}
                     payment_no={bill?.payment_no || ''}
                     value_to_pay={bill?.value_to_pay || 0}
                  />
                  <div className="trd-payment__buttons">
                     {selectedGuildBillDetail?.bill_details?.length && (
                        <Button
                           className="trd-payment__button trd-payment__button--outline"
                           onClick={() => history.push('/payed-detail/guild')}
                        >
                           مشاهده سابقه پرداخت
                        </Button>
                     )}
                     <Button className="trd-payment__button">پرداخت</Button>
                  </div>
               </div>
            </div>
         </div>
      </Layout>
   );
};

export default TradePayment;
