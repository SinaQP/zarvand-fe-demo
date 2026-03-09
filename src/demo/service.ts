import { toJalaali } from 'jalaali-js';
import { FetchResult } from '../apis/fetch.interface';
import {
   Bill,
   BillDetail,
   RenovationCharge,
   TradeCharge,
   User,
} from '../interfaces/models.interface';
import { createSeedDemoState, DEMO_OTP_CODE } from './seed';
import {
   clearDemoSession,
   loadDemoSession,
   loadDemoState,
   resetDemoState as storageResetDemoState,
   saveDemoSession,
   saveDemoState,
   updateDemoState,
} from './storage';
import {
   ChargeMasterType,
   DemoChargeRecord,
   DemoCitizenRequest,
   DemoDashboardData,
   DemoNotification,
   DemoSession,
   DemoState,
   DemoTransaction,
   DemoUserProfile,
} from './types';

const pad = (value: number) => String(value).padStart(2, '0');

const nowJalaliDate = () => {
   const date = new Date();
   const { jy, jm, jd } = toJalaali(
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
   );
   return `${jy}/${pad(jm)}/${pad(jd)}`;
};

const nowJalaliDateTime = () => {
   const date = new Date();
   return `${nowJalaliDate()} ${pad(date.getHours())}:${pad(
      date.getMinutes(),
   )}`;
};

const success = (body: any, status = 200): FetchResult => ({
   status,
   body,
   ok: status >= 200 && status < 300,
   redirected: false,
   statusText: 'OK',
   type: 'basic',
});

const fail = (status: number, message: string): FetchResult => ({
   status,
   body: { message },
   ok: false,
   redirected: false,
   statusText: 'Error',
   type: 'basic',
});

const delay = (ms = 450) =>
   new Promise<void>((resolve) => {
      setTimeout(resolve, ms);
   });

const maskMobile = (mobile: string) =>
   `${mobile.slice(0, 4)}****${mobile.slice(8)}`;

const sortByDateDesc = <T extends { created_at?: string; paid_at?: string }>(
   items: T[],
) => {
   return [...items].sort((first, second) => {
      const firstDate = first.created_at || first.paid_at || '';
      const secondDate = second.created_at || second.paid_at || '';
      return secondDate.localeCompare(firstDate);
   });
};

const createBillDetail = (record: DemoChargeRecord): BillDetail => ({
   id: record.id,
   from_year: record.from_year,
   to_year: record.to_year,
   creditor: record.amount - record.penalty,
   income_code_id: record.income_code_id,
   penalty: record.penalty,
   desc: record.description,
   bill_code: record.bill_no,
   bill_id: record.bill_id,
   payment_date: record.paid_at || '',
   type_id: record.type_id,
});

const createBill = (record: DemoChargeRecord): Bill => ({
   bill_id: String(record.bill_id),
   payment_date: record.paid_at || '',
   payment_no: record.payment_no,
   bill_no: record.bill_no,
   from_year: record.from_year,
   to_year: record.to_year,
   creditor: record.amount,
});

const getMasterRecords = (
   state: DemoState,
   masterId: string,
   masterType: ChargeMasterType,
) => {
   const records = state.charges
      .filter(
         (charge) =>
            charge.master_id === masterId && charge.master_type === masterType,
      )
      .sort((first, second) => second.to_year - first.to_year);

   const currentRecord =
      records.find((record) => record.status === 'overdue') ||
      records.find((record) => record.status === 'unpaid');

   const paidRecords = records.filter((record) => record.status === 'paid');
   const latestRecord = currentRecord || paidRecords[0];

   return { records, currentRecord, paidRecords, latestRecord };
};

const createRenovationCharge = (
   state: DemoState,
   masterId: string,
): RenovationCharge | null => {
   const master = state.renovation_masters.find((item) => item.master_id === masterId);
   if (!master) return null;

   const { currentRecord, paidRecords, latestRecord } = getMasterRecords(
      state,
      masterId,
      'renovation',
   );

   return {
      master_id: master.master_id,
      address: master.address,
      certificate_number: master.certificate_number,
      is_paid: !currentRecord,
      building_area: master.building_area,
      land_area: master.land_area,
      last_bill_info: latestRecord
         ? {
              payment_no: latestRecord.payment_no,
              bill_no: latestRecord.bill_no,
              value_to_pay: latestRecord.amount,
              bill_id: latestRecord.bill_id,
           }
         : null,
      last_bill_details: currentRecord ? [createBillDetail(currentRecord)] : [],
      bills: paidRecords.map(createBill),
   };
};

