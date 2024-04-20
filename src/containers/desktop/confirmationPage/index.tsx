import { FC, useState } from 'react';
import PhoneNumberSection from './nationalCodeSection';
import VerificationCodeEntry from './verificationCodeEntry';

const ConfirmationPage: FC = () => {
   const [timerDuration, setTimerDuration] = useState(150);

   return (
      <div className="confirmation-page">
         <PhoneNumberSection setTimerDuration={setTimerDuration} />
         <VerificationCodeEntry
            setTimerDuration={setTimerDuration}
            timerDuration={timerDuration}
         />
      </div>
   );
};

export default ConfirmationPage;
