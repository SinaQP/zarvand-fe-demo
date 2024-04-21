import { FC, useState } from 'react';
import PhoneNumberSection from './nationalCodeSection';
import VerificationCodeEntry from './verificationCodeEntry';

const ConfirmationPage: FC = () => {
   const [timerDuration, setTimerDuration] = useState(120);
   const [timerInterval, setTimerInterval] =
      useState<NodeJS.Timer | null>(null);

   return (
      <div className="confirmation-page">
         <PhoneNumberSection setTimerDuration={setTimerDuration} setTimerInterval={setTimerInterval}/>
         <VerificationCodeEntry
            setTimerDuration={setTimerDuration}
            timerDuration={timerDuration}
            setTimerIntervalLoop={setTimerInterval}
            timerIntervalLoop={timerInterval}
         />
      </div>
   );
};

export default ConfirmationPage;
