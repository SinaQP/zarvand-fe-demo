import { FC, MouseEventHandler, useContext, useEffect } from 'react';
import { useUserContext } from '../../App.context';
import ComingSoonText from '../../components/comingSoonText';
import useWindowWidth from '../../hooks/useWindowWidth';
import whiteSquareIcon from '../../assets/images/white.squares.svg';
import { useLayoutContext } from '../../components/layout/layout.context';
import './index.scss';
import getPersianDate from './func/getDate';
import Button from '../../components/button';
import percentageIcon from '/src/assets/images/percentageIcon.svg';
import whiteClipboardIcon from '/src/assets/images/whiteClipboardIcon.svg';
import lineChart from '/src/assets/images/lineChart.svg';
import brickWallIcon from '/src/assets/images/brickWallIcon.svg';
import shopIcon from '/src/assets/images/shopIcon.svg';
import { useNavigate } from 'react-router-dom';

const Home: FC = () => {
   const { setHeaderId, setHeaderSubtitle } = useLayoutContext();
   const { user } = useUserContext();
   const whiteSquares = useWindowWidth(
      <img src={whiteSquareIcon} className={'white-square'} />,
      null,
   );
   const windowWidth = useWindowWidth('des', 'and');
   useEffect(() => {
      setHeaderSubtitle('');
      setHeaderId && setHeaderId('header');
   }, []);

   const formattedDate = getPersianDate();
   const navigate = useNavigate();

   const ActionBtn = ({
      text,
      imageSrc,
   }: {
      text: string;
      imageSrc: string;
   }) => {
      return (
         <Button className="actionBtns">
            <span className="text">{text}</span>
            <img src={imageSrc} alt="button icon" />
         </Button>
      );
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

   return (
      <section id={'home-main'}>
         <div id="container">
            <div className={'welcome-text-container'}>
               <span className="welcome-text">
                  {user?.name || 'کاربر'} عزیز ! خوش آمدید. امیدواریم تجربه‌ای
                  سریع و آسان در مدیریت عوارض شهری داشته باشید.
               </span>

               <span className="date">{formattedDate}</span>
            </div>

            {/* <div className="citizenship-privilege-container">
               <div className="title">
                  <span>امتیاز شهروندی شما</span>
               </div>

               <span className="text">
                  با افزایش امتیاز شهروندی خود، از خدمات ویژه و تخفیف‌های
                  اختصاصی بهره‌مند شوید. امتیاز شما نشان‌دهنده همراهی‌تان در
                  توسعه و پیشرفت شهر است !
               </span>

               <div className="actions">
                  <ActionBtn text={'تخفیفات'} imageSrc={percentageIcon} />
                  <ActionBtn text={'توضیحات'} imageSrc={whiteClipboardIcon} />
                  <ActionBtn text={'افزایش'} imageSrc={lineChart} />
               </div>
            </div> */}

            {windowWidth === 'and' && (
               <div className="services-container">
                  <div className="title">
                     <span>خدمات</span>
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
                  </div>
               </div>
            )}
         </div>
         {whiteSquares}
      </section>
   );
};

export default Home;
