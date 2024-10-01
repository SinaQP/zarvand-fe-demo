import React, { FC } from 'react';
import styles from './index.module.scss';
import { AnnualChargeTableProps } from './index.interface';

const AnnualChargeTable: FC<AnnualChargeTableProps> = ({ data, className }) => {
   return (
      <div className={`${styles.tableContainer} ${className}`}>
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
                  <div className={styles.tableCell}>{row.from_year}</div>
                  <div className={styles.tableCell}>{row.to_year}</div>
                  <div className={styles.tableCell}>{row.creditor}</div>
                  <div className={styles.tableCell}>{row.desc}</div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default AnnualChargeTable;
