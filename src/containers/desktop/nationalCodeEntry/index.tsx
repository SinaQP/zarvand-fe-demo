import Button from '../button';
import Slider from './slider';
import { FC, useContext } from 'react';
import handleTemporaryCodeRequest from './functions/handleTemporaryCodeRequest ';
import { LoginContext } from '../../../pages/desktop/login/context';
import NationalCodeForm from './nationalCodeForm';

const NationalCodeEntry: FC = () => {
   const { setLoginStage, nationalCode, setPhoneNumber } =
      useContext(LoginContext);

   return (
      <div className="national-code-entry">
         <form>
            <span>لطفا کدملی خود را وارد کنید</span>
            <NationalCodeForm />
            <Button
               className="national-code-entry__button"
               type="button"
               onClick={(event) =>
                  handleTemporaryCodeRequest({
                     event,
                     setLoginStage,
                     nationalCode: nationalCode,
                     setPhoneNumber,
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

export default NationalCodeEntry;
