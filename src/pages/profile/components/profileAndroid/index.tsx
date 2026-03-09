import InfoCard from '../../../../components/infoCard';
import InfoCardBody from '../infoCardBody';
import InfoCardHeader from '../infoCardHeader';
import callenderIcon from '/src/assets/images/callenderIcon.svg';
import smartphoneIcon from '/src/assets/images/smartphoneIcon.svg';
import nationalCodeIcon from '/src/assets/images/nationalCodeIcon.svg';
import { FC } from 'react';
import { User } from '../../../../interfaces/models.interface';

const ProfileAndroid: FC<{ user: User | null }> = ({ user }) => {
   const rows = [
      {
         title: 'کد ملی',
         value: user?.national_code || 'کد ملی',
         icon: nationalCodeIcon,
      },
      {
         title: 'شماره تماس',
         value: user?.mobile_number || 'شماره تماس',
         icon: smartphoneIcon,
      },
      {
         title: 'تاریخ تولد',
         value: user?.birth_date || 'تاریخ تولد',
         icon: callenderIcon,
      },
      {
         title: 'شهر',
         value: user?.city || 'شهر',
         icon: nationalCodeIcon,
      },
      {
         title: 'شناسه شهروندی',
         value: user?.citizen_id || 'شناسه شهروندی',
         icon: nationalCodeIcon,
      },
      {
         title: 'شناسه ملک',
         value: user?.property_id || 'شناسه ملک',
         icon: nationalCodeIcon,
      },
      {
         title: 'پلاک خودرو',
         value: user?.vehicle_plate || 'پلاک خودرو',
         icon: nationalCodeIcon,
      },
   ];

   return (
      <>
         {rows.map((row) => (
            <InfoCard
               key={row.title}
               title={<InfoCardHeader title={row.title} nationalCodeIcon={row.icon} />}
               isPrimary
            >
               <InfoCardBody title={row.value} />
            </InfoCard>
         ))}
      </>
   );
};

export default ProfileAndroid;
