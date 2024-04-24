import Slider from './slider';
import { FC, useContext } from 'react';
import handleTemporaryCodeRequest from './functions/handleTemporaryCodeRequest ';
import NationalCodeForm from './nationalCodeForm';
import { LoginContext } from '../context';
import './index.scss';
import Button from '../../../../componnents/button';
import "./index.scss";

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
               onClick={(event: any) =>
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
