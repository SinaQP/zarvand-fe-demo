import { FC, MouseEventHandler, useEffect, useMemo, useState } from 'react';
import { useUserContext } from '../../App.context';
import useWindowWidth from '../../hooks/useWindowWidth';
import whiteSquareIcon from '../../assets/images/white.squares.svg';
import { useLayoutContext } from '../../components/layout/layout.context';
import './index.scss';
import getPersianDate from './func/getDate';
import Button from '../../components/button';
import brickWallIcon from '/src/assets/images/brickWallIcon.svg';
import shopIcon from '/src/assets/images/shopIcon.svg';
import callenderIcon from '/src/assets/images/callenderIcon.svg';
import whiteClipboardIcon from '/src/assets/images/whiteClipboardIcon.svg';
import { useNavigate } from 'react-router-dom';
import { getDashboardOverview } from '../../apis/dashboard/get-dashboard-overview';
import { DemoChargeRecord, DemoDashboardData } from '../../demo/types';
import toMoneyFormat from '../../utilities/toMoneyFormat';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { markNotificationRead } from '../../apis/notifications/mark-notification-read';
import Loading from '../../components/loading/loading';

const Home: FC = () => {
   const { setHeaderId, setHeaderSubtitle } = useLayoutContext();
   const { user } = useUserContext();
   const [dashboard, setDashboard] = useState<DemoDashboardData | null>(null);
   const [loading, setLoading] = useState(true);

   const whiteSquares = useWindowWidth(
      <img src={whiteSquareIcon} className={'white-square'} alt="white squares" />,
      null,
   );
   const isMobile = useWindowWidth(false, true);

   useEffect(() => {
      setHeaderSubtitle('');
      setHeaderId && setHeaderId('header');
   }, [setHeaderId, setHeaderSubtitle]);

   const loadDashboard = async () => {
      setLoading(true);
      const response = await getDashboardOverview();
      if (response.status === 200) {
         setDashboard(response.body);
      } else {
         toast.error(response.body?.message || 'خطا در دریافت اطلاعات داشبورد.');
      }
      setLoading(false);
   };

   useEffect(() => {
      loadDashboard();
   }, []);

   const formattedDate = getPersianDate();
   const navigate = useNavigate();

   const summaryCards = useMemo(() => {
      if (!dashboard) return [];
      return [
         {
            title: 'مجموع بدهی جاری',
            value: `${toMoneyFormat(
               dashboard.summary.outstanding_amount.toString(),
            )} ریال`,
            tone: 'danger',
         },
         {
            title: 'پرداخت‌شده این دوره',
            value: `${toMoneyFormat(
               dashboard.summary.paid_amount_period.toString(),
            )} ریال`,
            tone: 'success',
         },
         {
            title: 'اقلام سررسید گذشته',
            value: `${dashboard.summary.overdue_count} مورد`,
            tone: 'warning',
         },
         {
            title: 'قبوض در انتظار پرداخت',
            value: `${dashboard.summary.unpaid_count} مورد`,
            tone: 'info',
         },
      ];
   }, [dashboard]);

   const statusLabel = (status: DemoChargeRecord['status']) => {
      if (status === 'paid') return 'پرداخت‌شده';
      if (status === 'overdue') return 'سررسید گذشته';
      return 'در انتظار پرداخت';
   };

   const statusClass = (status: DemoChargeRecord['status']) => {
      if (status === 'paid') return 'badgePaid';
      if (status === 'overdue') return 'badgeOverdue';
      return 'badgePending';
   };

   const handleToggleNotification = async (
      notificationId: string,
      currentState: boolean,
   ) => {
      const response = await markNotificationRead(notificationId, !currentState);
      if (response.status === 200) {
         setDashboard((prevState) =>
            prevState
               ? {
                    ...prevState,
                    notifications: response.body.slice(0, 6),
                 }
               : prevState,
         );
      }
   };

   const ServiceBtn = ({
      text,
      imageSrc,
      onClick,
   }: {
      text: string;
      imageSrc: string;
      onClick: MouseEventHandler<HTMLButtonElement>;
   }) => {
      return (
         <Button className="serviceBtns" onClick={onClick}>
            <img src={imageSrc} alt="button icon" />
            <span className="text">{text}</span>
         </Button>
      );
   };

   if (loading) {
      return (
         <section id={'home-main'}>
            <div className="homeLoading">
               <Loading />
            </div>
         </section>
      );
   }

   return (
      <section id={'home-main'}>
         <div id="container">
            <div className={'welcome-text-container'}>
               <div className="welcome-text__body">
                  <span className="welcome-text">
                     {user?.name || 'کاربر'} عزیز، خوش آمدید. مدیریت عوارض و خدمات
                     غیرحضوری شهرداری کرمان از این بخش در دسترس شماست.
                  </span>
                  <span className="citizenId">
                     شناسه شهروندی: {user?.citizen_id || 'شهروند-کرمان-۱۴۰۴-۰۰۲۹۱'}
                  </span>
               </div>

               <span className="date">{formattedDate}</span>
            </div>

            <div className="summaryCards">
               {summaryCards.map((card) => (
                  <div className={`summaryCard ${card.tone}`} key={card.title}>
                     <span className="title">{card.title}</span>
                     <span className="value">{card.value}</span>
                  </div>
               ))}
            </div>

            <div className="services-container">
               <div className="title">
                  <span>دسترسی سریع خدمات</span>
               </div>

               <div className="actions">
                  <ServiceBtn
                     imageSrc={brickWallIcon}
                     text="نوسازی"
                     onClick={() => navigate('/renovation')}
                  />
                  <ServiceBtn
                     imageSrc={shopIcon}
                     text="کسب و پیشه"
                     onClick={() => navigate('/trade')}
                  />
                  <ServiceBtn
                     imageSrc={callenderIcon}
                     text="پیگیری ۱۳۷"
                     onClick={() => navigate('/support')}
                  />
                  <ServiceBtn
                     imageSrc={whiteClipboardIcon}
                     text="پروفایل"
                     onClick={() => navigate('/profile')}
                  />
               </div>
            </div>

            <div className="dashboardGrid">
               <div className="dashboardCard">
                  <div className="cardHeader">
                     <h3>بدهی‌ها و قبوض باز</h3>
                     <span>{dashboard?.outstanding_items.length || 0} مورد</span>
                  </div>

                  {(dashboard?.outstanding_items || []).slice(0, 6).map((item) => (
                     <div className="listRow" key={item.id}>
                        <div>
                           <span className="rowTitle">{item.title}</span>
                           <span className="rowSubTitle">
                              سررسید: {item.due_date} | شناسه قبض: {item.bill_no}
                           </span>
                        </div>
                        <div className="rowMeta">
                           <span className="amount">
                              {toMoneyFormat(item.amount.toString())} ریال
                           </span>
                           <span className={`statusBadge ${statusClass(item.status)}`}>
                              {statusLabel(item.status)}
                           </span>
                        </div>
                     </div>
                  ))}
               </div>

               <div className="dashboardCard">
                  <div className="cardHeader">
                     <h3>اعلان‌های شهرداری</h3>
                     <span>
                        {
                           dashboard?.notifications.filter(
                              (notification) => !notification.is_read,
                           ).length
                        }{' '}
                        خوانده‌نشده
                     </span>
                  </div>

                  {(dashboard?.notifications || []).map((notification) => (
                     <div className="notificationRow" key={notification.id}>
                        <div>
                           <span className="rowTitle">{notification.title}</span>
                           <span className="rowSubTitle">{notification.message}</span>
                           <span className="rowDate">{notification.created_at}</span>
                        </div>
                        <button
                           className={`readToggle ${
                              notification.is_read ? 'isRead' : 'isUnread'
                           }`}
                           onClick={() =>
                              handleToggleNotification(
                                 notification.id,
                                 notification.is_read,
                              )
                           }
                        >
                           {notification.is_read ? 'خوانده شده' : 'علامت‌گذاری'}
                        </button>
                     </div>
                  ))}
               </div>

               <div className="dashboardCard">
                  <div className="cardHeader">
                     <h3>پرداخت‌های اخیر</h3>
                     <span>۶ تراکنش اخیر</span>
                  </div>

                  {(dashboard?.recent_transactions || []).map((transaction) => (
                     <div className="listRow" key={transaction.id}>
                        <div>
                           <span className="rowTitle">{transaction.title}</span>
                           <span className="rowSubTitle">
                              کد رهگیری: {transaction.tracking_code}
                           </span>
                        </div>
                        <div className="rowMeta">
                           <span className="amount">
                              {toMoneyFormat(transaction.amount.toString())} ریال
                           </span>
                           <span className="dateSmall">{transaction.paid_at}</span>
                        </div>
                     </div>
                  ))}
               </div>

               <div className="dashboardCard">
                  <div className="cardHeader">
                     <h3>درخواست‌ها و پیگیری‌ها</h3>
                     <span>{dashboard?.recent_requests.length || 0} مورد اخیر</span>
                  </div>

                  {(dashboard?.recent_requests || []).map((request) => (
                     <div className="listRow" key={request.id}>
                        <div>
                           <span className="rowTitle">{request.title}</span>
                           <span className="rowSubTitle">{request.request_no}</span>
                        </div>
                        <div className="rowMeta">
                           <span className="requestStatus">{request.status}</span>
                           <span className="dateSmall">{request.updated_at}</span>
                        </div>
                     </div>
                  ))}

                  {isMobile && (
                     <Button
                        className="gotoSupport"
                        onClick={() => navigate('/support')}
                     >
                        مشاهده همه درخواست‌ها
                     </Button>
                  )}
               </div>
            </div>
         </div>
         {whiteSquares}
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
            bodyStyle={{
               fontFamily: 'BNazanin',
               fontSize: '2.2rem',
            }}
            style={{ width: 'auto' }}
         />
      </section>
   );
};

export default Home;

