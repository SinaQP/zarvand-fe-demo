export interface User {
   name: string;
   national_code: string;
   mobile_number: string;
   birth_date: string;
}

export interface TradeCharge {
   master_id: string;
   address: string;
   TradeType: string;
   is_paid: false;
   shop_area: number;
   last_bill_info: {
      payment_no: string;
      bill_no: string;
      value_to_pay: number;
   } | null;
   last_bill_details: BillDetail[];
   bills: Bill[];
}

export interface RenovationCharge {
   master_id: string;
   address: string;
   certificate_number: string;
   is_paid: boolean;
   building_area: number;
   land_area: number;
   last_bill_info: {
      payment_no: string;
      bill_no: string;
      value_to_pay: number;
   } | null;
   last_bill_details: BillDetail[];
   bills: Bill[];
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
   last_bill_info: {
      payment_no: string;
      bill_no: string;
      value_to_pay: number;
   };
   bill_details: BillDetail[];
   bills: Bill[];
}
