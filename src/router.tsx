// node libraries
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// pages
import ZarvandLogIn from './pages/Mobile/zarvandLogin';
import VerificationCode from './pages/Mobile/verificationCode';
import ChangePhoneNumber from './pages/Mobile/changeNumber';
import ZarvandSubsystem from './pages/Mobile/subsystem';
import SubsystemDetais from './pages/Mobile/subsystemDetails';
import Login from './pages/desktop/login';
import Welcome from './pages/desktop/welcome';
import RenewalCharges from './pages/desktop/renewalCharges';

/**
 * Router Container
 */
function Router() {
   return (
      <BrowserRouter>
         <Route path="/" exact component={ZarvandLogIn} />
         <Route path="/verfication-code" exact component={VerificationCode} />
         <Route
            path="/change-phone-number"
            exact
            component={ChangePhoneNumber}
         />
         <Route path="/subsystem" exact component={ZarvandSubsystem} />
         <Route path="/subsystem-info" exact component={SubsystemDetais} />
         <Route path="/login-desktop" exact component={Login} />
         <Route path="/welcome" exact component={Welcome} />
         <Route path="/renewal-charges" exact component={RenewalCharges} />
      </BrowserRouter>
   );
}

export default Router;
