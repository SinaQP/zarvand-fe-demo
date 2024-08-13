import { FC } from 'react';

const TableHeader: FC = () => (
   <div className="rnv-payed-detail__charges-row rnv-payed-detail__charges-header">
      <span>از سال</span>
      <span>تا سال</span>
      <span>مبلغ(ريال)</span>
      <span>توضیحات</span>
      <span>شماره قبض</span>
      <span>تاریخ پرداخت</span>
   </div>
);

export default TableHeader;
