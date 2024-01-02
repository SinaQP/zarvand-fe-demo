import Input from '../input';
import Button from '../button';
import Slider from './slider';

const PhoneNumberEntry = () => {
      return (
            <div className="phone-number-entry">
                  <form>
                        <span>لطفا شماره همراه خود را وارد کنید</span>
                        <Input
                              className="phone-number-entry__input"
                              placeholder="*** *** 0913"
                        />
                        <Button
                              className="phone-number-entry__button"
                              type="button"
                        >
                              دریافت کد موقت
                        </Button>
                  </form>
                  <Slider />
            </div>
      );
};

export default PhoneNumberEntry;
