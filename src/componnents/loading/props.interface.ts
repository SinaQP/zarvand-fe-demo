import { ReactNode } from 'react';

export interface PropInterface {
  loading: boolean;
  loadingClassName?: string;
  contentClassName?: string;
  circleClassName?: string;
  massageClass?: string;
  id?: string;
  massage?: string;
  children?: ReactNode;
}
