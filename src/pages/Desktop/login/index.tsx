import { useState } from 'react';
import Layout from '../../../containers/desktop/layout';
import PhoneNumberEntry from '../../../containers/desktop/phoneNumberEntry';
import ConfirmationPage from '../../../containers/desktop/confirmationPage';
import LoginStage from './loginStageEnum';
import { LoginContext } from './context';
import NationalCodePage from '../../../containers/desktop/nationalCodePage';

const Login = () => {
      const [currentStage, setLoginStage] = useState<LoginStage>(
            LoginStage.PhoneNumberEntry,
      );
      const [phoneNumber, setPhoneNumber] = useState<string>('');

      return (
            <LoginContext.Provider
                  value={{ setLoginStage, phoneNumber, setPhoneNumber }}
            >
                  <Layout>
                        {currentStage === LoginStage.PhoneNumberEntry ? (
                              <PhoneNumberEntry />
                        ) : null}
                        {currentStage === LoginStage.ConfirmationPage ? (
                              <ConfirmationPage />
                        ) : null}
                        {currentStage === LoginStage.NationalCodePage ? (
                              <NationalCodePage />
                        ) : null}
                  </Layout>
            </LoginContext.Provider>
      );
};

export default Login;
