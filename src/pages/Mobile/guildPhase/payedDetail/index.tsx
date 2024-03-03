import { FC, useContext, useEffect } from 'react';
import Header from '../../../../containers/mobile/payment/header';
import { AppContext } from '../../../../App.context';
import { useHistory } from 'react-router-dom';
import Button from '../../../../componnents/button';
import { separateByThree } from '../../../../utilities/separatetByThree';
import GuildCard from '../../../../componnents/guildCard';

const MobileGuildPayedDetail: FC = () => {
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
      if (!token) history.push('/');
   }, [token]);

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
            <div className="mobile-payed-detail__charges-header">
               <span>سال</span>
               <span>مبلغ(ريال)</span>
               <span>توضیحات</span>
               <span>شناسه قبض</span>
               <span>تاریخ پرداخت</span>
            </div>
            {selectedGuildBillDetail
               ? selectedGuildBillDetail.bill_details.map((charge) => {
                    return (
                       <div className="mobile-payed-detail__charges-row">
                          <span>{charge.from_year}</span>
                          <span>{separateByThree(charge.creditor)}</span>
                          <span>{charge.incomecode_desc}</span>
                          <span>{charge.bill_code}</span>
                          <span>{charge.payment_date}</span>
                       </div>
                    );
                 })
               : ''}
         </div>

         <Button className="mobile-payed-detail__button" size="large">
            چاپ
         </Button>
      </div>
   );
};

export default MobileGuildPayedDetail;
