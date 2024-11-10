import { FC, ReactNode } from 'react';
import InfoCard from '../infoCard';
import { RenovationCharge } from '../../interfaces/models.interface';
import styles from './index.module.scss';
import { useUserContext } from '../../App.context';

const CertificationNumberCard: FC<{
   charge: RenovationCharge;
   children?: ReactNode;
   className?: string;
}> = ({ charge, children, className }) => {
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

      result = result.reverse();
      return result;
   };
   const segmentLengths = [3, 2, 7, 4, 3];
   const { showPaymentHistory } = useUserContext();
   return (
      <InfoCard
         title={'شماره شناسنامه ملک'}
         containerClassName={`${styles['certification-number-section-wrapper']} ${className}`}
         className={styles['info-card__body']}
         isPrimary={showPaymentHistory ? true : charge.is_paid}
      >
         <div className={styles['certification-number-section']}>
            {['فرعی', 'ملک', 'بلوک', 'محله', 'منطقه'].map((item, index) => (
               <span key={index}>{item}</span>
            ))}
            {splitCertificateNumber(
               charge.certificate_number,
               segmentLengths,
            ).map((item, index) => (
               <span key={index}>{item}</span>
            ))}
         </div>
         {children}
      </InfoCard>
   );
};

export default CertificationNumberCard;
