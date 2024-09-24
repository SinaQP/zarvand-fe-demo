import { FC } from 'react';
import styles from './index.module.scss';
import locationPinIcon from '../../../assets/images/location-pin.svg';
import shareIcon from '../../../assets/images/share.svg';
import payIcon from '../../../assets/images/pay.svg';
import downloadIcon from '../../../assets/images/download.svg';
import detailIcon from '../../../assets/images/detail.svg';
import { NewButton as Button } from '../../../components/button';
import { Props } from './index.interface';

const Card: FC<Props> = ({ isPayed }) => {
   return (
      <div className={`${styles.card} ${isPayed && styles['is-payed']}`}>
         <div className={styles['address-section']}>
            <img src={locationPinIcon} alt="location-pin" />
            <span>خیابان مصلی _کوچه 22_ پلاک 4</span>
         </div>

         <div className={styles['certification-number-section']}>
            <span className={styles['certification-number-title']}>
               شماره شناسنامه ملک
            </span>
            <div className={styles['certification-number']}>
               <span>فرعی</span>
               <span>ملک</span>
               <span>بلوک</span>
               <span>محله</span>
               <span>منطقه</span>

               <span>000</span>
               <span>0046</span>
               <span>0000201</span>
               <span>04</span>
               <span>000</span>
            </div>
         </div>

         <div className={styles.buttons}>
            <Button className={styles.button}>
               <span>اشتراک گزاری</span>
               <img src={shareIcon} alt="Share" />
            </Button>
            {isPayed ? (
               <Button className={styles.button}>
                  <span>دانلود</span>
                  <img src={downloadIcon} alt="Download" />
               </Button>
            ) : (
               <Button className={styles.button}>
                  <span>پرداخت</span>
                  <img src={payIcon} alt="Pay" />
               </Button>
            )}
            <Button className={styles.button}>
               <span>جزییات</span>
               <img src={detailIcon} alt="Detail" />
            </Button>
         </div>

         <div className={styles.badge}>
            {isPayed ? 'پرداخت شده' : 'پرداخت نشده'}
         </div>

         {/* <div className={styles.table}>
            <table>
               <thead>
                  <tr>
                     <th>توضیحات</th>
                     <th>مبلغ (ریال)</th>
                     <th>تا سال</th>
                     <th>از سال</th>
                     <th>از سال</th>
                     <th>از سال</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>عوارض سالیانه</td>
                     <td>۲۶,۲۰۵,۰۰۰</td>
                     <td>۱۳۶۰</td>
                     <td>۱۳۶۰</td>
                     <td>۱۳۶۰</td>
                     <td>۱۳۶۰</td>
                  </tr>
                  <tr>
                     <td>عوارض سالیانه</td>
                     <td>۲۶,۲۰۵,۰۰۰</td>
                     <td>۱۳۶۰</td>
                     <td>۱۳۶۰</td>
                     <td>۱۳۶۰</td>
                     <td>۱۳۶۰</td>
                  </tr>
                  <tr>
                     <td>عوارض سالیانه</td>
                     <td>۲۶,۲۰۵,۰۰۰</td>
                     <td>۱۳۶۰</td>
                     <td>۱۳۶۰</td>
                     <td>۱۳۶۰</td>
                     <td>۱۳۶۰</td>
                  </tr>
                  <tr>
                     <td>عوارض سالیانه</td>
                     <td>۲۶,۲۰۵,۰۰۰</td>
                     <td>۱۳۶۰</td>
                     <td>۱۳۶۰</td>
                     <td>۱۳۶۰</td>
                     <td>۱۳۶۰</td>
                  </tr>
                  <tr>
                     <td>عوارض سالیانه</td>
                     <td>۲۶,۲۰۵,۰۰۰</td>
                     <td>۱۳۶۰</td>
                     <td>۱۳۶۰</td>
                     <td>۱۳۶۰</td>
                     <td>۱۳۶۰</td>
                  </tr>
                  <tr>
                     <td>عوارض سالیانه</td>
                     <td>۲۶,۲۰۵,۰۰۰</td>
                     <td>۱۳۶۰</td>
                     <td>۱۳۶۰</td>
                     <td>۱۳۶۰</td>
                     <td>۱۳۶۰</td>
                  </tr>
               </tbody>
            </table>
         </div> */}
      </div>
   );
};

export default Card;
