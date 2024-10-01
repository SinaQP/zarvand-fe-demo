export interface TradeCharge {
   'master_id': string,
   'address': string,
   'TradeType': string,
   'is_paid': false
}

export interface RenovationCharge {
   'master_id': string,
   'address': string,
   'certificate_number': string,
   'is_paid': boolean
}

export interface AppProps {
   children?: any;
}
