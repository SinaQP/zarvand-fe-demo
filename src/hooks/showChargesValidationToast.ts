import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const showChargesValidationToast = () => {
   const [hasToastShown, setHasToastShown] = useState(false);

   useEffect(() => {
      if (!hasToastShown) {
         toast.error(
            'لطفا اطلاعات نمایش داده شده را با دقت برسی فرمایید. درصورت مشاهده هرگونه مغایرت، به قسمت پشتیبانی مراجعه فرمایید. مسئولیت هرگونه مغایرت بر عهده شما خواهد بود.',
            { autoClose: false },
         );
         setHasToastShown(true);
      }
   }, [hasToastShown, setHasToastShown]);
};

export default showChargesValidationToast;
