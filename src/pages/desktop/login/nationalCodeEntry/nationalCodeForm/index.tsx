import { useContext } from 'react';
import { LoginContext } from '../../context';
import OtpInput from '../../../../../components/otpInput';
import './index.scss';

const NationalCodeForm = () => {
   const { setNationalCode, nationalCode } = useContext(LoginContext);
   return (
      <div className="national-code-entry__wrapper">
         <OtpInput
            numberOfInputs={10}
            inputsClassName="national-code-entry__input"
            value={nationalCode}
            setValue={setNationalCode}
         />
      </div>
   );
};

export default NationalCodeForm;
