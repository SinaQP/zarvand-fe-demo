import { FC } from 'react';
import houseIcon from '/src/assets/images/houseIcon.svg';
import './InfoCardTitle.scss';

const InfoCardTitle: FC<{ title: string }> = ({ title }) => {
   return (
      <div className="infoCardTitleStyleWrapper">
         <img src={houseIcon} alt="house icon" />
         <span>{title}</span>
      </div>
   );
};

export default InfoCardTitle;
