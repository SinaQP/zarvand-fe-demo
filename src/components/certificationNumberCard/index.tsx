import { FC } from 'react';
import InfoCard from '../infoCard';
import { RenovationCharge } from '../../interfaces/models.interface';
import styles from './index.module.scss';

const CertificationNumberCard: FC<{ charge: RenovationCharge }> = ({
   charge,
}) => {
   const splitCertificateNumber = (
      str: string,
      lengths: number[],
   ): string[] => {
      let result: string[] = [];
      let startIndex = 0;

      lengths.forEach((length) => {
         result.push(str.substr(startIndex, length));
         startIndex += length;
      });

      return result;
   };
   const segmentLengths = [3, 4, 7, 2, 3];

   return (
      <InfoCard
         title={'شماره شناسنامه ملک'}
         className={styles['certification-number-section']}
         containerClassName={styles['certification-number-section-wrapper']}
         isPrimary={charge.is_paid}
      >
         {['فرعی', 'ملک', 'بلوک', 'محله', 'منطقه'].map((item, index) => (
            <span key={index}>{item}</span>
         ))}
         {splitCertificateNumber(charge.certificate_number, segmentLengths).map(
            (item, index) => (
               <span key={index}>{item}</span>
            ),
         )}
      </InfoCard>
   );
};

export default CertificationNumberCard;
