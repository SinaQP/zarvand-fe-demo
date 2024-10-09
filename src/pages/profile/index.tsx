import { FC, useContext } from 'react';
import InfoCard from '../../components/infoCard';
import './Profile.scss';
import pfpIcon from '/src/assets/images/pfpIcon.svg';
import nationalCodeIcon from '/src/assets/images/nationalCodeIcon.svg';
import InfoCardHeader from './components/infoCardHeader';
import smartphoneIcon from '/src/assets/images/smartphoneIcon.svg';
import callenderIcon from '/src/assets/images/callenderIcon.svg';
import { AppContext } from '../../App.context';
import InfoCardBody from './components/infoCardBody';
import Button from '../../components/button';
import exitIcon from '/src/assets/images/exitIcon.svg';

const Profile: FC = () => {
   // return <ComingSoonText />;
   const { user, setToken } = useContext(AppContext);

   const handleExit = () => {
      setToken('');
   };

   return (
      <div id="profileStyleWrapper">
         <div id="pfp">
            <img src={pfpIcon} alt="profile picture icon" id="pfpImage" />
            <span id="username">{user?.name || 'نام کاربری'}</span>
         </div>
         <div id="dataSection">
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
         </div>

         <Button>
            <div className="buttons" onClick={handleExit}>
               <span>خروج</span>
               <img src={exitIcon} alt="exit icon" />
            </div>
         </Button>
      </div>
   );
};

export default Profile;
