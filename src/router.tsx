// node libraries
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
import PaymentMobile from './pages/Mobile/payment';
import { AppContext } from './App.context';
import GuildRenewalCharges from './pages/desktop/guildPhase/renewalCharges';
import GuildPayment from './pages/desktop/guildPhase/payment';

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
         <Route path="/login-desktop" exact component={Login} />

         {isMobile && (
            <>
               <Route path="/login-mobile" exact component={ZarvandLogIn} />
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

         <Route
            path="/payment"
            exact
            component={isMobile ? PaymentMobile : Payment}
         />
         <Route path="/subsystem" exact component={Welcome} />
         <Route path="/charges" exact component={RenewalCharges} />
         <Route path="/guild-charges" exact component={GuildRenewalCharges} />
         <Route
            path="/payment-guild"
            exact
            component={isMobile ? PaymentMobile : GuildPayment}
         />
      </BrowserRouter>
   );
}

export default Router;
