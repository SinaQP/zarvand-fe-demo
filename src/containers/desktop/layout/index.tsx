import { FC } from 'react';
import Logo from '../../../assets/images/logo.png';
import Props from './props.interface';

const Layout: FC<Props> = ({ children }) => {
      return (
            <div className="layout">
                  <header>
                        <img src={Logo} alt="Logo" />
                        <span>سامانه پرداخت عوارض شهرداری کرمان</span>
                  </header>
                  {children}
                  <footer></footer>
            </div>
      );
};

export default Layout;
