import { RefObject } from 'react';
import { BillDetail } from '../../../interfaces/models.interface';

export interface RnvCharge {
   id: string;
   certificate_number: string;
   address: string;
   person: Person;
   bill_details: BillDetail[];
}

interface Person {
   name: string;
   mobile_Number: string;
   national_code: string;
}
export interface RnvChargePdfProps {
   componentRef?: RefObject<HTMLDivElement>;
   data: RnvCharge | undefined;
   printBill: PrintBill;
   onlyShow: boolean;
}
export interface PrintBill {
   bill_id: number;
   payment_no: string;
   bill_no: string;
   city: string;
   total_amount_in_words: string;
   total_amount: number;
   annual_charges: number;
   safety_service: number;
   garbage_collection_service: number;
   city_service: number;
   penalty: number;
   max_width: number;
   address: string;
   building_area: number;
   land_area: number;
   reward: number;
   postal_code: string;
   bill_code: string;
}
