export interface TableRow {
   fromYear: string;
   toYear: string;
   amount: string;
   description: string;
}

export interface AnnualChargeTableProps {
   data: TableRow[];
}