import * as React from 'react';
import './scss/index.scss';
import { MenurDropdownProps } from './index.interface';
const MenuDropdown = ({ children, id, ClassName }: MenurDropdownProps) => {
  return (
    <ul id={id} className={`menuDropdownWrapper ${ClassName}`}>
      {children}
    </ul>
  );
};
export default MenuDropdown;
