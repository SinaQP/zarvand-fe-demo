import { Dispatch, SetStateAction } from 'react';
import { GuildBill, Guild } from '../../App.context';
import toast from '../../utilities/toast';
import { getTradeBillDetailsInfo } from '../../apis/guildPhase/guild-bill-details-info';

const handleChargeDetailButton = async (
   setSelectedCharge: Dispatch<SetStateAction<Guild | null>>,
   charge: Guild,
   history: { push: (url: string) => void },
   token: string,
   setBillDetailsInfoResponse: Dispatch<SetStateAction<GuildBill | null>>,
   isPaid: boolean,
) => {
   setSelectedCharge(charge);

   if (charge) {
      const billDetailsInfoResponse = await getTradeBillDetailsInfo(
         { master_id: charge.master_id },
         token,
      );
      const responseBody = billDetailsInfoResponse.body;
      if (billDetailsInfoResponse.status === 200) {
         setBillDetailsInfoResponse(responseBody);
         history.push(isPaid ? '/payed-detail/guild/' : '/payment/guild/');
      } else toast.fire({ title: responseBody.message, icon: 'error' });
   }
};

export default handleChargeDetailButton;
