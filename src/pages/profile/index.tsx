import { ChangeEvent, FC, useEffect, useMemo, useState } from 'react';
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
import { toast, ToastContainer, Bounce } from 'react-toastify';
import { updateUserData } from '../../apis/user/update-user-data';
import { IS_DEMO_MODE } from '../../config/env';
import { logoutDemoSession, resetDemoData } from '../../demo/service';
import { User } from '../../interfaces/models.interface';

const createEditableProfile = (user: User | null) => ({
   name: user?.name || '',
   mobile_number: user?.mobile_number || '',
   city: user?.city || '',
   region: user?.region || '',
   address: user?.address || '',
   citizen_id: user?.citizen_id || '',
   property_id: user?.property_id || '',
   vehicle_plate: user?.vehicle_plate || '',
   postal_code: user?.postal_code || '',
   email: user?.email || '',
});

const Profile: FC = () => {
   const { user, setUser, setToken } = useUserContext();
   const { setHeaderSubtitle, setHeaderId } = useLayoutContext();
   const userAgent = useWindowWidth('desktop', 'android');
   const navigate = useNavigate();

   const [formData, setFormData] = useState(createEditableProfile(user));

   useEffect(() => {
      setHeaderSubtitle('');
      setHeaderId?.('header');
   }, [setHeaderId, setHeaderSubtitle]);

   useEffect(() => {
      setFormData(createEditableProfile(user));
   }, [user]);

   const handleFieldChange = (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
   ) => {
      const { name, value } = event.target;
      setFormData((prevState) => ({
         ...prevState,
         [name]: value,
      }));
   };

   const handleSave = async () => {
      if (!formData.mobile_number || !/^09\d{9}$/.test(formData.mobile_number)) {
         toast.error('شماره موبایل معتبر وارد نمایید.');
         return;
      }

      const response = await updateUserData(formData);
      if (response.status === 200) {
         setUser(response.body);
         toast.success('اطلاعات پروفایل با موفقیت ذخیره شد.');
      } else {
         toast.error(response.body?.message || 'ذخیره اطلاعات با خطا مواجه شد.');
      }
   };

   const logout = () => {
      if (IS_DEMO_MODE) {
         logoutDemoSession();
      }
      sessionStorage.removeItem('zarToken');
      setToken('');
      setUser(null);
      navigate('/login');
   };

   const handleResetDemo = () => {
      if (!IS_DEMO_MODE) return;

      resetDemoData();
      logoutDemoSession();
      sessionStorage.removeItem('zarToken');
      setToken('');
      setUser(null);
      toast.success('داده‌های نسخه نمایشی بازنشانی شد.');
      navigate('/login');
   };

   const fullName = useMemo(() => user?.name || 'نام کاربری', [user?.name]);

   return (
      <div id="profileStyleWrapper">
         <div id="pfp">
            <img src={pfpIcon} alt="profile picture icon" id="pfpImage" />
            <span id="username">{fullName}</span>
            {IS_DEMO_MODE && <span className="demo-badge">نسخه نمایشی</span>}
         </div>

         <div id="dataSection">
            {userAgent === 'android' ? (
               <ProfileAndroid user={user} />
            ) : (
               <ProfileDesktop user={user} />
            )}
         </div>

         <div className="profile-edit-card">
            <h3>ویرایش اطلاعات شهروندی</h3>
            <div className="profile-edit-grid">
               <label className="profile-input-row">
                  <span>نام و نام خانوادگی</span>
                  <input
                     name="name"
                     value={formData.name}
                     onChange={handleFieldChange}
                  />
               </label>
               <label className="profile-input-row">
                  <span>شماره موبایل</span>
                  <input
                     name="mobile_number"
                     value={formData.mobile_number}
                     onChange={handleFieldChange}
                  />
               </label>
               <label className="profile-input-row">
                  <span>شهر</span>
                  <input
                     name="city"
                     value={formData.city}
                     onChange={handleFieldChange}
                  />
               </label>
               <label className="profile-input-row">
                  <span>منطقه شهرداری</span>
                  <input
                     name="region"
                     value={formData.region}
                     onChange={handleFieldChange}
                  />
               </label>
               <label className="profile-input-row">
                  <span>شناسه شهروندی</span>
                  <input
                     name="citizen_id"
                     value={formData.citizen_id}
                     onChange={handleFieldChange}
                  />
               </label>
               <label className="profile-input-row">
                  <span>شناسه ملک</span>
                  <input
                     name="property_id"
                     value={formData.property_id}
                     onChange={handleFieldChange}
                  />
               </label>
               <label className="profile-input-row">
                  <span>پلاک خودرو</span>
                  <input
                     name="vehicle_plate"
                     value={formData.vehicle_plate}
                     onChange={handleFieldChange}
                  />
               </label>
               <label className="profile-input-row">
                  <span>کد پستی</span>
                  <input
                     name="postal_code"
                     value={formData.postal_code}
                     onChange={handleFieldChange}
                  />
               </label>
               <label className="profile-input-row profile-input-row--full">
                  <span>نشانی</span>
                  <textarea
                     name="address"
                     value={formData.address}
                     onChange={handleFieldChange}
                     rows={3}
                  />
               </label>
               <label className="profile-input-row profile-input-row--full">
                  <span>ایمیل</span>
                  <input
                     name="email"
                     value={formData.email}
                     onChange={handleFieldChange}
                  />
               </label>
            </div>

            <div className="profile-actions">
               <Button className="profile-action-button" onClick={handleSave}>
                  ذخیره تغییرات
               </Button>
               {IS_DEMO_MODE && (
                  <Button
                     className="profile-action-button profile-action-button--secondary"
                     onClick={handleResetDemo}
                  >
                     بازنشانی داده نمایشی
                  </Button>
               )}
            </div>
         </div>

         <Button className="profileStyleWrapper__button" onClick={logout}>
            <span>خروج</span>
            <img src={exitIcon} alt="exit icon" />
         </Button>

         <ToastContainer
            rtl
            position="bottom-center"
            autoClose={2500}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
            bodyStyle={{ fontFamily: 'BNazanin', fontSize: '2.2rem' }}
            style={{ width: 'auto', maxWidth: '60rem' }}
         />
      </div>
   );
};

export default Profile;

