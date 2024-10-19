import { toast } from 'react-toastify';
import { getPersonTradeMasters } from '../../../apis/trade/get-person-trade-master';
import { Dispatch, SetStateAction } from 'react';
import { TradeCharge } from '../../../interfaces/models.interface';

export const getUserTradeMasters = async (
   token: string,
   setState: Dispatch<SetStateAction<TradeCharge[]>>,
) => {
   const response = await getPersonTradeMasters(token);
   const responseBody = response.body;
   setState([
      {
         address: '1',
         master_id: '10000',
         shop_area: 20,
         TradeType: 'نیگا فروشی',
         is_paid: false,
      },
      {
         address: '1',
         master_id: '10000',
         shop_area: 20,
         TradeType: 'نیگا فروشی',
         is_paid: false,
      },
      {
         address: '1',
         master_id: '10000',
         shop_area: 20,
         TradeType: 'نیگا فروشی',
         is_paid: false,
      },   {
         address: '1',
         master_id: '10000',
         shop_area: 20,
         TradeType: 'نیگا فروشی',
         is_paid: false,
      },   {
         address: '1',
         master_id: '10000',
         shop_area: 20,
         TradeType: 'نیگا فروشی',
         is_paid: false,
      },   {
         address: '1',
         master_id: '10000',
         shop_area: 20,
         TradeType: 'نیگا فروشی',
         is_paid: false,
      },   {
         address: '1',
         master_id: '10000',
         shop_area: 20,
         TradeType: 'نیگا فروشی',
         is_paid: false,
      },   {
         address: '1',
         master_id: '10000',
         shop_area: 20,
         TradeType: 'نیگا فروشی',
         is_paid: false,
      },   {
         address: '1',
         master_id: '10000',
         shop_area: 20,
         TradeType: 'نیگا فروشی',
         is_paid: false,
      },   {
         address: '1',
         master_id: '10000',
         shop_area: 20,
         TradeType: 'نیگا فروشی',
         is_paid: false,
      },   {
         address: '1',
         master_id: '10000',
         shop_area: 20,
         TradeType: 'نیگا فروشی',
         is_paid: false,
      },
   ]);
   if (response.status === 200) {
      setState(responseBody);
      return responseBody;
   } else {
      toast.error(responseBody.message);
   }
   return [];
};