const createTradeCharge = (state: DemoState, masterId: string): TradeCharge | null => {
   const master = state.trade_masters.find((item) => item.master_id === masterId);
   if (!master) return null;

   const { currentRecord, paidRecords, latestRecord } = getMasterRecords(
      state,
      masterId,
      'trade',
   );

   return {
      master_id: master.master_id,
      address: master.address,
      TradeType: master.TradeType,
      is_paid: !currentRecord,
      shop_area: master.shop_area,
      last_bill_info: latestRecord
         ? {
              payment_no: latestRecord.payment_no,
              bill_no: latestRecord.bill_no,
              value_to_pay: latestRecord.amount,
              bill_id: latestRecord.bill_id,
           }
         : null,
      last_bill_details: currentRecord ? [createBillDetail(currentRecord)] : [],
      bills: paidRecords.map(createBill),
   };
};

const isValidSessionToken = (token: string): boolean => {
   if (!token) return false;
   const session = loadDemoSession();
   if (!session) return false;
   return session.token === token || token.startsWith('demo-access-');
};

const ensureSession = (): DemoSession | null => {
   const session = loadDemoSession();
   if (!session) return null;
   return session;
};

const getCurrentYear = (): number =>
   toJalaali(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      new Date().getDate(),
   ).jy;

const toDashboardData = (state: DemoState): DemoDashboardData => {
   const outstandingItems = state.charges.filter(
      (charge) => charge.status === 'unpaid' || charge.status === 'overdue',
   );
   const paidItems = state.charges.filter((charge) => charge.status === 'paid');
   const paidYearPrefix = `${getCurrentYear()}/`;
   const paidAmountPeriod = state.transactions
      .filter((transaction) => transaction.paid_at.startsWith(paidYearPrefix))
      .reduce((total, transaction) => total + transaction.amount, 0);

   return {
      summary: {
         outstanding_amount: outstandingItems.reduce(
            (total, charge) => total + charge.amount,
            0,
         ),
         paid_amount_period: paidAmountPeriod,
         overdue_amount: outstandingItems
            .filter((charge) => charge.status === 'overdue')
            .reduce((total, charge) => total + charge.amount, 0),
         unpaid_count: outstandingItems.filter((charge) => charge.status === 'unpaid')
            .length,
         overdue_count: outstandingItems.filter((charge) => charge.status === 'overdue')
            .length,
         paid_count: paidItems.length,
      },
      outstanding_items: [...outstandingItems].sort((first, second) =>
         first.due_date.localeCompare(second.due_date),
      ),
      recent_transactions: sortByDateDesc(state.transactions).slice(0, 6),
      notifications: sortByDateDesc(state.notifications).slice(0, 6),
      recent_requests: sortByDateDesc(state.requests).slice(0, 5),
   };
};

export const bootstrapDemoState = () => {
   const state = loadDemoState();
   if (!state || !state.version) {
      saveDemoState(createSeedDemoState());
   }
};

export const resetDemoData = () => storageResetDemoState();

export const logoutDemoSession = () => {
   clearDemoSession();
};

export const getDemoProfile = async () => {
   await delay(250);
   return loadDemoState().profile;
};

export const updateDemoProfile = async (
   payload: Partial<DemoUserProfile>,
): Promise<DemoUserProfile> => {
   await delay(350);
   const state = updateDemoState((current) => ({
      ...current,
      profile: {
         ...current.profile,
         ...payload,
      },
   }));

   return state.profile;
};

export const getDashboardDataDemo = async (): Promise<DemoDashboardData> => {
   await delay(350);
   const state = loadDemoState();
   return toDashboardData(state);
};

export const getNotificationsDemo = async (): Promise<DemoNotification[]> => {
   await delay(250);
   return sortByDateDesc(loadDemoState().notifications);
};

export const markNotificationReadDemo = async (
   notificationId: string,
   isRead: boolean,
): Promise<DemoNotification[]> => {
   await delay(150);
   const state = updateDemoState((current) => ({
      ...current,
      notifications: current.notifications.map((notification) =>
         notification.id === notificationId
            ? { ...notification, is_read: isRead }
            : notification,
      ),
   }));

   return sortByDateDesc(state.notifications);
};

