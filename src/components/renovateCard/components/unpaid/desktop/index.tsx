import { FC } from 'react';
import AnnualChargeTable from '../../../../annualChargeTable';
import InfoCard from '../../../../infoCard';
import InfoRow from '../../../../infoRow';
import DataInput from '../../dataInput';
import InfoCardTitle from '../../infoCardTitle';
import './unpaidRenovateDesktop.scss';
import locMarkerIcon from '/src/assets/images/location-pin.svg';
import { RenovateCardProps } from '../../../interface';
import Button from '../../../../button';

const UnPaidDesktopRenovateCard: FC<{ theme: RenovateCardProps['theme'] }> = ({
   theme,
}) => {
   return (
      <div className="unpaidRenovateCardStyleWrapper">
         <div className="address">
            <img
               src={locMarkerIcon}
               alt="location marker"
               style={{ width: '2rem', height: '2.5rem' }}
            />
            <span className="text">خیابان مصلی _کوچه 22_ پلاک 4</span>
         </div>

         <div className="mainContent">
            <InfoCard title={<InfoCardTitle title="شماره شناسنامه مالک" />}>
               <div className="propertyDetails">
                  <div></div>

                  <div className="content">
                     <DataInput
                        title={'مبلغ کل (ریال)'}
                        data={0}
                        theme={theme}
                        width="80%"
                     />

                     <DataInput
                        title={'شناسه قبض'}
                        data={'0000000000000'}
                        theme={theme}
                        width="80%"
                     />

                     <DataInput
                        title={'شناسه پرداخت'}
                        data={'0000000000'}
                        theme={theme}
                        width="80%"
                     />
                  </div>

                  <div>
                     <Button>چاپ</Button>
                     <Button>پرداخت</Button>
                     <Button>سوابق پرداخت</Button>
                  </div>
               </div>
               <div></div>
               <div></div>
            </InfoCard>
            <AnnualChargeTable data={[]} />
         </div>
      </div>
   );
};

export default UnPaidDesktopRenovateCard;
