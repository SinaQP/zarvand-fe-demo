import { FC } from 'react';
import Logo from '../../../assets/images/logo.png';
import Props from './props.interface';
import { Link } from 'react-router-dom';

const Layout: FC<Props> = ({ children, backArrowUrl }) => {
   return (
      <div className="layout">
         {backArrowUrl && <Link to={backArrowUrl} className='layout__navigator'>&gt;</Link>}
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
