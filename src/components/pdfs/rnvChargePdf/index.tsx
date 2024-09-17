import styles from './scss/index.module.scss';
import convertNumberToPersian from '../../../utilities/convertNumberToPersian';
import { RnvChargePdfProps } from './index.interface';
import toMoneyFormat from '../../../utilities/toMoneyFormat';
import Barcode from 'react-barcode';
import calcBarcode from '../../../utilities/calcBarcode';

const RnvChargePdf: React.FC<RnvChargePdfProps> = ({
   componentRef,
   data,
   printBill,
   onlyShow,
}) => {
   return (
      <div style={{ display: onlyShow ? '' : 'none' }}>
         <div
            id="printRenovationInfo"
            className={styles['printRenovationInfo']}
            ref={componentRef}
         >
            <section className={styles['municipality']}>
               <div className={styles['top-header']}>
                  <h2>شهرداری {printBill?.city}</h2>
               </div>
               <div className={styles['top-header']}>
                  <p style={{ fontWeight: 'bold' }}>
                     عوارض نوسازی(از سال{' '}
                     {convertNumberToPersian(
                        data?.bill_details[0][0]?.toString() || '',
                     )}{' '}
                     تا سال{' '}
                     {convertNumberToPersian(
                        data?.bill_details[
                           data?.bill_details.length - 1
                        ][0]?.toString() || '',
                     )}
                     )
                  </p>
               </div>
               <table className={styles['mainTable']}>
                  <tr>
                     <td colSpan={12}>
                        <div className={styles['header']}>
                           <p>
                              شناسه ملک :{' '}
                              {convertNumberToPersian(
                                 data?.certificate_number
                                    ? data.certificate_number?.toString()
                                    : '',
                              )}
                           </p>
                           <p>
                              آدرس:{' '}
                              {convertNumberToPersian(
                                 data?.address ? data.address?.toString() : '',
                              )}
                           </p>
                           <p>
                              کدپستی :{' '}
                              {convertNumberToPersian(
                                 data?.postal_code ? data.postal_code : '',
                              )}
                           </p>
                        </div>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={12}>
                        <div className={styles['header']}>
                           <p>مالک : {data?.person ? data?.person.name : ''}</p>
                           <p>
                              شماره ملی :{' '}
                              {convertNumberToPersian(
                                 data?.person ? data.person?.national_code : '',
                              )}
                           </p>
                           <p>
                              متراژ زمین :{' '}
                              {convertNumberToPersian(
                                 printBill
                                    ? printBill?.land_area?.toString()
                                    : '',
                              )}
                           </p>
                           <p>
                              متراژ ساختمان :{' '}
                              {convertNumberToPersian(
                                 printBill
                                    ? printBill?.building_area?.toString()
                                    : '',
                              )}
                           </p>
                        </div>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={12} className={styles['customeColumn']}>
                        <table className={styles['innerTableRight']}>
                           <thead>
                              <tr>
                                 <td>بابت</td>
                                 <td>مبلغ(ریال)</td>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <td>عوارض سالیانه</td>
                                 <td>
                                    {convertNumberToPersian(
                                       toMoneyFormat(
                                          printBill?.annual_charges?.toString(),
                                       ),
                                    )}
                                 </td>
                              </tr>
                              <tr>
                                 <td>خدمات ایمنی</td>
                                 <td>
                                    {convertNumberToPersian(
                                       toMoneyFormat(
                                          printBill?.safety_service?.toString(),
                                       ),
                                    )}
                                 </td>
                              </tr>
                              <tr>
                                 <td>خدمات زباله</td>
                                 <td>
                                    {convertNumberToPersian(
                                       toMoneyFormat(
                                          printBill?.garbage_collection_service?.toString(),
                                       ),
                                    )}
                                 </td>
                              </tr>
                              <tr>
                                 <td>خدمات شهری</td>
                                 <td>
                                    {convertNumberToPersian(
                                       toMoneyFormat(
                                          printBill?.city_service?.toString(),
                                       ),
                                    )}
                                 </td>
                              </tr>
                              <tr>
                                 <td>جریمه دیرکرد</td>
                                 <td>
                                    {convertNumberToPersian(
                                       toMoneyFormat(
                                          printBill?.penalty?.toString(),
                                       ),
                                    )}
                                 </td>
                              </tr>
                              <tr>
                                 <td>جایزه خوش حسابی</td>
                                 <td>
                                    {convertNumberToPersian(
                                       toMoneyFormat(
                                          printBill?.reward?.toString(),
                                       ),
                                    )}
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        {data && data.bill_details?.length && (
                           <table className={styles['innerTableLeft']}>
                              <thead>
                                 <tr>
                                    <th>سال</th>
                                    <th>عوارض</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {data?.bill_details
                                    .slice(0, 6)
                                    .map((item: any) => {
                                       //if (item.to_year === null) return null;
                                       return (
                                          <tr>
                                             <td>
                                                {convertNumberToPersian(
                                                   item[0]?.toString(),
                                                )}
                                             </td>
                                             <td>
                                                {convertNumberToPersian(
                                                   toMoneyFormat(
                                                      item[1]?.toString(),
                                                   ),
                                                )}
                                             </td>
                                          </tr>
                                       );
                                    })}
                              </tbody>
                           </table>
                        )}
                        {data && data.bill_details?.length > 6 && (
                           <table className={styles['innerTableLeft']}>
                              <thead>
                                 <tr>
                                    <th>سال</th>
                                    <th>عوارض</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {data.bill_details
                                    ?.slice(6, 12)
                                    .map((item) => {
                                       //if (item.to_year === null) return null;
                                       return (
                                          <tr>
                                             <td>
                                                {convertNumberToPersian(
                                                   item[0]?.toString(),
                                                )}
                                             </td>
                                             <td>
                                                {convertNumberToPersian(
                                                   toMoneyFormat(
                                                      item[1]?.toString(),
                                                   ),
                                                )}
                                             </td>
                                          </tr>
                                       );
                                    })}
                              </tbody>
                           </table>
                        )}
                        {data && data.bill_details?.length > 12 && (
                           <table className={styles['innerTableLeft']}>
                              <thead>
                                 <tr>
                                    <th>سال</th>
                                    <th>عوارض</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {data.bill_details
                                    ?.slice(12, 18)
                                    .map((item) => {
                                       //if (item.to_year === null) return null;
                                       return (
                                          <tr>
                                             <td>
                                                {convertNumberToPersian(
                                                   item[0]?.toString(),
                                                )}
                                             </td>
                                             <td>
                                                {convertNumberToPersian(
                                                   toMoneyFormat(
                                                      item[1]?.toString(),
                                                   ),
                                                )}
                                             </td>
                                          </tr>
                                       );
                                    })}
                              </tbody>
                           </table>
                        )}
                        {data && data.bill_details?.length > 18 && (
                           <table className={styles['innerTableLeft']}>
                              <thead>
                                 <tr>
                                    <th>سال</th>
                                    <th>عوارض</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {data.bill_details
                                    ?.slice(18, 24)
                                    .map((item) => {
                                       //if (item.to_year === null) return null;
                                       return (
                                          <tr>
                                             <td>
                                                {convertNumberToPersian(
                                                   item[0]?.toString(),
                                                )}
                                             </td>
                                             <td>
                                                {convertNumberToPersian(
                                                   toMoneyFormat(
                                                      item[1]?.toString(),
                                                   ),
                                                )}
                                             </td>
                                          </tr>
                                       );
                                    })}
                              </tbody>
                           </table>
                        )}
                        {data && data.bill_details?.length > 24 && (
                           <table className={styles['innerTableLeft']}>
                              <thead>
                                 <tr>
                                    <th>سال</th>
                                    <th>عوارض</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {data.bill_details
                                    ?.slice(24, 30)
                                    .map((item) => {
                                       //if (item.to_year === null) return null;
                                       return (
                                          <tr>
                                             <td>
                                                {convertNumberToPersian(
                                                   item[0]?.toString(),
                                                )}
                                             </td>
                                             <td>
                                                {convertNumberToPersian(
                                                   toMoneyFormat(
                                                      item[1]?.toString(),
                                                   ),
                                                )}
                                             </td>
                                          </tr>
                                       );
                                    })}
                              </tbody>
                           </table>
                        )}
                        {data && data.bill_details?.length > 30 && (
                           <table className={styles['innerTableLeft']}>
                              <thead>
                                 <tr>
                                    <th>سال</th>
                                    <th>عوارض</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {data.bill_details
                                    ?.slice(30, 36)
                                    .map((item) => {
                                       //if (item.to_year === null) return null;
                                       return (
                                          <tr>
                                             <td>
                                                {convertNumberToPersian(
                                                   item[0]?.toString(),
                                                )}
                                             </td>
                                             <td>
                                                {convertNumberToPersian(
                                                   toMoneyFormat(
                                                      item[1]?.toString(),
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
                     <td colSpan={12} className={styles['barcodeStyle']}>
                        {`مبلغ : ${convertNumberToPersian(
                           toMoneyFormat(printBill?.total_amount?.toString()),
                        )} ریال - ${printBill?.total_amount_in_words} ریال`}
                        <p>
                           شماره قبض :{' '}
                           {convertNumberToPersian(printBill?.bill_code)}                           
                        </p>
                        {printBill?.bill_no && printBill?.payment_no ? (
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
                        ) : null}
                     </td>
                  </tr>
               </table>
               <div className={styles['header']}>
                  {printBill?.bill_no && printBill?.payment_no ? (
                     <>
                        <p>
                           شناسه قبض :{' '}
                           {convertNumberToPersian(printBill?.bill_no)}
                        </p>
                        <p>
                           شناسه پرداخت :{' '}
                           {convertNumberToPersian(printBill?.payment_no)}
                        </p>
                     </>
                  ) : null}
                  <p>
                     {convertNumberToPersian(
                        printBill?.income_unit_bill_subtitle,
                     )}
                  </p>
               </div>
            </section>
         </div>
      </div>
   );
};
export default RnvChargePdf;