export const getCitizenRequestsDemo = async (): Promise<DemoCitizenRequest[]> => {
   await delay(250);
   return sortByDateDesc(loadDemoState().requests);
};

export const createCitizenRequestDemo = async (input: {
   category: string;
   title: string;
   description: string;
}): Promise<DemoCitizenRequest> => {
   await delay(500);
   const currentState = loadDemoState();
   const requestCounter = currentState.counters.request + 1;
   const notificationCounter = currentState.counters.notification + 1;
   const createdAt = nowJalaliDateTime();

   const createdRequest: DemoCitizenRequest = {
      id: `REQ-${requestCounter}`,
      request_no: `درخواست-${getCurrentYear()}-${requestCounter}`,
      category: input.category,
      title: input.title,
      description: input.description,
      status: 'در حال بررسی',
      created_at: createdAt,
      updated_at: createdAt,
      district: currentState.profile.region,
   };

   const notification: DemoNotification = {
      id: `NTF-${notificationCounter}`,
      title: 'ثبت درخواست شهروندی',
      message: `درخواست «${input.title}» با شماره ${createdRequest.request_no} ثبت شد.`,
      created_at: createdAt,
      is_read: false,
      level: 'success',
   };

   updateDemoState((state) => ({
      ...state,
      counters: {
         ...state.counters,
         request: requestCounter,
         notification: notificationCounter,
      },
      requests: [createdRequest, ...state.requests],
      notifications: [notification, ...state.notifications],
   }));

   return createdRequest;
};

export const sendVerificationCodeDemo = async (body: {
   national_code: string;
   mobile_number?: string;
}): Promise<FetchResult> => {
   await delay(500);
   const nationalCode = body.national_code?.trim() || '';
   if (!/^\d{10}$/.test(nationalCode)) {
      return fail(400, 'کد ملی وارد شده معتبر نیست.');
   }

   const state = loadDemoState();
   if (nationalCode !== state.profile.national_code && !body.mobile_number) {
      return fail(422, 'شماره موبایل برای این کد ملی در سامانه ثبت نشده است.');
   }

   if (body.mobile_number && !/^09\d{9}$/.test(body.mobile_number)) {
      return fail(400, 'شماره موبایل معتبر نیست.');
   }

   const mobileNumber = body.mobile_number || state.profile.mobile_number;

   if (body.mobile_number) {
      updateDemoState((current) => ({
         ...current,
         profile: {
            ...current.profile,
            national_code: nationalCode,
            mobile_number: body.mobile_number as string,
         },
      }));
   }

   return success({
      masked_mobile_number: maskMobile(mobileNumber),
      otp_hint: DEMO_OTP_CODE,
      message: 'کد تایید ارسال شد.',
   });
};

export const validateSmsCodeDemo = async (body: {
   national_code: string;
   code: string;
}): Promise<FetchResult> => {
   await delay(650);
   const state = loadDemoState();
   if (body.national_code !== state.profile.national_code) {
      return fail(404, 'کد ملی در سامانه شهرداری کرمان یافت نشد.');
   }

   const verificationCode = body.code.trim();
   if (verificationCode !== DEMO_OTP_CODE) {
      return fail(
         400,
         'کد تایید نامعتبر است. برای نسخه نمایشی از کد 1234 استفاده کنید.',
      );
   }

   const tokenCounter = loadDemoState().counters.token + 1;
   const session: DemoSession = {
      token: `demo-access-${tokenCounter}`,
      refreshToken: `demo-refresh-${tokenCounter}`,
      nationalCode: body.national_code,
      issuedAt: nowJalaliDateTime(),
   };

   updateDemoState((current) => ({
      ...current,
      counters: {
         ...current.counters,
         token: tokenCounter,
      },
   }));

   saveDemoSession(session);
   return success({
      token: session.token,
      refresh_token: session.refreshToken,
      user: state.profile as User,
   });
};

export const refreshUserTokenDemo = async (body: {
   refresh_token: string;
}): Promise<FetchResult> => {
   await delay(250);
   const session = ensureSession();
   if (!session || session.refreshToken !== body.refresh_token) {
      return fail(401, 'نشست کاربری معتبر نیست.');
   }

   const newToken = `${session.token}-ref`;
   const refreshedSession: DemoSession = {
      ...session,
      token: newToken,
      issuedAt: nowJalaliDateTime(),
   };
   saveDemoSession(refreshedSession);

   return success({
      access_token: refreshedSession.token,
   });
};

