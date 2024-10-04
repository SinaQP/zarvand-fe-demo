import { FC, useState } from 'react';
import Layout from '../../components/layout';
import NationalCodeEntry from './nationalCodeEntry';
import ConfirmationEntry from './confirmationEntry';
import CounterBadge from './counter';
import { LoginContext } from './context';
import styles from './index.module.scss';
import useWindowWidth from '../../hooks/useWindowWidth';

const Login: FC = () => {
   const [showConfirmationForm, setShowConfirmationForm] = useState(false);
   const [nationalCode, setNationalCode] = useState<string[]>([]);
   const [phoneNumber, setPhoneNumber] = useState<string>('');
   const headerClassName = useWindowWidth(styles.header, '');
   const mainTitle = useWindowWidth(
      <h1 className={styles.title}>سامانه پرداخت عوارض شهرداری زرند</h1>,
      null,
   );
   return (
      <LoginContext.Provider
         value={{
            setNationalCode,
            setPhoneNumber,
            nationalCode,
            phoneNumber,
         }}
      >
         <Layout
            extraHeaderContent={true && <ConfirmationEntry />}
            headerBadge={
               showConfirmationForm && (
                  <CounterBadge
                     initialCount={120}
                     setShowConfirmationForm={setShowConfirmationForm}
                  />
               )
            }
            headerClassName={headerClassName}
            badgeClassName={styles['header-badge']}
         >
            {mainTitle}
            <NationalCodeEntry
               setShowConfirmationForm={setShowConfirmationForm}
               showConfirmationForm={showConfirmationForm}
            />
         </Layout>
      </LoginContext.Provider>
   );
};

export default Login;
