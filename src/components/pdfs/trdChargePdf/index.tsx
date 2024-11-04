import styles from './scss/index.module.scss';
import { PrintProps } from './index.interface';
import Barcode from 'react-barcode';
import convertNumberToPersian from '../../../utilities/convertNumberToPersian';
import calcBarcode from '../../../utilities/calcBarcode';
import toMoneyFormat from '../../../utilities/toMoneyFormat';
import { FC } from 'react';

const TrdChargePdf: FC<PrintProps> = ({
   componentRef,
   data,
   printBill,
   onlyShow,
}) => {
   let filterList = !onlyShow
      ? data?.bill_details.filter(
           (item) => item.to_year !== null && item.creditor !== 0,
        )
      : [];
   return (
      <div style={{ display: onlyShow ? '' : 'none' }}>
         <div
            id="printGuildJobsInfo"
            className={styles['printGuildJobsInfo']}
            ref={componentRef}
         >
            <section className={styles['municipality']}>
               <div className={styles['title-date-container']}>
                  <div className={styles['top-header-container']}>
                     <div className={styles['top-header']}>
                        <h2
                           className={`${styles['minWidth']} ${styles['centeredText']}`}
                        >
                           شهرداری {printBill?.city}
                        </h2>
                     </div>
                     <div className={styles['top-header']}>
                        <p
                           className={`${styles['minWidth']} ${styles['centeredText']} ${styles['bold']}`}
                        >
                           عوارض کسب و پیشه
                        </p>
                     </div>
                  </div>
                  <div style={{ position: 'absolute', left: '0' }}>
                     تاریخ صدور {printBill?.issue_date.replaceAll('-', '/')}
                  </div>
               </div>
               <table className={styles['mainTable']}>
                  <tr>
                     <td colSpan={12}>
                        <div className={styles['header']}>
                           <p>مالک : {data?.person ? data.person.name : ''}</p>
                           {data?.person && (
                              <p>
                                 شماره ملی :{' '}
                                 {convertNumberToPersian(
                                    data?.person
                                       ? data.person.national_code
                                       : '',
                                 )}
                              </p>
                           )}
                           <p>
                              شماره قبض :{' '}
                              {convertNumberToPersian(
                                 printBill ? printBill.bill_code : '',
                              )}
                           </p>
                        </div>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={12}>
                        <div className={styles['header']}>
                           <p>نوع کسب : {printBill?.trade_type_name}</p>
                           <p>نشانی : {data?.place_address}</p>
                        </div>
                     </td>
                  </tr>

                  <tr>
                     <td colSpan={12} className={styles['customeColumn']}>
                        <table className={styles['innerTableRight']}>
                           <thead>
                              <tr>
                                 <td>شرح درآمد</td>
                                 <td>مبلغ کل(ریال)</td>
                              </tr>
                           </thead>
                           <tbody>
                              {printBill?.annual_charges?.map((item) => {
                                 return (
                                    <tr key={item.type_desc}>
                                       <td>{item.type_desc}</td>
                                       <td>
                                          {convertNumberToPersian(
                                             toMoneyFormat(
                                                item.amount.toString(),
                                             ),
                                          )}
                                       </td>
                                    </tr>
                                 );
                              })}
                           </tbody>
                        </table>
                        {filterList && filterList?.length && (
                           <table className={styles['innerTableLeft']}>
                              <thead>
                                 <tr>
                                    <th>سال</th>
                                    <th>عوارض</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {filterList?.slice(0, 6).map((item: any) => {
                                    return (
                                       <tr key={item.id}>
                                          <td>
                                             {convertNumberToPersian(
                                                item.to_year?.toString(),
                                             )}
                                          </td>
                                          <td>
                                             {convertNumberToPersian(
                                                toMoneyFormat(
                                                   item.creditor?.toString(),
                                                ),
                                             )}
                                          </td>
                                       </tr>
                                    );
                                 })}
                              </tbody>
                           </table>
                        )}
                        {filterList && filterList?.length > 6 && (
                           <table className={styles['innerTableLeft']}>
                              <thead>
                                 <tr>
                                    <th>سال</th>
                                    <th>عوارض</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {filterList?.slice(6, 12).map((item: any) => {
                                    return (
                                       <tr key={item.id}>
                                          <td>
                                             {convertNumberToPersian(
                                                item.to_year?.toString(),
                                             )}
                                          </td>
                                          <td>
                                             {convertNumberToPersian(
                                                toMoneyFormat(
                                                   item.creditor?.toString(),
                                                ),
                                             )}
                                          </td>
                                       </tr>
                                    );
                                 })}
                              </tbody>
                           </table>
                        )}
                        {filterList && filterList?.length > 12 && (
                           <table className={styles['innerTableLeft']}>
                              <thead>
                                 <tr>
                                    <th>سال</th>
                                    <th>عوارض</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {filterList?.slice(12, 18).map((item: any) => {
                                    return (
                                       <tr key={item.id}>
                                          <td>
                                             {convertNumberToPersian(
                                                item.to_year?.toString(),
                                             )}
                                          </td>
                                          <td>
                                             {convertNumberToPersian(
                                                toMoneyFormat(
                                                   item.creditor?.toString(),
                                                ),
                                             )}
                                          </td>
                                       </tr>
                                    );
                                 })}
                              </tbody>
                           </table>
                        )}
                     </td>
                  </tr>

                  <tr>
                     <td colSpan={12} className={styles['textLeft']}>
                        {`مبلغ :
                  ${convertNumberToPersian(
                     toMoneyFormat(
                        printBill ? printBill?.total_amount?.toString() : '',
                     ),
                  )} ریال`}
                        - {printBill?.total_amount_in_words} ریال
                     </td>
                  </tr>
                  {printBill?.bill_no && printBill?.payment_no ? (
                     <tr>
                        <td colSpan={12}>
                           <div className={styles['header']}>
                              <p>
                                 شناسه قبض :{' '}
                                 {convertNumberToPersian(printBill?.bill_no)}
                              </p>
                              <p>
                                 شناسه پرداخت :{' '}
                                 {convertNumberToPersian(printBill?.payment_no)}
                              </p>
                              <Barcode
                                 value={calcBarcode(
                                    printBill?.bill_no,
                                    printBill?.payment_no,
                                 )}
                                 width={0.75}
                                 height={40}
                                 displayValue={false}
                                 margin={5}
                              />
                           </div>
                        </td>
                     </tr>
                  ) : null}
               </table>
               <h3 style={{ textAlign: 'center', marginTop: '1rem' }}>
                  مهلت پرداخت این قبض، از زمان صدور یک ماه می باشد
               </h3>
            </section>
         </div>
      </div>
   );
};
export default TrdChargePdf;
