import InfoCard from '../../../../components/infoCard';
import InfoCardBody from '../infoCardBody';
import InfoCardHeader from '../infoCardHeader';
import callenderIcon from '/src/assets/images/callenderIcon.svg';
import smartphoneIcon from '/src/assets/images/smartphoneIcon.svg';
import nationalCodeIcon from '/src/assets/images/nationalCodeIcon.svg';
import { FC } from 'react';
import { User } from '../../../../App.context';

const ProfileAndroid: FC<{ user: User | null }> = ({ user }) => {
   return (
      <>
         <InfoCard
            title={
               <InfoCardHeader
                  title="کد ملی"
                  nationalCodeIcon={nationalCodeIcon}
               />
            }
            isPrimary
         >
            <InfoCardBody title={user?.national_code || 'کد ملی'} />
         </InfoCard>

         <InfoCard
            title={
               <InfoCardHeader
                  title={'شماره تماس'}
                  nationalCodeIcon={smartphoneIcon}
               />
            }
            isPrimary
         >
            <InfoCardBody title={user?.mobile_number || 'شماره تماس'} />
         </InfoCard>

         <InfoCard
            title={
               <InfoCardHeader
                  title={'تاریخ تولد'}
                  nationalCodeIcon={callenderIcon}
               />
            }
            isPrimary
         >
            <InfoCardBody title={user?.birth_date || 'تاریخ تولد'} />
         </InfoCard>
      </>
   );
};

export default ProfileAndroid;
