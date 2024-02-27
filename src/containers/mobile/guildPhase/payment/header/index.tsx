import { FC } from 'react';
import Navigation from './navigation';
import PersonInfo from './personInfo';

const Header: FC = () => {
   return (
      <header className="mobile-payment__header">
         <Navigation />
         <PersonInfo />
      </header>
   );
};

export default Header;
