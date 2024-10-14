import { FC } from 'react';
import InfoCardBodyDesktop from '../infoCardBody/desktop';
import InfoCardDesktop from '../infoCardDesktop';
import { User } from '../../../../interfaces/models.interface';

const ProfileDesktop: FC<{ user: User | null }> = ({ user }) => {
   return (
      <>
         <InfoCardDesktop>
            <InfoCardBodyDesktop
               title="کد ملی"
               data={user?.national_code || 'کد ملی'}
            />
         </InfoCardDesktop>
         <InfoCardDesktop>
            <InfoCardBodyDesktop
               title="شماره تماس"
               data={user?.mobile_number || 'شماره تماس'}
            />
         </InfoCardDesktop>
         <InfoCardDesktop>
            <InfoCardBodyDesktop
               title="تاریخ تولد"
               data={user?.birth_date || 'تاریخ تولد'}
            />
         </InfoCardDesktop>
      </>
   );
};

export default ProfileDesktop;
