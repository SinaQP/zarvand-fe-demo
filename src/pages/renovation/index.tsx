import { FC, useContext, useEffect, useState } from 'react';
import styles from './index.module.scss';
import { getUserRenovationCharges } from './getUserRenovationCharges';
import { AppContext } from '../../App.context';
import { RenovationCharge } from '../../App.interface';
import NoRenovationChargesMessage from './noRenovationChargeMessage';
import MasterCard from '../../components/masterCard';
import InfoCard from '../../components/infoCard';
import SelectedRenovationCharge from './selectedRenovationCharge';
import getSelectedChargeBillDetails from '../../utilities/getSelectedChargeBillDetails';
import { useLayoutContext } from '../../components/layout/layout.context';

const Renovation: FC = () => {
   const {
      token,
      selectedRenovationCharge,
      setSelectedChargeBillDetails,
      setSelectedChargeBillInfo,
      setShowPaymentHistory,
   } = useContext(AppContext);
   const { setHeaderId } = useLayoutContext();
   const [renovationCharges, setRenovationCharges] = useState<
      RenovationCharge[]
   >([]);

   useEffect(() => {
      getUserRenovationCharges(token, setRenovationCharges);
      setHeaderId && setHeaderId(styles['header']);
   }, []);

   useEffect(() => {
      if (selectedRenovationCharge) {
         getSelectedChargeBillDetails(
            token,
            selectedRenovationCharge,
            'Renovation',
            setSelectedChargeBillDetails,
            setSelectedChargeBillInfo,
         );
         setShowPaymentHistory(selectedRenovationCharge.is_paid);
      }
   }, [selectedRenovationCharge]);

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

   return (
      <section className={styles.layout}>
         {renovationCharges.length <= 0 && <NoRenovationChargesMessage />}
         {selectedRenovationCharge ? (
            <SelectedRenovationCharge />
         ) : (
            (() => {
               return renovationCharges.map((charge) => (
                  <MasterCard
                     master={charge}
                     address={charge.address}
                     isPayed={charge.is_paid}
                     key={charge.master_id}
                  >
                     <InfoCard
                        title={'شماره شناسنامه ملک'}
                        className={styles['certification-number-section']}
                        isPrimary={charge.is_paid}
                     >
                        {['فرعی', 'ملک', 'بلوک', 'محله', 'منطقه'].map(
                           (item, index) => (
                              <span key={index}>{item}</span>
                           ),
                        )}
                        {splitCertificateNumber(
                           charge.certificate_number,
                           segmentLengths,
                        ).map((item, index) => (
                           <span key={index}>{item}</span>
                        ))}
                     </InfoCard>
                  </MasterCard>
               ));
            })()
         )}
      </section>
   );
};

export default Renovation;
