import { FC, useContext } from 'react';
import Input from '../../../../componnents/input';
import { LoginContext } from '../../../../pages/desktop/login/context';
import LoginStage from '../../../../pages/desktop/login/loginStageEnum';
import handleResendCodeClick from './handleResendCodeClick';

const NationalCodeSection: FC = () => {
   const { nationalCode, setLoginStage } =
      useContext(LoginContext);

   return (
      <section className="national-code-section">
         <span className="national-code-section__title">
            کدملی وارد شده
         </span>
         <Input
            value={nationalCode.join('')}
            disabled
            className="national-code-section__input"
         />
         <div className="national-code-section__caption">
            <span
               className="national-code-section__edit-national-code"
               onClick={() => setLoginStage(LoginStage.NationalCodeEntry)}
            >
               ویرایش کدملی
            </span>
            <span onClick={() => handleResendCodeClick()}>ارسال مجدد کد</span>
         </div>
      </section>
   );
};

export default NationalCodeSection;
