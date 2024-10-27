import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface BackArrowProps
   extends DetailedHTMLProps<
      HtmlHTMLAttributes<HTMLDivElement>,
      HTMLDivElement
   > {
   pageTitle?: string;
   status: 'paid' | 'pending';
}
