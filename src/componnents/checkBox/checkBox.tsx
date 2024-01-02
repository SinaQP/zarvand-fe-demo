import Checkbox from '@mui/material/Checkbox';
import { FC } from 'react';
import props from './props.interface';
import { FormControlLabel, FormGroup } from '@mui/material';

const CheckBox: FC<props> = ({
  disabled,
  size,
  color,
  className,
  data,
  formId,
  isRow,
  onChange,
}) => {
  return (
    <FormGroup row={isRow} id={formId} data-testid="checkbox">
      {data?.map((element) => {
        return (
          <FormControlLabel
            key={element.id}
            className={className}
            control={
              <Checkbox
                id={element.id}
                defaultChecked={element.defaultChecked}
                disabled={disabled}
                checked={element.checked}
                size={size}
                color={color}
                onChange={(e) => {
                  onChange && onChange(e.currentTarget);
                }}
              />
            }
            label={element.label}
          />
        );
      })}
    </FormGroup>
  );
};
export default CheckBox;
