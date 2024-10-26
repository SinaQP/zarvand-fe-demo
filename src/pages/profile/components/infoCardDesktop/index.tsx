import { FC, ReactNode } from 'react';
import CopyIcon from '../../../../components/copyIcon';
import './InfoCard.scss';

const InfoCardDesktop: FC<{ children?: ReactNode; data?: string }> = ({
   children,
   data,
}) => {
   return (
      <div id="infoCardStyleWrapper">
         <div id="dataSection">{children}</div>
         <div id="copySection">
            <CopyIcon
               color="white"
               width={'4rem'}
               height={'4rem'}
               data={data}
            />
         </div>
      </div>
   );
};

export default InfoCardDesktop;
