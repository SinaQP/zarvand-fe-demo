export interface Bill {
   bill_id: number;
   incomecode_code: string;
   incomecode_desc: string;
   penalty: number;
   from_year: number;
   creditor: number;
   to_year: number;
   notice: string;
   bill_code: string;
   city_name: string;
   payment_date: string;
   is_annual_charges: boolean;
   desc: string;
}
