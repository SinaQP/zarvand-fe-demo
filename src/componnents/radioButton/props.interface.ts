interface props {
  disabled?: boolean;
  formId?: string;
  size?: "small" | "medium";
  color?: "secondary" | "success" | "default";
  onChange?: (event: any) => void;
  radioGroupClassName?: string;
  formControlClassName?: string;
  data: {
    id?: string;
    label?: string;
    value: string;
    disable?: boolean;
    checked?: boolean;
  }[];
  isRow?: boolean;
  formLabel?: string;
  setData: React.Dispatch<
    React.SetStateAction<
      {
        id?: string;
        label?: string;
        value: string;
        disable?: boolean;
        checked?: boolean;
      }[]
    >
  >;
}
export default props;
