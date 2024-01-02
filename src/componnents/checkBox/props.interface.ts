interface props {
  disabled?: boolean;
  size?: "small" | "medium";
  formId?: string;
  color?: "secondary" | "success" | "default";
  className?: string;
  isRow?: boolean;
  data?: {
    id: string;
    label?: any;
    checked?: boolean;
    defaultChecked?: boolean;
  }[];
  onChange?: (event: any) => void;
}

export default props;
