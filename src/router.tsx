// node libraries
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
// pages
import Login from './pages/login';
import Home from './pages/home';
import Renovation from './pages/renovation';
import Profile from './pages/profile';
import Support from './pages/support';
import Trade from './pages/trade';
import { useContext, useEffect } from 'react';
import { AppContext } from './App.context';

const Router = () => {
   const { token } = useContext(AppContext);

   return (
      <BrowserRouter>
         {/* {!token && <Redirect to="/login" />} */}
         <Route path="/login" exact component={Login} />
         <Route path="/home" component={Home} />
         <Route path="/renovation" component={Renovation} />
         <Route path="/profile" component={Profile} />
         <Route path="/support" component={Support} />
         <Route path="/trade" component={Trade} />
      </BrowserRouter>
   );
};

export default Router;
