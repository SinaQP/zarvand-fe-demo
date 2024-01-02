import { FC, useState } from 'react';
import TextField from '@mui/material/TextField';
import Props from './props.interface';
import only_number_function from '../../utilities/onlyNumber';
import inputStyle from './sx/inputStyle';
import './scss/input.scss';
import { InputPersianNumber } from '../../utilities/inputPersianNumber';
import inputMaxLengthLimiter from '../../utilities/inputMaxLengthLimiter';
import { ReactComponent as SearchIcon } from '../../assets/images/searchIcon.svg';

const Input: FC<Props> = ({
  margin,
  id,
  error,
  label,
  autoFocus,
  onlyNumber,
  required,
  sx,
  size,
  autoComplete,
  fullWidth,
  name,
  className,
  value,
  onChange,
  onBlur,
  placeholder,
  type,
  disabled,
  maxLength,
  multiline = false,
  searchIcon,
  onFocus,
}) => {
  const [inputValue, setInputValue] = useState('');
  return (
    // <div>
    <TextField
      disabled={disabled}
      margin={margin}
      required={required}
      fullWidth={fullWidth}
      id={id}
      label={label}
      name={name}
      autoComplete={autoComplete}
      type={type}
      autoFocus={autoFocus}
      size={size}
      InputLabelProps={{ shrink: true }}
      error={error}
      onInput={onlyNumber ? only_number_function : undefined}
      sx={sx ? { ...sx, ...inputStyle } : { ...inputStyle }}
      className={`input ${className}`}
      value={value}
      onChange={(event) => {
        setInputValue(event.target.value);
        !multiline && type !== 'password' && InputPersianNumber(event);
        maxLength && inputMaxLengthLimiter(event, maxLength);
        onChange && onChange(event);
      }}
      onBlur={onBlur}
      onFocus={onFocus}
      placeholder={placeholder}
      multiline={multiline}
      InputProps={{
        endAdornment:
          searchIcon && searchIcon.visibility ? (
            <span
              className={`input__searchIcon  ${
                inputValue ? '' : 'input__searchIcon--disable'
              }`}
            >
              {value}
              <SearchIcon
                onClick={inputValue ? searchIcon.onClick : undefined}
              />
            </span>
          ) : null,
      }}
    />
    // </div>
  );
};

export default Input;