export const getUserDataDemo = async (token: string): Promise<FetchResult> => {
   await delay(200);
   if (!isValidSessionToken(token)) {
      return fail(401, 'عدم دسترسی');
   }
   return success(loadDemoState().profile as User);
};

export const getRenovationMastersDemo = async (
   token: string,
): Promise<FetchResult> => {
   await delay(450);
   if (!isValidSessionToken(token)) return fail(401, 'عدم دسترسی');

   const state = loadDemoState();
   const charges = state.renovation_masters
      .map((master) => createRenovationCharge(state, master.master_id))
      .filter(Boolean) as RenovationCharge[];
   return success(charges);
};

export const getTradeMastersDemo = async (token: string): Promise<FetchResult> => {
   await delay(450);
   if (!isValidSessionToken(token)) return fail(401, 'عدم دسترسی');

   const state = loadDemoState();
   const charges = state.trade_masters
      .map((master) => createTradeCharge(state, master.master_id))
      .filter(Boolean) as TradeCharge[];
   return success(charges);
};

const getChargeDetailsBody = (
   state: DemoState,
   masterId: string,
   masterType: ChargeMasterType,
) => {
   const charge =
      masterType === 'trade'
         ? createTradeCharge(state, masterId)
         : createRenovationCharge(state, masterId);

   if (!charge) return null;

   const { currentRecord, latestRecord } = getMasterRecords(
      state,
      masterId,
      masterType,
   );
   const reference = currentRecord || latestRecord;

   return {
      last_bill_info: reference
         ? {
              payment_no: reference.payment_no,
              bill_no: reference.bill_no,
              value_to_pay: reference.amount,
              bill_id: reference.bill_id,
           }
         : null,
      last_bill_details: reference ? [createBillDetail(reference)] : [],
      bills: charge.bills,
   };
};

export const getRenovationBillDetailsInfoDemo = async (
   token: string,
   masterId: string,
): Promise<FetchResult> => {
   await delay(250);
   if (!isValidSessionToken(token)) return fail(401, 'عدم دسترسی');
   const state = loadDemoState();
   const body = getChargeDetailsBody(state, masterId, 'renovation');
   if (!body) return fail(404, 'پرونده موردنظر یافت نشد.');
   return success(body);
};

export const getTradeBillDetailsInfoDemo = async (
   token: string,
   masterId: string,
): Promise<FetchResult> => {
   await delay(250);
   if (!isValidSessionToken(token)) return fail(401, 'عدم دسترسی');
   const state = loadDemoState();
   const body = getChargeDetailsBody(state, masterId, 'trade');
   if (!body) return fail(404, 'پرونده موردنظر یافت نشد.');
   return success(body);
};

const createTradePrintBody = (state: DemoState, masterId: string) => {
   const master = state.trade_masters.find((item) => item.master_id === masterId);
   const { currentRecord, latestRecord } = getMasterRecords(state, masterId, 'trade');
   const reference = currentRecord || latestRecord;
   if (!master || !reference) return null;

   const detail = createBillDetail(reference);

   return {
      bill_no: reference.bill_no,
      payment_no: reference.payment_no,
      bill_code: reference.bill_no,
      city: 'کرمان',
      issue_date: nowJalaliDate(),
      total_amount: reference.amount,
      total_amount_in_words: 'مطابق مبلغ مندرج در قبض',
      penalty: reference.penalty,
      exemption_amount: 0,
      trade_type_name: master.TradeType,
      annual_charges: [
         {
            type_desc: reference.category,
            amount: reference.amount,
            type_id: reference.type_id,
         },
      ],
      bill_details: [detail],
   };
};

const createRenovationPrintBody = (state: DemoState, masterId: string) => {
   const master = state.renovation_masters.find((item) => item.master_id === masterId);
   const { currentRecord, latestRecord } = getMasterRecords(
      state,
      masterId,
      'renovation',
   );
   const reference = currentRecord || latestRecord;
   if (!master || !reference) return null;

   const detail = createBillDetail(reference);

   return {
      bill_id: reference.bill_id,
      payment_no: reference.payment_no,
      bill_no: reference.bill_no,
      city: 'کرمان',
      total_amount_in_words: 'مطابق مبلغ مندرج در قبض',
      total_amount: reference.amount,
      annual_charges: reference.amount - reference.penalty,
      safety_service: 0,
      garbage_collection_service:
         reference.category.includes('پسماند') ? reference.amount : 0,
      city_service: reference.category.includes('نوسازی') ? reference.amount : 0,
      penalty: reference.penalty,
      max_width: 12,
      address: master.address,
      building_area: master.building_area,
      land_area: master.land_area,
      reward: 0,
      postal_code: loadDemoState().profile.postal_code,
      bill_code: reference.bill_no,
      bill_details: [detail],
      issue_date: nowJalaliDate(),
   };
};

