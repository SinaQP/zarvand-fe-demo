import { FC, useContext, useEffect, useState } from 'react';
import Layout from '../../components/layout';
import styles from './index.module.scss';
import { getUserRenovationCharges } from './getUserRenovationCharges';
import { AppContext } from '../../App.context';
import { RenovationCharge } from '../../App.interface';
import MasterCard from '../../components/masterCard';
import InfoCard from '../../components/infoCard';

const Renovation: FC = () => {
   const { token } = useContext(AppContext);
   const [renovationCharges, setRenovationCharges] = useState<RenovationCharge[]>([]);
   useEffect(() => {
      getUserRenovationCharges(token, setRenovationCharges);
   }, []);
   const segmentLengths = [3, 4, 7, 2, 3];

   // A more concise version to split the string based on lengths
   const splitCertificateNumber = (str: string, lengths: number[]): string[] => {
      let result: string[] = [];
      let startIndex = 0;

      lengths.forEach(length => {
         result.push(str.substr(startIndex, length));
         startIndex += length;
      });

      return result;
   };

   return (
      <Layout headerClassName={styles.header} className={styles.layout}>

         {renovationCharges.map(charge => (
            <MasterCard master={charge} address={charge.address} isPayed={charge.is_paid}
                        key={charge.master_id}>
               <InfoCard title={'شماره شناسنامه ملک'}
                         className={styles['certification-number-section']}
                         isPrimary={charge.is_paid}>
                  {['فرعی', 'ملک', 'بلوک', 'محله', 'منطقه'].map((item, index) => (
                     <span key={index}>{item}</span>
                  ))}
                  {splitCertificateNumber(charge.certificate_number, segmentLengths).map((item, index) => (
                     <span key={index}>{item}</span>
                  ))}
               </InfoCard>
            </MasterCard>))}

      </Layout>
   );
};

export default Renovation;
