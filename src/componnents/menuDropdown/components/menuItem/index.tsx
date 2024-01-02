import * as React from 'react';
import { MenuItemProps } from './index.interface';
import './scss/index.scss';

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  id,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  return (
    <li
      id={id}
      className="menuItemContainer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {children}
    </li>
  );
};
export default MenuItem;
