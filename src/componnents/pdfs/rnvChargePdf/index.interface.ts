import { RefObject } from 'react';

export interface RnvCharge {
   id: string;
   last_bill_id: number;
   certificate_number: string;
   address: string;
   postal_code: string;
   plate_number: number;
   person: Person;
   notice: string;
   is_deleted: boolean;
   first_year_of_calculation: number;
   debt: number;
   last_year_of_payment: string;
   taking_possession_date: string;
   subdivision_date: string;
   exemption_percentage: number;
   penalty_percentage: number;
   special_services_cost: number;
   physical_state_id: PhysicalState;
   usage_type_id: UsageType;
   bill_details: BuildDetails[];
}
interface PhysicalState {
  desc: string;
  id: number;
}
interface BuildDetails {
  incomecode_code: string;
  incomecode_desc: string;
  penalty: number;
  from_year: number;
  creditor: number;
  to_year: number;
  notice: string;
  bill_code: number;
  city_name: string;
  payment_date: string;
  bill_id: number;
  is_annual_charges: boolean;
}
interface UsageType {
  desc: string;
  id: number;
  is_service_calculate: boolean;
}
interface Person {
  name: string;
  mobile_Number: string;
  national_code: string;
}
export interface RnvChargePdfProps {
   componentRef?: RefObject<HTMLDivElement>;
   data: RnvCharge | undefined;
   printBill: BillPrintProps;
   onlyShow: boolean;
}
export interface BillPrintProps {
   account_number: string;
   bank_bill_subtitle: string;
   bank_name: string;
   bill_code: string;
   bill_no: string;
   created_by_user_full_name: string;
   dual_bill: boolean;
   income_unit_bill_subtitle: string;
   payment_no: string;
   issue_date: string;
   garbage_collection_service: number;
   city_service: number;
   annual_charges: number;
   penalty: number;
   safety_service: number;
   total_amount: number;
   total_amount_in_words: string;
   city: string;
   building_area: number;
   land_area: number;
   reward: number;
}
