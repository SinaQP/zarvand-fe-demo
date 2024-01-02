import { ReactNode } from 'react';

export interface LayoutProps {
  header?: ReactNode;
  rightSideBar?: ReactNode;
  leftSideBar?: ReactNode;
  children?: any;
  className?: string;
  staticHeader?: ReactNode;
}
