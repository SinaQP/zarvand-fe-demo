export interface Bill {
   bill_no: string;
   charges_by_year: [];
   payment_no: string;
   value_to_pay: number;
   city_service_charges: number;
   safety_service_charges: number;
   garbage_collection_charges:number
   total_penalty:number
}
