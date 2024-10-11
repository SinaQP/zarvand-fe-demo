import { FC, useContext, useEffect, useState } from 'react';
import styles from './index.module.scss';
import { getUserRenovationCharges } from './getUserRenovationCharges';
import NoRenovationChargesMessage from './noRenovationChargeMessage';
import MasterCard from '../../components/masterCard';
import InfoCard from '../../components/infoCard';
import SelectedRenovationCharge from './selectedRenovationCharge';
import getSelectedChargeBillDetails from '../../utilities/getSelectedChargeBillDetails';
import { useLayoutContext } from '../../components/layout/layout.context';
import { Bounce, ToastContainer } from 'react-toastify';
import { useChargesContext, useUserContext } from '../../app.context';
import { RenovationCharge } from '../../interfaces/models.interface';

const Renovation: FC = () => {
   const {
      selectedRenovationCharge,
      setSelectedChargeBillDetails,
      setSelectedChargeBillInfo,
      renovationCharges,
      setRenovationCharges,
   } = useChargesContext();
   const { token, setShowPaymentHistory } = useUserContext();
   const { setHeaderId } = useLayoutContext();

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
         <ToastContainer
            rtl
            position="bottom-center"
            autoClose={2000}
            hideProgressBar={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
            bodyStyle={{ fontFamily: 'BNazanin', fontSize: '2.5rem' }}
         />
      </section>
   );
};

export default Renovation;
