import { useState } from 'react';
import Layout from '../../../containers/desktop/layout';
import NationalCodeEntry from '../../../containers/desktop/nationalCodeEntry';
import ConfirmationPage from '../../../containers/desktop/confirmationPage';
import LoginStage from './loginStageEnum';
import { LoginContext } from './context';

const Login = () => {
   const [currentStage, setLoginStage] = useState<LoginStage>(
      LoginStage.NationalCodeEntry,
   );
   const [nationalCode, setNationalCode] = useState<string>('         ');
   const [phoneNumber, setPhoneNumber] = useState<string>('');

   return (
      <LoginContext.Provider
         value={{
            setLoginStage,
            setNationalCode,
            nationalCode,
            phoneNumber,
            setPhoneNumber,
         }}
      >
         <Layout>
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
