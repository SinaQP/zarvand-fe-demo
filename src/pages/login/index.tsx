import { FC, useEffect, useState } from 'react';
import NationalCodeEntry from './nationalCodeEntry';

import styles from './index.module.scss';
import useWindowWidth from '../../hooks/useWindowWidth';
import blueSquareIcon from '../../assets/images/blue-squares.svg';
import whiteSquareIcon from '../../assets/images/white.squares.svg';
import CityAnimationCard from './cityAnimationCard';
import { useLayoutContext } from '../../components/layout/layout.context';
import { updateLayout } from './functions/updateLayout';
import { Bounce, ToastContainer } from 'react-toastify';
import { EntryType } from './index.interface';
import PhoneNumberEntry from './phoneNumberEntry';

const Login: FC = () => {
   const {
      setExtraHeaderContent,
      setHeaderBadge,
      setBadgeId,
      setHeaderId,
      setHeaderText,
   } = useLayoutContext();
   const [showConfirmationForm, setShowConfirmationForm] = useState(false);
   const headerClassName = useWindowWidth(styles.header, '');
   const mainTitle = useWindowWidth(
      <h1
         className={`${styles.title} ${
            showConfirmationForm ? styles.expanded : ''
         }`}
      >
         سامانه هوشمند شهروندی
      </h1>,
      null,
   );
   const headerTitle = useWindowWidth(
      'پرداخت آسان عوارض شهری بدون نیاز به مراجعه حضوری',
      'سامانه هوشمند شهروندی',
   );
   const blueSquare = useWindowWidth(
      <img src={blueSquareIcon} className={styles['blue-square']} />,
      null,
   );
   const whiteSquare = useWindowWidth(
      <img src={whiteSquareIcon} className={styles['white-square']} />,
      null,
   );
   const toastPosition = useWindowWidth('bottom-center', 'top-center');

   useEffect(() => {
      setHeaderText && setHeaderText(headerTitle);
      updateLayout({
         showConfirmationForm,
         setExtraHeaderContent,
         setHeaderBadge,
         setShowConfirmationForm,
         setHeaderId,
         setBadgeId,
         headerClassName,
         setSelectedEntry,
      });
   }, [showConfirmationForm]);
   const [selectedEntry, setSelectedEntry] = useState<EntryType>(
      EntryType.NATIONAL_CODE_ENTRY,
   );
   const MainEntries = {
      NATIONAL_CODE_ENTRY: (
         <NationalCodeEntry
            setShowConfirmationForm={setShowConfirmationForm}
            showConfirmationForm={showConfirmationForm}
            setSelectedEntry={setSelectedEntry}
            type="Person"
         />
      ),
      ORGANIZATION_CODE_ENTRY: (
         <NationalCodeEntry
            setShowConfirmationForm={setShowConfirmationForm}
            showConfirmationForm={showConfirmationForm}
            setSelectedEntry={setSelectedEntry}
            type="Organization"
         />
      ),
      CHANGE_PHONE_NUMBER: (
         <PhoneNumberEntry
            headingText="برای کد ملی شما شماره‌ای در سیستم ثبت نشده است. لطفاً شماره تماس مرتبط با این کد ملی را وارد نمایید."
            setSelectedEntry={setSelectedEntry}
            setShowConfirmationForm={setShowConfirmationForm}
         />
      ),
      INVALID_PHONE_NUMBER: (
         <PhoneNumberEntry
            headingText="برای کد ملی شما شماره‌ای در سیستم ثبت نشده است. لطفاً شماره تماس مرتبط با این کد ملی را وارد نمایید."
            setSelectedEntry={setSelectedEntry}
            setShowConfirmationForm={setShowConfirmationForm}
         />
      ),
   };
   return (
      <section>
         {blueSquare}
         {whiteSquare}
         <CityAnimationCard />
         <div className={styles.content}>
            {mainTitle}
            {MainEntries[selectedEntry]}
         </div>
         <ToastContainer
            rtl
            position={toastPosition}
            autoClose={5000}
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

export default Login;
