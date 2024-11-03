import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BankPortal = () => {
   const location = useLocation();
   const data = `${location.state}`;
   console.log('>>>', data);
   useEffect(() => {
      console.log('>>>', document.getElementsByTagName('form')[0].submit());
   }, []);

   return <div dangerouslySetInnerHTML={{ __html: data }}></div>;
};

export default BankPortal;
