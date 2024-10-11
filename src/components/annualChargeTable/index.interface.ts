import { BillDetail } from '../../app.interface';

export interface TableRow {
   from_year: string;
   to_year: string;
   creditor: string;
   desc: string;
}

export interface AnnualChargeTableProps {
   data: BillDetail[];
   className?: string;
}
