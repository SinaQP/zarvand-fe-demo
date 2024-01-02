import { KindOfColumnProps } from '../index.interface';

export interface SelectHeaderProps {
  element: any;
  newData: any;
  setNewData: React.Dispatch<any>;
  kindOfColumn: KindOfColumnProps[] | undefined;
  data: any;
  headerTitels:
    | {
        key: string;
        value: string;
        disabled?: boolean | undefined;
      }[]
    | undefined;
  allFieldEditData?: any;
  isFromBody?: boolean;
  index: number;
  idName: string | undefined;
  setAllFieldEditData: React.Dispatch<any> | undefined;
}

export interface OptionSelectBoxProps {
  [key: string]: any;
  id: number;
  value: string;
}
