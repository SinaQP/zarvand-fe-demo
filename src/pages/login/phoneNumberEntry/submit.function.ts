import { toast } from 'react-toastify';
import { sendVerificationCode } from '../../../apis/login/send-verification-code';
import { Dispatch, SetStateAction } from 'react';

const formSubmit = async (
   phoneNumber: string,
   nationalCode: string,
   setShowConfirmationForm: Dispatch<SetStateAction<boolean>>,
   setMaskedPhoneNumber: Dispatch<SetStateAction<string>>,
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

   if (response.status === 200) {
      const responseBody = response.body;
      const maskedPhoneNumber = responseBody.masked_mobile_number;
      setMaskedPhoneNumber(maskedPhoneNumber);
      setShowConfirmationForm(true);
      toast.success('کد تایید ارسال شد. در نسخه نمایشی کد 1234 معتبر است.');
      return true;
   }

   toast.error(response.body.message || 'خطا در ثبت شماره تماس.');
   return false;
};

export default formSubmit;
