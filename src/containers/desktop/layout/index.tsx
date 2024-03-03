import { FC } from 'react';
import Logo from '../../../assets/images/logo.png';
import Props from './props.interface';
import { useHistory } from 'react-router-dom';

const Layout: FC<Props> = ({ children, showBackArrow = true }) => {
   const history = useHistory();
   return (
      <div className="layout">
         {showBackArrow && (
            <span
               onClick={() => history.goBack()}
               className="layout__navigator"
               style={{ cursor: 'pointer' }}
            >
               &gt;
            </span>
         )}

         <header>
            <img src={Logo} alt="Logo" />
            <span>سامانه پرداخت عوارض شهرداری زرند</span>
         </header>
         {children}
         <footer></footer>
      </div>
   );
};

export default Layout;
