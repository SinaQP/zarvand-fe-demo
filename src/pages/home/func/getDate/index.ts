import { toJalaali } from 'jalaali-js';

export default function getPersianDate() {
   const currentDate = new Date();
   const { jd, jm, jy } = toJalaali(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      currentDate.getDate(),
   );

   const persianMonths = [
      'فروردین',
      'اردیبهشت',
      'خرداد',
      'تیر',
      'مرداد',
      'شهریور',
      'مهر',
      'آبان',
      'آذر',
      'دی',
      'بهمن',
      'اسفند',
   ];

   // Map of Persian day names
   const persianWeekdays = [
      'یکشنبه',
      'دوشنبه',
      'سه‌شنبه',
      'چهارشنبه',
      'پنج‌شنبه',
      'جمعه',
      'شنبه',
   ];
   const persianWeekday = persianWeekdays[currentDate.getDay()];
   const formattedDate = `${persianWeekday} ${jd} ${
      persianMonths[jm - 1]
   } ماه ${jy}`;

   return formattedDate;
}
