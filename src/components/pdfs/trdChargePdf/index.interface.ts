import { RefObject } from 'react';
export interface GuildJobsDataModel {
   count: number;
   next: string;
   previous: string;
   results: GuildJobsResultModel;
}
export interface GuildJobsResultModel {
   person: PersonModel;
   bill_details: BuildDetailsModel[];
   place_address: string;
}

export interface OrganizationsModel {
   id: number;
   name: string;
   economic_code: string;
   address: string;
   phone_number: string;
}

export interface PersonModel {
   name: string;
   mobile_Number: string;
   national_code: string;
}

export interface DetailModel {
   id: number;
   from_year: number;
   to_year: number;
   shop_area: number;
   trade_regional_grade_id: number;
   trade_location_id: number;
   bin_type_id: number;
   num_of_bins: number;
   warehouse_area: number;
   is_agent: boolean;
   is_representative: boolean;
   number_of_doors: number;
   balcony_area: number;
}
export interface BuildDetailsModel {
   from_year: number;
   to_year: number;
   bill_id: number;
   creditor: number;
   payment_date: string;
}

export interface CloseDatesModel {
   id?: number;
   is_closed_from: string;
   is_closed_to: string;
   is_deleted: boolean;
   master_id: string;
}

export interface PrintProps {
   componentRef?: RefObject<HTMLDivElement>;
   data: GuildJobsResultModel | undefined;
   printBill: PrintBill | null;
   onlyShow: boolean;
}
export interface PrintBill {
   annual_charges: {
      type_desc: string;
      amount: number;
      type_id: number;
   }[];
   bill_code: string;
   bill_no: string;
   city: string;
   exemption_amount: 0;
   penalty: number;
   payment_no: string;
   total_amount: number;
   total_amount_in_words: string;
   trade_type_name?: string;
}
