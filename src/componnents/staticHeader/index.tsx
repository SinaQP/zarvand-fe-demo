import * as React from 'react';
import { sataticHeaderProps } from './props.staticHeader';
import './scss/index.scss';

const StaticHeader: React.FC<sataticHeaderProps> = (
  props: sataticHeaderProps,
) => {
  return (
    <div className="staticHeader">
      {props.img && (
        <img className="searchLogo" src={props.img} alt="page icon" />
      )}
      <p className="searchTitle">{props.title}</p>
    </div>
  );
};
export default StaticHeader;
