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

   return <LoginContext.Provider
      value={{
         setNationalCode,
         setPhoneNumber,
         nationalCode,
         phoneNumber,
      }}
   >
      <Layout extraHeaderContent={showConfirmationForm && <ConfirmationEntry />}
              headerBadge={showConfirmationForm &&
                 <CounterBadge initialCount={120} setShowConfirmationForm={setShowConfirmationForm} />}
              headerClassName={headerClassName}>
         <NationalCodeEntry setShowConfirmationForm={setShowConfirmationForm}
                            showConfirmationForm={showConfirmationForm} />
      </Layout>
   </LoginContext.Provider>;
};

export default Login;

