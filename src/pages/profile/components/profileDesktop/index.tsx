import { FC } from 'react';
import InfoCardBodyDesktop from '../infoCardBody/desktop';
import InfoCardDesktop from '../infoCardDesktop';
import { User } from '../../../../interfaces/models.interface';

const ProfileDesktop: FC<{ user: User | null }> = ({ user }) => {
   const rows = [
      { title: 'کد ملی', data: user?.national_code },
      { title: 'شماره تماس', data: user?.mobile_number },
      { title: 'تاریخ تولد', data: user?.birth_date },
      { title: 'شهر', data: user?.city },
      { title: 'شناسه شهروندی', data: user?.citizen_id },
      { title: 'شناسه ملک', data: user?.property_id },
      { title: 'پلاک خودرو', data: user?.vehicle_plate },
   ];

   return (
      <>
         {rows.map((row) => (
            <InfoCardDesktop data={row.data} key={row.title}>
               <InfoCardBodyDesktop title={row.title} data={row.data || row.title} />
            </InfoCardDesktop>
         ))}
      </>
   );
};

export default ProfileDesktop;
