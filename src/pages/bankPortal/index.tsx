import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './index.module.scss';

const BankPortal = () => {
   const location = useLocation();
   const data = `${location.state}`;
   console.log('>>>', data);
   useEffect(() => {
      console.log('>>>', document.getElementsByTagName('form')[0].submit());
   }, []);

   return (
      <div
         id={styles['bank-portal']}
         dangerouslySetInnerHTML={{ __html: data }}
      ></div>
   );
};

export default BankPortal;
