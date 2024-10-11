import { FC } from 'react';
import './InfoCardDesktop.scss';

const InfoCardBodyDesktop: FC<{ title: string; data: string | undefined }> = ({
   title,
   data,
}) => {
   return (
      <div id="InfoCardDesktopStyleWrapper">
         <span>{title}</span>
         <span>{data}</span>
      </div>
   );
};

export default InfoCardBodyDesktop;
