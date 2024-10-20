import useWindowWidth from '../../../hooks/useWindowWidth';
import desktopCityAnimation from '../../../assets/lottie/login-desktop-animation.json';
import mobileCityAnimation from '../../../assets/lottie/login-mobile-animation.json';
import Lottie from 'react-lottie';
import styles from './index.module.scss';

const CityAnimationCard = () => {
   const defaultOptions = (animationData: any) => ({
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
         preserveAspectRatio: 'xMidYMid slice',
      },
   });
   const options = useWindowWidth(
      defaultOptions(mobileCityAnimation),
      defaultOptions(desktopCityAnimation),
   );

   return (
      <div className={styles['city-animation-card']}>
         <Lottie options={options} speed={1} />
      </div>
   );
};

export default CityAnimationCard;
