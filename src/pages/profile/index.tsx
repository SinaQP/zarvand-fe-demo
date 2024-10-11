import { FC, useContext } from 'react';
import './Profile.scss';
import pfpIcon from '/src/assets/images/pfpIcon.svg';
import nationalCodeIcon from '/src/assets/images/nationalCodeIcon.svg';
import InfoCardHeader from './components/infoCardHeader';
import smartphoneIcon from '/src/assets/images/smartphoneIcon.svg';
import callenderIcon from '/src/assets/images/callenderIcon.svg';
import { useUserContext } from '../../App.context';
import InfoCardBody from './components/infoCardBody';
import Button from '../../components/button';
import exitIcon from '/src/assets/images/exitIcon.svg';
import { useNavigate } from 'react-router-dom';
import useWindowWidth from '../../hooks/useWindowWidth';
import ProfileAndroid from './components/profileAndroid';
import ProfileDesktop from './components/profileDesktop';

const Profile: FC = () => {
   const { user, setToken } = useUserContext();
   const navigate = useNavigate();
   const userAgent = useWindowWidth('desktop', 'android');

   const handleExit = () => {
      setToken('');
      navigate('/login');
   };

   return (
      <div id="profileStyleWrapper">
         <div id="pfp">
            <img src={pfpIcon} alt="profile picture icon" id="pfpImage" />
            <span id="username">{user?.name || 'نام کاربری'}</span>
         </div>
         <div id="dataSection">
            {userAgent === 'android' ? (
               <ProfileAndroid user={user} />
            ) : (
               <ProfileDesktop user={user} />
            )}
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
