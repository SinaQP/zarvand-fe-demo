import { User } from '../interfaces/models.interface';

export type ChargeMasterType = 'renovation' | 'trade';
export type ChargeStatus = 'paid' | 'unpaid' | 'overdue';
export type NotificationLevel = 'info' | 'warning' | 'success';

export interface DemoUserProfile extends User {
   city: string;
   region: string;
   address: string;
   citizen_id: string;
   property_id: string;
   vehicle_plate: string;
   email: string;
   postal_code: string;
}

export interface DemoSession {
   token: string;
   refreshToken: string;
   nationalCode: string;
   issuedAt: string;
}

export interface DemoRenovationMaster {
   master_id: string;
   address: string;
   certificate_number: string;
   building_area: number;
   land_area: number;
}

export interface DemoTradeMaster {
   master_id: string;
   address: string;
   TradeType: string;
   shop_area: number;
}

export interface DemoChargeRecord {
   id: string;
   master_id: string;
   master_type: ChargeMasterType;
   title: string;
   category: string;
   status: ChargeStatus;
   amount: number;
   bill_no: string;
   payment_no: string;
   bill_id: number;
   from_year: number;
   to_year: number;
   due_date: string;
   paid_at?: string;
   tracking_code?: string;
   description: string;
   type_id: number;
   income_code_id: number;
   penalty: number;
}

export interface DemoTransaction {
   id: string;
   bill_id: number;
   title: string;
   category: string;
   amount: number;
   paid_at: string;
   tracking_code: string;
   payment_no: string;
   bill_no: string;
}

export interface DemoNotification {
   id: string;
   title: string;
   message: string;
   created_at: string;
   is_read: boolean;
   level: NotificationLevel;
}

export interface DemoCitizenRequest {
   id: string;
   request_no: string;
   title: string;
   category: string;
   description: string;
   status: string;
   created_at: string;
   updated_at: string;
   district: string;
}

export interface DemoCounters {
   tracking: number;
   request: number;
   transaction: number;
   notification: number;
   token: number;
}

export interface DemoState {
   version: number;
   profile: DemoUserProfile;
   renovation_masters: DemoRenovationMaster[];
   trade_masters: DemoTradeMaster[];
   charges: DemoChargeRecord[];
   transactions: DemoTransaction[];
   notifications: DemoNotification[];
   requests: DemoCitizenRequest[];
   counters: DemoCounters;
}

export interface DemoDashboardSummary {
   outstanding_amount: number;
   paid_amount_period: number;
   overdue_amount: number;
   unpaid_count: number;
   overdue_count: number;
   paid_count: number;
}

export interface DemoDashboardData {
   summary: DemoDashboardSummary;
   outstanding_items: DemoChargeRecord[];
   recent_transactions: DemoTransaction[];
   notifications: DemoNotification[];
   recent_requests: DemoCitizenRequest[];
}
