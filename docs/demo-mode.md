# Demo Mode Guide

## What Was Added

برای اجرای ارائه‌ای بدون بک‌اند، یک لایه Demo Mode پایدار اضافه شد که با `localStorage` کار می‌کند و جریان‌های اصلی را واقعی‌نما می‌سازد:

- احراز هویت نمایشی (ارسال/تایید OTP)
- بازیابی نشست کاربر بعد از refresh
- داشبورد با داده‌های واقعی‌نما شهرداری کرمان
- قبوض، بدهی‌ها، پرداخت و صدور کد رهگیری
- درخواست‌های شهروندی (ثبت + پیگیری)
- اعلان‌ها با وضعیت خوانده‌شده/خوانده‌نشده
- پروفایل قابل ویرایش با ذخیره محلی

## Demo Architecture

### Flag

- فایل: `src/config/env.ts`
- متغیر: `VITE_DEMO_MODE`

### Data Layer

- `src/demo/seed.ts`: داده اولیه پایدار و deterministic
- `src/demo/types.ts`: مدل‌های تایپ‌سیف دمو
- `src/demo/storage.ts`: مدیریت seed/load/save/reset
- `src/demo/service.ts`: سرویس‌های دمو (auth, dashboard, bills, requests, notifications, profile)

### API Wiring

APIهای موجود در `src/apis/*` با branch روی `IS_DEMO_MODE` به سرویس دمو متصل شدند تا ساختار فعلی پروژه حفظ شود.

## Seed Data Scope (Kerman Municipality)

- پروفایل شهروند: «محمدرضا احمدی»
- داده ملکی/خودرو/شناسه‌ها
- حداقل:
  - 5 قبض در انتظار پرداخت
  - 8 قبض پرداخت‌شده
  - 3 مورد سررسید گذشته
- اعلان‌های شهرداری کرمان
- درخواست‌های شهروندی با وضعیت‌های مختلف
- تراکنش‌های اخیر با کد رهگیری

## Reset Demo Data

دو روش:

1. از صفحه پروفایل، دکمه `بازنشانی داده نمایشی`
2. حذف کلیدهای زیر از `localStorage`:
   - `zarvand-demo-state`
   - `zarvand-demo-session`

## Key User Flows (Now Functional Without Backend)

1. Login
   - ورود با کد ملی
   - ارسال OTP و تایید با `1234`
   - ورود و انتقال به داشبورد

2. Bills & Payment
   - مشاهده پرونده‌های نوسازی/کسب‌وپیشه
   - پرداخت قبض
   - تولید کد رهگیری و نمایش وضعیت پرداخت
   - به‌روزرسانی همزمان قبض‌ها، تراکنش‌ها و داشبورد

3. Requests
   - ثبت درخواست جدید در پشتیبانی
   - نمایش فوری در تاریخچه
   - فیلتر بر اساس وضعیت

4. Notifications
   - مشاهده اعلان‌ها
   - تغییر وضعیت خوانده‌شده/خوانده‌نشده

5. Profile
   - ویرایش اطلاعات شهروندی
   - ذخیره و persistence بعد از refresh
   - خروج امن (پاک‌سازی نشست)

## Returning to Real Backend Later

- `VITE_DEMO_MODE=false` کنید.
- branchهای `IS_DEMO_MODE` در APIها به مسیر واقعی fetch برمی‌گردند.
- معماری موازی ایجاد نشده؛ لایه دمو به‌صورت قابل حذف/جایگزینی اضافه شده است.
