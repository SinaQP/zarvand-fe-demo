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
import RenewalCharges from './pages/desktop/renovationPhase/charges';
import RenovationPayment from './pages/desktop/renovationPhase/payment';
import PaymentMobile from './pages/Mobile/payment';
import GuildRenewalCharges from './pages/desktop/guildPhase/renewalCharges';
import DesktopPaymentGuild from './pages/desktop/guildPhase/payment';
import SubsystemGuildDetais from './pages/Mobile/guildPhase/subsystemDetails';
import MobilePaymentGuild from './pages/Mobile/guildPhase/payment';
import RenovationPayedDetail from './pages/desktop/renovationPhase/payedDetail';
import RenovationMobilePayedDetail from './pages/Mobile/payedDetail';
import GuildPayedDetail from './pages/desktop/guildPhase/payedDetail';
import MobileGuildPayedDetail from './pages/Mobile/guildPhase/payedDetail';
/**
 * Router Container
 */
const RenovationRoutes = () => {
   return <></>
}
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
         {/* RenovationRoutes */}
         <Route
            path="/payment/renovation/"
            exact
            component={isMobile ? PaymentMobile : RenovationPayment}
         />
         <Route
            path="/payed-detail/renovation"
            exact
            component={isMobile ? RenovationMobilePayedDetail : RenovationPayedDetail}
         />
         <Route
            path="/payed-detail/guild"
            exact
            component={isMobile ? MobileGuildPayedDetail : GuildPayedDetail}
         />
         <Route path="/subsystem" exact component={Welcome} />
         <Route
            path="/subsystem-guild-info"
            exact
            component={SubsystemGuildDetais}
         />

         <Route path="/charges/renovation" exact component={RenewalCharges} />
         <Route path="/charges/guild" exact component={GuildRenewalCharges} />
         <Route
            path="/payment/guild/"
            exact
            component={isMobile ? MobilePaymentGuild : DesktopPaymentGuild}
         />
      </BrowserRouter>
   );
}

export default Router;
