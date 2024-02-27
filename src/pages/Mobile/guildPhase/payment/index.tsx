import { FC, useContext, useEffect, useState } from 'react';
import Header from '../../../../containers/mobile/payment/header';
import { AppContext } from '../../../../App.context';
import { useHistory } from 'react-router-dom';
import Button from '../../../../componnents/button';
import toMoneyFormat from '../../../../utilities/toMoneyFormat';
import { getTradeBillDetailsInfo } from '../../../../apis/guildPhase/guild-bill-details-info';
import { Bill } from '../../../desktop/guildPhase/payment/index.interface';
import GuildCard from '../../../../componnents/guildCard';
import Charges from '../../../../containers/mobile/guildPhase/payment/charges';
import Amounts from '../../../../containers/mobile/guildPhase/payment/amounts';

const PaymentGuild: FC = () => {
   const emptyGuild = {
      address: '',
      TradeType: '',
      is_paid: false,
      master_id: '',
   };
   const { token, selectedGuildCharge } = useContext(AppContext);
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

   useEffect(() => {
      if (!token) history.push('/');
   }, [token]);

   return (
      <div className="mobile-payment">
         <Header />
         <GuildCard
            guild={selectedGuildCharge ? selectedGuildCharge : emptyGuild}
            lock
            viewOnly
            className="mobile-payment__card"
         />
         <Charges bill={bill} />
         <Amounts
            bill_no={bill?.bill_no ? bill.bill_no : ''}
            payment_no={bill?.payment_no ? bill.payment_no : ''}
            value_to_pay={bill?.value_to_pay ? bill.value_to_pay : 0}
         />
         <Button className="mobile-payment__button" size="large">
            پرداخت
         </Button>
      </div>
   );
};

export default PaymentGuild;
