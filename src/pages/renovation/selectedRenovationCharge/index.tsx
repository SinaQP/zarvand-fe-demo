import { FC, useContext } from 'react';
import MasterCard from '../../../components/masterCard';
import InfoCard from '../../../components/infoCard';
import { RenovationCharge } from '../../../App.interface';
import styles from '../index.module.scss';
import { AppContext } from '../../../App.context';
import AnnualChargeTable from '../../../components/annualChargeTable';
import Loading from '../../../components/loading/loading';

const SelectedRenovationCharge: FC = () => {
   const { selectedRenovationCharge, selectedChargeBillDetails } =
      useContext(AppContext);
   const segmentLengths = [3, 4, 7, 2, 3];

   const splitCertificateNumber = (
      str: string,
      lengths: number[],
   ): string[] => {
      let result: string[] = [];
      let startIndex = 0;

      lengths.forEach((length) => {
         result.push(str.substr(startIndex, length));
         startIndex += length;
      });

      return result;
   };
   if (!selectedRenovationCharge) return null;

   return (
      <MasterCard
         master={selectedRenovationCharge}
         address={selectedRenovationCharge.address}
         isPayed={selectedRenovationCharge.is_paid}
         key={selectedRenovationCharge.master_id}
      >
         <InfoCard
            title={'شماره شناسنامه ملک'}
            className={styles['certification-number-section']}
            isPrimary={selectedRenovationCharge.is_paid}
         >
            {['فرعی', 'ملک', 'بلوک', 'محله', 'منطقه'].map((item, index) => (
               <span key={index}>{item}</span>
            ))}
            {splitCertificateNumber(
               selectedRenovationCharge.certificate_number,
               segmentLengths,
            ).map((item, index) => (
               <span key={index}>{item}</span>
            ))}
         </InfoCard>

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

export default SelectedRenovationCharge;
