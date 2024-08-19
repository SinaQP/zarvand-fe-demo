import { FC } from 'react';
import { RenovationBillDetail } from '../../../../../App.context';
import { separateByThree } from '../../../../../utilities/separatetByThree';

interface Props {
   charge: RenovationBillDetail;
}

const TableRow: FC<Props> = ({ charge }) => (
   <div className="rnv-payed-detail__charges-row">
      <span>{charge.from_year}</span>
      <span>{charge.to_year}</span>
      <span>
         {separateByThree(
            charge.penalty > 0 ? charge.penalty : charge.creditor,
         )}
      </span>
      <span>
         {charge.penalty > 0 ? 'جریمه دیرکرد' : charge.incomecode_desc}
      </span>
      <span>{charge.bill_code}</span>
      <span>{charge.payment_date}</span>
   </div>
);

export default TableRow;
