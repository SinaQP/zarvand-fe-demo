import Button from '../../../../containers/desktop/button';
import Layout from '../../../../containers/desktop/layout';
import Amounts from './amounts';
import Header from './header';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../../../App.context';
import { Bill } from './index.interface';
import { separateByThree } from '../../../../utilities/separatetByThree';
import GuildCard from '../../../../componnents/guildCard';
import { getTradeBillDetailsInfo } from '../../../../apis/guildPhase/guild-bill-details-info';

const GuildPayment = () => {
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
   }, []);
   return (
      <Layout>
         <div className="payment">
            <Header />
            <div className="payment__container">
               <div className="payment__colume">
                  <GuildCard
                     className="payment__guildCard"
                     lock
                     viewOnly
                     guild={
                        selectedGuildCharge ? selectedGuildCharge : emptyGuild
                     }
                  />
               </div>
               <div className="payment__colume">
                  <div className="payment__charges">
                     <div className="payment__charges-header">
                        <span>سال</span>
                        <span>مبلغ(ريال)</span>
                        <span>توضیحات</span>
                     </div>
                     <div className="payment__charges-rows-container">
                        {bill?.bill_details
                           ? bill.bill_details?.map((charge) => (
                                <div className="payment__charges-row">
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
               <div className="payment__colume">
                  <Amounts
                     bill_no={bill?.bill_no ? bill.bill_no : ''}
                     payment_no={bill?.payment_no ? bill.payment_no : ''}
                     value_to_pay={bill?.value_to_pay ? bill?.value_to_pay : 0}
                  />
                  <div className="payment__buttons">
                     {selectedGuildBillDetail &&
                        selectedGuildBillDetail.bill_details && (
                           <Button
                              className="payment__button payment__button--outline"
                              onClick={() =>
                                 history.push('/payed-detail/guild')
                              }
                           >
                              مشاهده سابقه پرداخت
                           </Button>
                        )}
                     <Button className="payment__button">پرداخت</Button>
                  </div>
               </div>
            </div>
         </div>
      </Layout>
   );
};

export default GuildPayment;
