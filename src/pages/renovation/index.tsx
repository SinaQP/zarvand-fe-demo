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
import { useChargesContext, useUserContext } from '../../App.context';
import { RenovationCharge } from '../../interfaces/models.interface';
import CertificationNumberCard from '../../components/certificationNumberCard';
import PaidBillCard from '../../components/paidBillsCard';

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
   const { selectedChargeBillInfo } = useChargesContext();
   console.log(selectedChargeBillInfo?.bills);

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

   return (
      <section className={styles.layout}>
         {renovationCharges.length <= 0 && <NoRenovationChargesMessage />}
         {selectedRenovationCharge ? (
            <SelectedRenovationCharge />
         ) : (
            (() => {
               // return renovationCharges.map((charge) => (
               //    <MasterCard
               //       master={charge}
               //       address={charge.address}
               //       isPayed={charge.is_paid}
               //       key={charge.master_id}
               //    >
               //       <CertificationNumberCard charge={charge} />
               //    </MasterCard>
               // ));
               // return selectedChargeBillInfo?.bills.map((bill, idx) => (
               //    <RenovateCard
               //       Bill={bill}
               //       key={`${bill.bill_no}-${idx}`}
               //    />
               // ));
               return (
                  <>
                     <PaidBillCard Bill={undefined} />
                  </>
               );
            })()

            // <>
            //    <RenovateCard Bill={selectedChargeBillInfo?.bills[0]} />
            //    {/* <RenovateCard Bill={selectedChargeBillInfo?.bills[0]} />
            //    <RenovateCard Bill={selectedChargeBillInfo?.bills[0]} />
            //    <RenovateCard Bill={selectedChargeBillInfo?.bills[0]} />
            //    <RenovateCard Bill={selectedChargeBillInfo?.bills[0]} />
            //    <RenovateCard Bill={selectedChargeBillInfo?.bills[0]} />
            //    <RenovateCard Bill={selectedChargeBillInfo?.bills[0]} /> */}
            // </>
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
