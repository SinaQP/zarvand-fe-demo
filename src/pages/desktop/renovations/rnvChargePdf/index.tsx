import styles from './scss/index.module.scss';
import convertNumberPersian from '../../../../utilities/convertNumberPersian';
import { RnvChargePdfProps } from './index.interface';
import toMoneyFormat from '../../../../utilities/toMoneyFormat';

const RnvChargePdf: React.FC<RnvChargePdfProps> = ({
   componentRef,
   data,
   printBill,
   onlyShow,
}) => {
   let filterList = !onlyShow
      ? data?.bill_details?.filter(
           (item) =>
              item.to_year !== null &&
              item.is_annual_charges &&
              item.creditor !== 0 &&
              (item.payment_date === '' || item.payment_date === null),
        )
      : data?.bill_details?.filter(
           (item) =>
              item.is_annual_charges && data.last_bill_id === item.bill_id,
        );
   return (
      <div style={{ display: onlyShow ? '' : 'none' }}>
         {/* <div
            id="printRenovationInfo"
            className={styles['printRenovationInfo']}
            ref={componentRef}
         >
            <section className={styles['municipality']}>
               <div className={styles['header']}>
                  <p>
                     کدشناسایی :{' '}
                     {convertNumberPersian(data?.id ? data.id?.toString() : '')}
                  </p>
                  <h2>شهرداری {printBill?.city}</h2>
                  <p>
                     تاریخ صدور :{' '}
                     {convertNumberPersian(printBill?.issue_date)
                        .split('-')
                        .reverse()
                        .join('-')}
                  </p>
               </div>
               <div className={styles['header']}>
                  <p>نام اپراتور : {printBill?.created_by_user_full_name}</p>
                  <p style={{ fontWeight: 'bold' }}>
                     عوارض نوسازی(از سال{' '}
                     {convertNumberPersian(
                        filterList?.[0]?.from_year?.toString() || '',
                     )}{' '}
                     تا سال{' '}
                     {convertNumberPersian(
                        filterList?.[
                           filterList.length - 1
                        ]?.to_year?.toString() || '',
                     )}
                     )
                  </p>
                  <p>
                     شماره قبض : {convertNumberPersian(printBill?.bill_code)}
                  </p>
               </div>
               <table className={styles['mainTable']}>
                  <tr>
                     <td colSpan={12}>
                        <div className={styles['header']}>
                           <p>
                              شناسه ملک :{' '}
                              {convertNumberPersian(
                                 data?.certificate_number
                                    ? data.certificate_number?.toString()
                                    : '',
                              )}
                           </p>
                           <p>
                              آدرس:{' '}
                              {convertNumberPersian(
                                 data?.address ? data.address?.toString() : '',
                              )}
                           </p>
                           <p>
                              کدپستی :{' '}
                              {convertNumberPersian(
                                 data?.postal_code ? data.postal_code : '',
                              )}
                           </p>
                        </div>
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={12}>
                        <div className={styles['header']}>
                           <p>
                              مالک :{' '}
                              {data?.person
                                 ? data.person?.first_name +
                                   ' ' +
                                   data.person?.last_name
                                 : ''}
                           </p>
                           <p>
                              شماره ملی :{' '}
                              {convertNumberPersian(
                                 data?.person ? data.person?.national_code : '',
                              )}
                           </p>
                           <p>
                              متراژ زمین :{' '}
                              {convertNumberPersian(
                                 printBill
                                    ? printBill?.land_area?.toString()
                                    : '',
                              )}
                           </p>
                           <p>
                              متراژ ساختمان :{' '}
                              {convertNumberPersian(
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
                                    {convertNumberPersian(
                                       toMoneyFormat(
                                          printBill?.annual_charges?.toString(),
                                       ),
                                    )}
                                 </td>
                              </tr>
                              <tr>
                                 <td>خدمات ایمنی</td>
                                 <td>
                                    {convertNumberPersian(
                                       toMoneyFormat(
                                          printBill?.safety_service?.toString(),
                                       ),
                                    )}
                                 </td>
                              </tr>
                              <tr>
                                 <td>خدمات زباله</td>
                                 <td>
                                    {convertNumberPersian(
                                       toMoneyFormat(
                                          printBill?.garbage_collection_service?.toString(),
                                       ),
                                    )}
                                 </td>
                              </tr>
                              <tr>
                                 <td>خدمات شهری</td>
                                 <td>
                                    {convertNumberPersian(
                                       toMoneyFormat(
                                          printBill?.city_service?.toString(),
                                       ),
                                    )}
                                 </td>
                              </tr>
                              <tr>
                                 <td>جریمه دیرکرد</td>
                                 <td>
                                    {convertNumberPersian(
                                       toMoneyFormat(
                                          printBill?.penalty?.toString(),
                                       ),
                                    )}
                                 </td>
                              </tr>
                              <tr>
                                 <td>جایزه خوش حسابی</td>
                                 <td>
                                    {convertNumberPersian(
                                       toMoneyFormat(
                                          printBill?.reward?.toString(),
                                       ),
                                    )}
                                 </td>
                              </tr>
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
                                    //if (item.to_year === null) return null;
                                    return (
                                       <tr key={item.id}>
                                          <td>
                                             {convertNumberPersian(
                                                item.to_year?.toString(),
                                             )}
                                          </td>
                                          <td>
                                             {convertNumberPersian(
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
                                 {filterList
                                    ?.slice(6, 12)
                                    .map(
                                       (item: {
                                          payment_date: any;
                                          to_year: { toString: () => string };
                                          creditor: { toString: () => string };
                                          penalty: { toString: () => string };
                                       }) => {
                                          //if (item.to_year === null) return null;
                                          return (
                                             <tr>
                                                <td>
                                                   {convertNumberPersian(
                                                      item.to_year?.toString(),
                                                   )}
                                                </td>
                                                <td>
                                                   {convertNumberPersian(
                                                      toMoneyFormat(
                                                         item.creditor?.toString(),
                                                      ),
                                                   )}
                                                </td>
                                             </tr>
                                          );
                                       },
                                    )}
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
                                 {filterList
                                    ?.slice(12, 18)
                                    .map(
                                       (item: {
                                          payment_date: any;
                                          to_year: { toString: () => string };
                                          creditor: { toString: () => string };
                                          penalty: { toString: () => string };
                                       }) => {
                                          //if (item.to_year === null) return null;
                                          return (
                                             <tr>
                                                <td>
                                                   {convertNumberPersian(
                                                      item.to_year?.toString(),
                                                   )}
                                                </td>
                                                <td>
                                                   {convertNumberPersian(
                                                      toMoneyFormat(
                                                         item.creditor?.toString(),
                                                      ),
                                                   )}
                                                </td>
                                             </tr>
                                          );
                                       },
                                    )}
                              </tbody>
                           </table>
                        )}
                        {filterList && filterList?.length > 18 && (
                           <table className={styles['innerTableLeft']}>
                              <thead>
                                 <tr>
                                    <th>سال</th>
                                    <th>عوارض</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {filterList
                                    ?.slice(18, 24)
                                    .map(
                                       (item: {
                                          payment_date: any;
                                          to_year: { toString: () => string };
                                          creditor: { toString: () => string };
                                          penalty: { toString: () => string };
                                       }) => {
                                          //if (item.to_year === null) return null;
                                          return (
                                             <tr>
                                                <td>
                                                   {convertNumberPersian(
                                                      item.to_year?.toString(),
                                                   )}
                                                </td>
                                                <td>
                                                   {convertNumberPersian(
                                                      toMoneyFormat(
                                                         item.creditor?.toString(),
                                                      ),
                                                   )}
                                                </td>
                                             </tr>
                                          );
                                       },
                                    )}
                              </tbody>
                           </table>
                        )}
                        {filterList && filterList?.length > 24 && (
                           <table className={styles['innerTableLeft']}>
                              <thead>
                                 <tr>
                                    <th>سال</th>
                                    <th>عوارض</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {filterList
                                    ?.slice(24, 30)
                                    .map(
                                       (item: {
                                          payment_date: any;
                                          to_year: { toString: () => string };
                                          creditor: { toString: () => string };
                                          penalty: { toString: () => string };
                                       }) => {
                                          //if (item.to_year === null) return null;
                                          return (
                                             <tr>
                                                <td>
                                                   {convertNumberPersian(
                                                      item.to_year?.toString(),
                                                   )}
                                                </td>
                                                <td>
                                                   {convertNumberPersian(
                                                      toMoneyFormat(
                                                         item.creditor?.toString(),
                                                      ),
                                                   )}
                                                </td>
                                             </tr>
                                          );
                                       },
                                    )}
                              </tbody>
                           </table>
                        )}
                        {filterList && filterList?.length > 30 && (
                           <table className={styles['innerTableLeft']}>
                              <thead>
                                 <tr>
                                    <th>سال</th>
                                    <th>عوارض</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {filterList
                                    ?.slice(30, 36)
                                    .map(
                                       (item: {
                                          payment_date: any;
                                          to_year: { toString: () => string };
                                          creditor: { toString: () => string };
                                          penalty: { toString: () => string };
                                       }) => {
                                          //if (item.to_year === null) return null;
                                          return (
                                             <tr>
                                                <td>
                                                   {convertNumberPersian(
                                                      item.to_year?.toString(),
                                                   )}
                                                </td>
                                                <td>
                                                   {convertNumberPersian(
                                                      toMoneyFormat(
                                                         item.creditor?.toString(),
                                                      ),
                                                   )}
                                                </td>
                                             </tr>
                                          );
                                       },
                                    )}
                              </tbody>
                           </table>
                        )}
                     </td>
                  </tr>
                  <tr>
                     <td colSpan={12} className={styles['barcodeStyle']}>
                        {`مبلغ : ${convertNumberPersian(
                           toMoneyFormat(printBill?.total_amount?.toString()),
                        )} ریال - ${printBill?.total_amount_in_words} ریال`}
                     </td>
                  </tr>
               </table>
               <div className={styles['header']}>
                  {printBill?.bill_no && printBill?.payment_no ? (
                     <>
                        <p>
                           شناسه قبض :{' '}
                           {convertNumberPersian(printBill?.bill_no)}
                        </p>
                        <p>
                           شناسه پرداخت :{' '}
                           {convertNumberPersian(printBill?.payment_no)}
                        </p>
                     </>
                  ) : null}
                  <p>
                     {convertNumberPersian(
                        printBill?.income_unit_bill_subtitle,
                     )}
                  </p>
               </div>
            </section>
         </div> */}
      </div>
   );
};
export default RnvChargePdf;
