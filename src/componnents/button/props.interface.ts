export interface buttonProps {
  id?: string;
  className?: string;
  name?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
  style?: Object;
  disabled?: boolean;
  children?: any;
  fullWidth?: boolean;
  color?: 'success' | 'error' | 'warning' | 'info';
  size?: 'small' | 'medium' | 'large';
  variant?: 'contained' | 'outlined';
}
