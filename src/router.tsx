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
import DesktopPaymentGuild from './pages/desktop/guildPhase/payment';
import SubsystemGuildDetais from './pages/Mobile/guildPhase/subsystemDetails';
import MobilePaymentGuild from './pages/Mobile/guildPhase/payment';
import PayedDetail from './pages/desktop/payedDetail';
import MobilePayedDetail from './pages/Mobile/payedDetail';
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
            path="/payment/renovation/"
            exact
            component={isMobile ? PaymentMobile : Payment}
         />
         <Route
            path="/payed-detail/renovation"
            exact
            component={isMobile ? MobilePayedDetail : PayedDetail}
         />
         <Route path="/subsystem" exact component={Welcome} />
         <Route
            path="/subsystem-guild-info"
            exact
            component={SubsystemGuildDetais}
         />

         <Route path="/charges/renovation" exact component={RenewalCharges} />
         <Route path="/guild-charges" exact component={GuildRenewalCharges} />
         <Route
            path="/payment-guild"
            exact
            component={isMobile ? MobilePaymentGuild : DesktopPaymentGuild}
         />
      </BrowserRouter>
   );
}

export default Router;
