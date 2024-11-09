import { FC, useEffect } from 'react';
import './Profile.scss';
import pfpIcon from '/src/assets/images/pfpIcon.svg';
import { useUserContext } from '../../App.context';
import Button from '../../components/button';
import exitIcon from '/src/assets/images/exitIcon.svg';
import { useNavigate } from 'react-router-dom';
import useWindowWidth from '../../hooks/useWindowWidth';
import ProfileAndroid from './components/profileAndroid';
import ProfileDesktop from './components/profileDesktop';
import { useLayoutContext } from '../../components/layout/layout.context';

const Profile: FC = () => {
   const { user } = useUserContext();
   const { setHeaderSubtitle } = useLayoutContext();
   const userAgent = useWindowWidth('desktop', 'android');

   const handleExit = () => {
      location.reload();
   };

   useEffect(() => {
      setHeaderSubtitle('');
   }, []);

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

         <Button className="profileStyleWrapper__button" onClick={handleExit}>
            <span>خروج</span>
            <img src={exitIcon} alt="exit icon" />
         </Button>
      </div>
   );
};

export default Profile;
