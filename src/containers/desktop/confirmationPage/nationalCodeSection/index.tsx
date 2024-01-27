import { FC, useContext } from 'react';
import Input from '../../../../componnents/input';
import { LoginContext } from '../../../../pages/desktop/login/context';
import LoginStage from '../../../../pages/desktop/login/loginStageEnum';
import handleResendCodeClick from './handleResendCodeClick';

const NationalCodeSection: FC = () => {
   const { phoneNumber, setLoginStage, nationalCode } = useContext(LoginContext);

   return (
      <section className="national-code-section">
         <span className="national-code-section__title">شماره همراه وارد شده</span>
         <Input value={phoneNumber} className="national-code-section__input" />
         <div className="national-code-section__caption">
            <span
               className="national-code-section__edit-national-code"
               onClick={() => setLoginStage(LoginStage.NationalCodeEntry)}
            >
               ویرایش کدملی
            </span>
            <span onClick={() => handleResendCodeClick(nationalCode)}>ارسال مجدد کد</span>
         </div>
      </section>
   );
};

export default NationalCodeSection;
