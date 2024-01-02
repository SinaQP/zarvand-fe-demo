interface Props {
  id?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  label: string;
  noOptionsText?: string;
  options: { title: string; value: any; img?: string }[];
  multiple?: boolean;
  onChange?: (event: any, option: any) => void;
  className?: string;
  standAloneTitle?: boolean;
  placeholder?: string;
  defaultValue?: { title: string; value: any; img?: string };
  value?: { title: string; value: any; img?: string };
}

export default Props;
