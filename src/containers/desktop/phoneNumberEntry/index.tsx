import Input from '../input';
import Button from '../button';
import Slider from './slider';
import { FC, useContext } from 'react';
import handleTemporaryCodeRequest from './functions/handleTemporaryCodeRequest ';
import { LoginContext } from '../../../pages/desktop/login/context';

const PhoneNumberEntry: FC = () => {
      const { setLoginStage, setPhoneNumber, phoneNumber } =
            useContext(LoginContext);

      return (
            <div className="phone-number-entry">
                  <form>
                        <span>لطفا شماره همراه خود را وارد کنید</span>
                        <Input
                              className="phone-number-entry__input"
                              placeholder="**** *** 0913"
                              value={phoneNumber}
                              onChange={(event) =>
                                    setPhoneNumber(event.target.value)
                              }
                        />
                        <Button
                              className="phone-number-entry__button"
                              type="button"
                              onClick={(event) =>
                                    handleTemporaryCodeRequest({
                                          event,
                                          setLoginStage,
                                          phoneNumber,
                                    })
                              }
                        >
                              دریافت کد موقت
                        </Button>
                  </form>
                  <Slider />
            </div>
      );
};

export default PhoneNumberEntry;
