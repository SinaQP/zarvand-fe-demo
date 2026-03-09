import { Dispatch, SetStateAction } from 'react';
import { sendVerificationCode } from '../../../../apis/login/send-verification-code';
import { toast } from 'react-toastify';
import { EntryType } from '../../index.interface';

const handleSubmit = async (
   setShowConfirmationForm: Dispatch<SetStateAction<boolean>>,
   nationalCodeArray: string[],
   setSelectedEntry: Dispatch<SetStateAction<EntryType>>,
   setPhoneNumber?: Dispatch<SetStateAction<string>>,
) => {
   const nationalCode: string = nationalCodeArray.join('');
   const nationalCodeIsValid = nationalCode.length === 10;

   if (!nationalCodeIsValid) {
      toast.error('کد ملی خود را وارد نمایید.');
      return false;
   }

   const response = await sendVerificationCode({ national_code: nationalCode });
   const responseStatus = response.status;
   const responseBody = response.body;

   if (responseStatus === 200) {
      const personPhoneNumber = responseBody.masked_mobile_number;
      setPhoneNumber && setPhoneNumber(personPhoneNumber);
      setShowConfirmationForm(true);
      toast.success('کد تایید ارسال شد. در نسخه نمایشی کد 1234 معتبر است.');
      return true;
   }

   if (responseStatus === 422) {
      setSelectedEntry(EntryType.INVALID_PHONE_NUMBER);
      return false;
   }

   if (responseStatus === 404) {
      const message = responseBody.message;
      toast.error(
         `${message}\nلطفا با شماره پشتیبانی ${
            import.meta.env.VITE_APP_SUPPORT_NUMBER
         } تماس حاصل فرمایید.`,
      );
      return false;
   }

   toast.error(responseBody.message || 'خطا در ارسال کد تایید.');
   return false;
};

export default handleSubmit;
