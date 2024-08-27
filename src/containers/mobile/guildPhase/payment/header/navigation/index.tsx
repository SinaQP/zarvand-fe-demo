import { FC } from 'react';
import logo from './../../../../../../assets/images/zarvand-logo.png';
import municipalityLogo from './../../../../../assets/images/municipality-logo.bmp';
import { useHistory } from 'react-router-dom';

const Navigation: FC = () => {
   const history = useHistory();

   return (
      <div className="mobile-payment__navigation">
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
               d="M19 3L5 3C3.89 3 3 3.89 3 5L3 9H5L5 5L19 5V19L5 19V15H3L3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21L19 21C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19L21 5C21 3.89 20.1 3 19 3ZM10.08 15.58L11.5 17L16.5 12L11.5 7L10.08 8.41L12.67 11L3 11L3 13L12.67 13L10.08 15.58Z"
               fill="#706A62"
            />
         </svg>
         <img src={municipalityLogo} alt="Zarand" />
         <img src={logo} alt="LOGO" />
         <span
            className="mobile-payment__back-button"
            onClick={() => {
               history.push('/');
            }}
         >
            &gt;
         </span>
      </div>
   );
};

export default Navigation;
