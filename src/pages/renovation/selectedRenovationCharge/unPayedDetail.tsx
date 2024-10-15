import { FC } from 'react';
import MasterCard from '../../../components/masterCard';
import { useChargesContext } from '../../../App.context';
import CertificationNumberCard from '../../../components/certificationNumberCard';
import AnnualChargeTable from '../../../components/annualChargeTable';
import Loading from '../../../components/loading/loading';
import styles from '../index.module.scss';

const UnPayedDetails: FC = () => {
   const { selectedRenovationCharge, selectedChargeBillDetails } =
      useChargesContext();
   if (!selectedRenovationCharge) return null;
   return (
      <MasterCard
         master={selectedRenovationCharge}
         address={selectedRenovationCharge.address}
         isPayed={selectedRenovationCharge.is_paid}
         key={selectedRenovationCharge.master_id}
      >
         <CertificationNumberCard charge={selectedRenovationCharge} />

         {selectedChargeBillDetails === null ? (
            <Loading />
         ) : (
            <AnnualChargeTable
               data={selectedChargeBillDetails ? selectedChargeBillDetails : []}
               className={styles.table}
            />
         )}
      </MasterCard>
   );
};

export default UnPayedDetails;
