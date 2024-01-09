import { FC, useContext } from 'react';
import Input from '../../../../componnents/input';
import { LoginContext } from '../../../../pages/desktop/login/context';
import LoginStage from '../../../../pages/desktop/login/loginStageEnum';
import Swal from 'sweetalert2';
import handleResendCodeClick from './handleResendCodeClick';

const PhoneNumberSection: FC = () => {
      const { phoneNumber, setLoginStage } = useContext(LoginContext);
      return (
            <section className="phone-number-section">
                  <span className="phone-number-section__title">
                        شماره همراه وارد شده
                  </span>
                  <Input
                        value={phoneNumber}
                        disabled
                        className="phone-number-section__input"
                  />
                  <div className="phone-number-section__caption">
                        <span
                              className="phone-number-section__edit-phone-number"
                              onClick={() =>
                                    setLoginStage(LoginStage.PhoneNumberEntry)
                              }
                        >
                              ویرایش شماره تلفن
                        </span>
                        <span onClick={() => handleResendCodeClick()}>
                              ارسال مجدد کد
                        </span>
                  </div>
            </section>
      );
};

export default PhoneNumberSection;
