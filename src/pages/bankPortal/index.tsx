import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './index.module.scss';

const BankPortal = () => {
   const location = useLocation();
   const data = `${location.state}`;
   useEffect(() => {
      const form = document.getElementsByTagName('form')[0];
      form && form.submit();
   }, []);

   return (
      <>
         {data && (
            <div
               id={styles['bank-portal']}
               dangerouslySetInnerHTML={{ __html: data }}
            ></div>
         )}
      </>
   );
};

export default BankPortal;
