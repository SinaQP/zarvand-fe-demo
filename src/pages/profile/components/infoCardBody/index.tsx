import { FC } from 'react';
import './infoCardBody.scss';

const InfoCardBody: FC<{ title: string }> = ({ title }) => {
   return (
      <div id="infoCardBodyStyleWrapper">
         <span id="title">{title}</span>
      </div>
   );
};

export default InfoCardBody;
