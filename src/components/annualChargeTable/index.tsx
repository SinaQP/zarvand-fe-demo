import React, { FC } from 'react';
import styles from './index.module.scss';
import { AnnualChargeTableProps } from './index.interface';

const AnnualChargeTable: FC<AnnualChargeTableProps> = ({ data }) => {
   return (
      <div className={styles.tableContainer}>
         <div className={styles.tableHeader}>
            <div className={styles.tableCell}>از سال</div>
            <div className={styles.tableCell}>تا سال</div>
            <div className={styles.tableCell}>مبلغ (ریال)</div>
            <div className={styles.tableCell}>توضیحات</div>
         </div>
         <div className={styles.tableBody}>
            {data.map((row, index) => (
               <div
                  key={index}
                  className={`${styles.tableRow} ${index % 2 === 0 ? styles.evenRow : styles.oddRow}`}
               >
                  <div className={styles.tableCell}>{row.fromYear}</div>
                  <div className={styles.tableCell}>{row.toYear}</div>
                  <div className={styles.tableCell}>{row.amount}</div>
                  <div className={styles.tableCell}>{row.description}</div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default AnnualChargeTable;
