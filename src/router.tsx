// node libraries
import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
// pages
import ZarvandLogIn from './pages/Mobile/zarvandLogin';
import VerificationCode from './pages/Mobile/verificationCode';
import ChangePhoneNumber from './pages/Mobile/changeNumber';
import ZarvandSubsystem from './pages/Mobile/subsystem';
import SubsystemDetais from './pages/Mobile/subsystemDetails';
import Login from './pages/desktop/login';
import Welcome from './pages/desktop/welcome';
import RenewalCharges from './pages/desktop/renewalCharges';
import Payment from './pages/desktop/payment';

/**
 * Router Container
 */
function Router() {
   const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

   return (
      <BrowserRouter>
         <Route path="/" exact>
            {isMobile ? (
               <Redirect to="/login-mobile" />
            ) : (
               <Redirect to="/login-desktop" />
            )}
         </Route>
         <Route path="/login-mobile" exact component={ZarvandLogIn} />
         <Route path="/login-desktop" exact component={Login} />

         {isMobile && (
            <>
               <Route
                  path="/verfication-code"
                  exact
                  component={VerificationCode}
               />
               <Route
                  path="/change-phone-number"
                  exact
                  component={ChangePhoneNumber}
               />
               <Route path="/subsystem" exact component={ZarvandSubsystem} />
               <Route
                  path="/subsystem-info"
                  exact
                  component={SubsystemDetais}
               />
            </>
         )}

         <Route path="/subsystem" exact component={Welcome} />
         <Route path="/charges" exact component={RenewalCharges} />
         <Route path="/payment" exact component={Payment} />
      </BrowserRouter>
   );
}

export default Router;
