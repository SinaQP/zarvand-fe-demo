import { Dispatch, SetStateAction, MouseEvent } from 'react';
import LoginStage from '../../../../pages/desktop/login/loginStageEnum';
import Swal from 'sweetalert2';

interface Props {
      event: MouseEvent<HTMLButtonElement>;
      setLoginStage: Dispatch<SetStateAction<LoginStage>>;
      phoneNumber: string;
}
const handleTemporaryCodeRequest = ({
      event,
      setLoginStage,
      phoneNumber,
}: Props) => {
      let isFormValid = true;
      if (phoneNumber.length !== 11) {
            const Toast = Swal.mixin({
                  toast: true,
                  width: '60rem',
                  position: 'bottom',
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                  },
            });
            Toast.fire({
                  icon: 'error',
                  title: 'شماره تماس خود را به درستی وارد کنید.',
            });
            isFormValid = false;
      }
      if (isFormValid) setLoginStage(LoginStage.ConfirmationPage);
};

export default handleTemporaryCodeRequest;
