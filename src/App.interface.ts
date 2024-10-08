export interface TradeCharge {
   master_id: string;
   address: string;
   TradeType: string;
   is_paid: false;
}

export interface RenovationCharge {
   master_id: string;
   address: string;
   certificate_number: string;
   is_paid: boolean;
}

export interface BillDetail {
   id: string;
   from_year: number;
   to_year: number;
   creditor: number;
   income_code_id: number;
   penalty: number;
   desc: string;
   bill_code: string | null;
   bill_id: number;
   payment_date: string;
}
export interface Bill {
   bill_id: string;
   payment_date: string;
   payment_no: string;
   bill_no: string;
   from_year: number;
   to_year: number;
   creditor: number;
}
export interface BillInfo {
   bill_no: string;
   payment_no: string;
   value_to_pay: number;
   bill_details: BillDetail[];
   bills: Bill[];
}

export interface AppProps {
   children?: any;
}
