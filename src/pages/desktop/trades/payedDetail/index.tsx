import Layout from '../../containers/layout';
import Header from './header';
import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../../../App.context';
import { separateByThree } from '../../../../utilities/separatetByThree';
import GuildCard from '../../../../componnents/guildCard';
import "./index.scss";

const TradePayedDetail = () => {
   const emptyGuild = {
      address: '',
      TradeType: '',
      is_paid: false,
      master_id: '',
   };
   const { token, selectedGuildCharge, selectedGuildBillDetail } =
      useContext(AppContext);
   const history = useHistory();

   useEffect(() => {
      if (!token) history.push('');
   }, [token, history]);

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
                  {/* <Button className="trd-payed-detail__button">چاپ</Button> */}
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
                                   <span>{charge.desc}</span>
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
