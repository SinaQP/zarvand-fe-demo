import { FC } from 'react';
import props from './props.interface';
import Radio from '@mui/material/Radio';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
} from '@mui/material';

const RadioButtons: FC<props> = ({
  formId,
  disabled,
  size,
  color,
  radioGroupClassName,
  onChange,
  data,
  isRow,
  formLabel,
  formControlClassName,
  setData,
}) => {
  return (
    <FormControl className={formControlClassName} disabled={disabled}>
      {formLabel && (
        <FormLabel id="demo-row-radio-buttons-group-label">
          {formLabel}
        </FormLabel>
      )}
      <RadioGroup
        id={formId}
        row={isRow}
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={(e) => {
          let tempData = [...data];
          tempData = [
            ...tempData.map((value) =>
              value.checked
                ? { ...value, checked: false }
                : value.value === e.currentTarget.value
                ? { ...value, checked: true }
                : value,
            ),
          ];
          setData([...tempData]);
          onChange && onChange(e.currentTarget);
        }}
        className={radioGroupClassName}
      >
        {data?.map((element) => {
          return (
            <FormControlLabel
              key={element.value}
              value={element.value}
              control={
                <Radio
                  color={color}
                  checked={element.checked}
                  size={size}
                  id={element.id}
                  key={Math.random()}
                />
              }
              label={element.label}
              disabled={element.disable}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtons;
