import { FC } from 'react';
import './InfoCardHeader.scss';

const InfoCardHeader: FC<{ title: string; nationalCodeIcon: string }> = ({
   title,
   nationalCodeIcon,
}) => {
   return (
      <div className="infoTitleStyleWrapper">
         <span className="title">{title}</span>
         <img className="img" src={nationalCodeIcon} alt="national code icon" />
      </div>
   );
};

export default InfoCardHeader;
