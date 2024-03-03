export interface Bill {
   bill_no: string;
   bill_details: BillDetailProps[];
   last_bill_details: BillDetailProps[];

   payment_no: string;
   value_to_pay: number;
}

export interface BillDetailProps {
   bill_code: number;
   creditor: number;
   desc: string;
   from_year: number;
   id: number;
   income_code_id: number;
   penalty: number;
   to_year: number;
}
