import React, { FC } from 'react';
import styles from './index.module.scss';
import { AnnualChargeTableProps } from './index.interface';
import toMoneyFormat from '../../utilities/toMoneyFormat';
import Loading from '../loading/loading';

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
            {data.length ? (
               data.map((row, index) => (
                  <div
                     key={index}
                     className={`${styles.tableRow} ${
                        index % 2 === 0 ? styles.evenRow : styles.oddRow
                     }`}
                  >
                     <div className={styles.tableCell}>{row.from_year}</div>
                     <div className={styles.tableCell}>{row.to_year}</div>
                     <div className={styles.tableCell}>
                        {toMoneyFormat((row.creditor + row.penalty).toString())}
                     </div>
                     <div className={styles.tableCell}>{row.desc}</div>
                  </div>
               ))
            ) : (
               <Loading className={styles.tableLoading}/>
            )}
         </div>
      </div>
   );
};

export default AnnualChargeTable;
