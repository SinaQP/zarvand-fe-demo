import { useState } from 'react';
import Layout from '../containers/layout';
import LoginStage from './loginStageEnum';
import { LoginContext } from './context';
import NationalCodeEntry from './nationalCodeEntry';
import ConfirmationPage from './confirmationPage';

const Login = () => {
   const [currentStage, setLoginStage] = useState<LoginStage>(
      LoginStage.NationalCodeEntry,
   );
   const [nationalCode, setNationalCode] = useState<string[]>([]);
   const [phoneNumber, setPhoneNumber] = useState<string>('');

   return (
      <LoginContext.Provider
         value={{
            setLoginStage,
            setNationalCode,
            setPhoneNumber,
            nationalCode,
            phoneNumber,
         }}
      >
         <Layout showBackArrow={false} showLogoutIcon={false}>
            {currentStage === LoginStage.NationalCodeEntry ? (
               <NationalCodeEntry />
            ) : null}
            {currentStage === LoginStage.ConfirmationPage ? (
               <ConfirmationPage />
            ) : null}
         </Layout>
      </LoginContext.Provider>
   );
};

export default Login;
