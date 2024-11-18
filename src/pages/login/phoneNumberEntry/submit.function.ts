import { toast } from 'react-toastify';
import { sendVerificationCode } from '../../../apis/login/send-verification-code';
import { Dispatch, SetStateAction } from 'react';

const formSubmit = async (
   phoneNumber: string,
   nationalCode: string,
   setShowConfirmationForm: Dispatch<SetStateAction<boolean>>,
) => {
   const isValidIranianPhone = /^09\d{9}$/.test(phoneNumber);

   if (!isValidIranianPhone) {
      toast.error('شماره تلفن معتبر نیست.');
      return false;
   }

   const response = await sendVerificationCode({
      national_code: nationalCode,
      mobile_number: phoneNumber,
   });
   console.log(response)
   if (response.status === 200) {
      setShowConfirmationForm(true);
   } else {
      toast.error(response.body.message);
   }
   return true;
};

export default formSubmit;
