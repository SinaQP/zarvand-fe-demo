# Zarvand FE Demo

اپلیکیشن شهروندی شهرداری (React + TypeScript + Vite) با حالت نمایشی کامل برای ارائه بدون بک‌اند.

## Run

```bash
npm install
npm run start
```

## Demo Login

- کد ملی پیش‌فرض: `0084575941`
- کد تایید نمایشی (OTP): `1234`
- حالت نمایشی به‌صورت پیش‌فرض در توسعه فعال است (`VITE_DEMO_MODE=true`).

## Environment

- `VITE_DEMO_MODE=true`: همه جریان‌ها با داده جعلی و local persistence اجرا می‌شوند.
- `VITE_DEMO_MODE=false`: ساختار تماس با API واقعی حفظ شده است.

جزئیات کامل در فایل زیر:
- [`docs/demo-mode.md`](./docs/demo-mode.md)
