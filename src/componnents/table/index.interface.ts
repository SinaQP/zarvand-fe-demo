export interface TableProps {
  children?: any;
  classname?: string;
  style?: object;
  widths?: { key: string; value: string }[];
  kindOfColumn?: KindOfColumnProps[];
  headerTitels?: { key: string; value: string; disabled?: boolean }[];
  bodyValue?: any[];
  hasCreateButton?: boolean;
  canDelete?: boolean;
  canEdit?: boolean;
  setData?: React.Dispatch<any>;
  data?: any;
  externalNewClick?: boolean;
  skipKey?: string[];
  setOpenModal?: React.Dispatch<React.SetStateAction<any>>;
  requairField?: { persianName: string; englishName: string }[];
  allFieldEditable?: boolean;
  allFieldEditData?: any;
  setAllFieldEditData?: React.Dispatch<any>;
  idName?: string;
  setCreateButtonClicked?: React.Dispatch<boolean>;
}

export interface KindOfColumnProps {
  key: string;
  value: 'boolean' | 'text' | 'select' | 'row' | 'number';
  selectOption?: {
    [key: string]: any;
    id: number;
    value: string;
  }[];
  relation?: { name: string; valueKey: string }[];
  minValue?: number | string;
  maxValue?: number | string;
}
