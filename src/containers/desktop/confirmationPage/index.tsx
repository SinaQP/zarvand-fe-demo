import { FC } from 'react';
import PhoneNumberSection from './phoneNumberSection';
import VerificationCodeEntry from './verificationCodeEntry';

const ConfirmationPage: FC = () => {
      return (
            <div className="confirmation-page">
                  <PhoneNumberSection />
                  <VerificationCodeEntry />
            </div>
      );
};

export default ConfirmationPage;
