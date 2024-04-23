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

         {/* <Button className="mobile-payed-detail__button" size="large">
            چاپ
         </Button> */}
      </div>
   );
};

export default MobileGuildPayedDetail;
