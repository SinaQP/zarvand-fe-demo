import { FC } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import Props from './props.interface';
import './scss/selectBox.style.scss';
import { Popper } from '@mui/material';

const SelectBox: FC<Props> = ({
  id,
  label,
  fullWidth,
  options,
  noOptionsText = 'No Options',
  multiple = false,
  onChange,
  className,
  standAloneTitle,
  placeholder,
  disabled,
  defaultValue,
  value,
}) => {
  return (
    <Autocomplete
      id={id}
      disabled={disabled}
      multiple={multiple}
      className={className}
      options={options}
      getOptionLabel={(option) => option.title}
      fullWidth={fullWidth}
      onChange={onChange}
      defaultValue={defaultValue}
      value={value}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          className={`selectBox__input ${
            standAloneTitle && 'selectBox__input--stand-alone-title'
          }`}
          InputLabelProps={{ shrink: true }}
          placeholder={placeholder}
        />
      )}
      noOptionsText={noOptionsText}
      PopperComponent={(props) => (
        <Popper {...props} className="selectBox__popper" />
      )}
      renderOption={(props, option) => (
        <li {...props} className={` ${props.className} selectBox__list-item`}>
          {option.img ? (
            <img
              src={option.img}
              alt={option.title}
              className="selectBox__user-image"
            />
          ) : null}
          {option.title}
        </li>
      )}
    />
  );
};

export default SelectBox;