export const getTradePrintDataDemo = async (
   token: string,
   masterId: string,
): Promise<FetchResult> => {
   await delay(300);
   if (!isValidSessionToken(token)) return fail(401, 'عدم دسترسی');
   const state = loadDemoState();
   const body = createTradePrintBody(state, masterId);
   if (!body) return fail(404, 'اطلاعات چاپ یافت نشد.');
   return success(body);
};

export const getRenovationPrintDataDemo = async (
   token: string,
   masterId: string,
): Promise<FetchResult> => {
   await delay(300);
   if (!isValidSessionToken(token)) return fail(401, 'عدم دسترسی');
   const state = loadDemoState();
   const body = createRenovationPrintBody(state, masterId);
   if (!body) return fail(404, 'اطلاعات چاپ یافت نشد.');
   return success(body);
};

const getMasterType = (
   chargeType: 'Trade' | 'Renovation',
): ChargeMasterType => (chargeType === 'Trade' ? 'trade' : 'renovation');

export const payDemoCharge = async (params: {
   token: string;
   masterId: string;
   chargeType: 'Trade' | 'Renovation';
}) => {
   await delay(800);
   if (!isValidSessionToken(params.token)) {
      return fail(401, 'عدم دسترسی');
   }

   let paymentBody: any = null;

   const nextState = updateDemoState((current) => {
      const masterType = getMasterType(params.chargeType);
      const currentRecord = current.charges.find(
         (charge) =>
            charge.master_id === params.masterId &&
            charge.master_type === masterType &&
            charge.status !== 'paid',
      );

      if (!currentRecord) return current;

      const paidAt = nowJalaliDateTime();
      const trackingCounter = current.counters.tracking + 1;
      const transactionCounter = current.counters.transaction + 1;
      const notificationCounter = current.counters.notification + 1;
      const trackingCode = String(trackingCounter);

      const updatedCharges = current.charges.map((charge) => {
         if (charge.id !== currentRecord.id) return charge;
         return {
            ...charge,
            status: 'paid' as const,
            paid_at: paidAt,
            tracking_code: trackingCode,
            penalty: 0,
         };
      });

      const transaction: DemoTransaction = {
         id: `TX-${pad(transactionCounter)}`,
         bill_id: currentRecord.bill_id,
         title: `پرداخت ${currentRecord.title}`,
         category: currentRecord.category,
         amount: currentRecord.amount,
         paid_at: paidAt,
         tracking_code: trackingCode,
         payment_no: currentRecord.payment_no,
         bill_no: currentRecord.bill_no,
      };

      const notification: DemoNotification = {
         id: `NTF-${notificationCounter}`,
         title: 'پرداخت موفق عوارض',
         message: `پرداخت قبض ${currentRecord.bill_no} با کد رهگیری ${trackingCode} با موفقیت ثبت شد.`,
         created_at: paidAt,
         is_read: false,
         level: 'success',
      };

      paymentBody = {
         status: 1,
         bill_no: currentRecord.bill_no,
         pay_no: currentRecord.payment_no,
         amount: currentRecord.amount,
         time: paidAt,
         trace_no: trackingCode,
      };

      return {
         ...current,
         charges: updatedCharges,
         transactions: [transaction, ...current.transactions],
         notifications: [notification, ...current.notifications],
         counters: {
            ...current.counters,
            tracking: trackingCounter,
            transaction: transactionCounter,
            notification: notificationCounter,
         },
      };
   });

   if (!paymentBody) {
      return fail(404, 'قبض قابل پرداختی برای این پرونده یافت نشد.');
   }

   const tradeCharges = nextState.trade_masters
      .map((master) => createTradeCharge(nextState, master.master_id))
      .filter(Boolean) as TradeCharge[];
   const renovationCharges = nextState.renovation_masters
      .map((master) => createRenovationCharge(nextState, master.master_id))
      .filter(Boolean) as RenovationCharge[];

   return success({
      payment: paymentBody,
      trade_charges: tradeCharges,
      renovation_charges: renovationCharges,
   });
};



