import { FC, useState } from 'react';
import Layout from '../../components/layout';
import NationalCodeEntry from './nationalCodeEntry';
import ConfirmationEntry from './confirmationEntry';
import CounterBadge from './counter';
import { LoginContext } from './context';


const Login: FC = () => {
   const [showConfirmationForm, setShowConfirmationForm] = useState(false);
   const [nationalCode, setNationalCode] = useState<string[]>([]);
   const [phoneNumber, setPhoneNumber] = useState<string>('');
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
                 <CounterBadge initialCount={120} setShowConfirmationForm={setShowConfirmationForm} />}>
         <NationalCodeEntry setShowConfirmationForm={setShowConfirmationForm}
                            showConfirmationForm={showConfirmationForm} />
      </Layout>
   </LoginContext.Provider>;
};

export default Login;

