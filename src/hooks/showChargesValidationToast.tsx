import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
const ToastContent: React.FC = () => (
   <div>
      لطفا اطلاعات نمایش داده شده را با دقت بررسی فرمایید. درصورت مشاهده هرگونه
      مغایرت، به قسمت پشتیبانی مراجعه فرمایید.{' '}
      <b>مسئولیت هرگونه مغایرت بر عهده شما خواهد بود.</b>
   </div>
);

const showChargesValidationToast = () => {
   const [hasToastShown, setHasToastShown] = useState(false);

   useEffect(() => {
      if (!hasToastShown) {
         toast.error(<ToastContent />, {
            autoClose: false,
         });
         setHasToastShown(true);
      }
   }, [hasToastShown, setHasToastShown]);
};

export default showChargesValidationToast;
