import { FC, useContext } from 'react';
import InfoRow from '../../../components/infoRow';
import toMoneyFormat from '../../../utilities/toMoneyFormat';
import { useChargesContext } from '../../../App.context';
import useWindowWidth from '../../../hooks/useWindowWidth';
import styles from '../index.module.scss';

const BillInfo: FC<{ className?: string }> = ({ className }) => {
   const infoRowClassName = useWindowWidth(
      `${styles['info-row']} ${false && styles['info-row--is-paid']} ${
         styles['info-row--bill-info']
      }`,
      '',
   );
   const { selectedTradeCharge } = useChargesContext();
   if (!selectedTradeCharge) return null;
   return (
      selectedTradeCharge.last_bill_info && (
         <div className={className}>
            <InfoRow
               title="مبلغ کل(ریال)"
               value={toMoneyFormat(
                  selectedTradeCharge.last_bill_info.value_to_pay.toString(),
               )}
               className={infoRowClassName}
            />
            <InfoRow
               title="شناسه قبض"
               value={selectedTradeCharge.last_bill_info.bill_no}
               className={infoRowClassName}
            />
            <InfoRow
               title="شناسه پرداخت"
               value={selectedTradeCharge.last_bill_info.payment_no}
               className={infoRowClassName}
            />
         </div>
      )
   );
};

export default BillInfo;
