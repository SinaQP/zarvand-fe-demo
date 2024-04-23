import Layout from '../../containers/layout';
import Amounts from './amounts';
import Header from './header';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../../../App.context';
import { Bill } from './index.interface';
import { separateByThree } from '../../../../utilities/separatetByThree';
import GuildCard from '../../../../componnents/guildCard';
import { getTradeBillDetailsInfo } from '../../../../apis/guildPhase/guild-bill-details-info';
import Button from '../../../../componnents/button';
import "./index.scss";

const TradePayment = () => {
   const emptyGuild = {
      address: '',
      TradeType: '',
      is_paid: false,
      master_id: '',
   };
   const { token, selectedGuildCharge, selectedGuildBillDetail } =
      useContext(AppContext);
   const history = useHistory();
   const [bill, setBill] = useState<Bill | null>(null);

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
   }, [token, history]);
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
                        selectedGuildCharge ? selectedGuildCharge : emptyGuild
                     }
                  />
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
                        {bill?.last_bill_details
                           ? bill.last_bill_details?.map((charge) => (
                                <div className="trd-payment__charges-row">
                                   <span>{charge.from_year}</span>
                                   <span>{charge.to_year}</span>
                                   <span>
                                      {separateByThree(charge.creditor)}
                                   </span>
                                   <span>{charge.desc}</span>
                                </div>
                             ))
                           : ''}
                     </div>
                  </div>
               </div>
               <div className="trd-payment__colume">
                  <Amounts
                     bill_no={bill?.bill_no ? bill.bill_no : ''}
                     payment_no={bill?.payment_no ? bill.payment_no : ''}
                     value_to_pay={bill?.value_to_pay ? bill?.value_to_pay : 0}
                  />
                  <div className="trd-payment__buttons">
                     {selectedGuildBillDetail?.bill_details?.length ? (
                        <Button
                           className="trd-payment__button trd-payment__button--outline"
                           onClick={() => history.push('/payed-detail/guild')}
                        >
                           مشاهده سابقه پرداخت
                        </Button>
                     ) : null}
                     <Button className="trd-payment__button">پرداخت</Button>
                  </div>
               </div>
            </div>
         </div>
      </Layout>
   );
};

export default TradePayment;
