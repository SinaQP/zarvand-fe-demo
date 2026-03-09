import { toast } from 'react-toastify';

const TOAST_ID = 'charges-validation-toast';

const showChargesValidationToast = () => {
   if (toast.isActive(TOAST_ID)) return;

   toast.error(
      <div>
         لطفا اطلاعات نمایش داده شده را با دقت بررسی فرمایید. درصورت مشاهده هرگونه
         مغایرت، به قسمت پشتیبانی مراجعه فرمایید.{' '}
         <b>مسئولیت هرگونه مغایرت بر عهده شما خواهد بود.</b>
      </div>,
      {
         autoClose: false,
         toastId: TOAST_ID,
      },
   );
};

export default showChargesValidationToast;
