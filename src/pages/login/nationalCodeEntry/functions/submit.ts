import { Dispatch, SetStateAction } from 'react';
import { sendVerificationCode } from '../../../../apis/login/send-verification-code';

const handleSubmit = async (
   setShowConfirmationForm: Dispatch<SetStateAction<boolean>>,
   nationalCodeArray: string[],
   setPhoneNumber?: Dispatch<SetStateAction<string>>,
) => {
   const nationalCode: string = nationalCodeArray.join('');
   const nationalCodeIsValid = nationalCode.length === 10;
   if (!nationalCodeIsValid) {
      return false;
   }
   const response = await sendVerificationCode({ national_code: nationalCode });
   const responseStatus = response.status;
   if (responseStatus === 200) {
      const responseBody = response.body;
      const personPhoneNumber = responseBody.masked_mobile_number;
      setPhoneNumber && setPhoneNumber(personPhoneNumber);
      setShowConfirmationForm(true);
   }
};

export default handleSubmit;
