import sliderImage from '../../../../../assets/images/slider-img.png';
import "./index.scss";

const Slider = () => {
   return (
      <div className="slider">
         <div className={'slider__slide'}>
            <img src={sliderImage} alt="house" />
            <span>پرداخت آسان عوارض شهری </span>
            <span>بدون نیاز به مراجعه حضوری</span>
         </div>
      </div>
   );
};

export default Slider;
