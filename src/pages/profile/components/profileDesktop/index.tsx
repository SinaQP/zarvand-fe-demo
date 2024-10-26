import { FC } from 'react';
import InfoCardBodyDesktop from '../infoCardBody/desktop';
import InfoCardDesktop from '../infoCardDesktop';
import { User } from '../../../../interfaces/models.interface';

const ProfileDesktop: FC<{ user: User | null }> = ({ user }) => {
   return (
      <>
         <InfoCardDesktop data={user?.national_code}>
            <InfoCardBodyDesktop
               title="کد ملی"
               data={user?.national_code || 'کد ملی'}
            />
         </InfoCardDesktop>

         <InfoCardDesktop data={user?.mobile_number}>
            <InfoCardBodyDesktop
               title="شماره تماس"
               data={user?.mobile_number || 'شماره تماس'}
            />
         </InfoCardDesktop>

         <InfoCardDesktop data={user?.birth_date}>
            <InfoCardBodyDesktop
               title="تاریخ تولد"
               data={user?.birth_date || 'تاریخ تولد'}
            />
         </InfoCardDesktop>
      </>
   );
};

export default ProfileDesktop;
