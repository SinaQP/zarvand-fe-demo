// node libraries
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
// pages
import ZarvandSubsystem from './pages/mobile/subsystem';
import SubsystemDetais from './pages/mobile/subsystemDetails';
import CurrentDesktopLogin from './pages/desktop/login';
import Welcome from './pages/desktop/subsystems';
import RenewalCharges from './pages/desktop/renovations/charges';
import RenovationPayment from './pages/desktop/renovations/payment';
import PaymentMobile from './pages/mobile/payment';
import GuildRenewalCharges from './pages/desktop/trades/renewalCharges';
import DesktopPaymentGuild from './pages/desktop/trades/payment';
import SubsystemGuildDetais from './pages/mobile/guildPhase/subsystemDetails';
import MobilePaymentGuild from './pages/mobile/guildPhase/payment';
import RenovationPayedDetail from './pages/desktop/renovations/payedDetail';
import RenovationMobilePayedDetail from './pages/mobile/payedDetail';
import GuildPayedDetail from './pages/desktop/trades/payedDetail';
import MobileGuildPayedDetail from './pages/mobile/guildPhase/payedDetail';
import { useContext } from 'react';
import { AppContext } from './App.context';
import Login from './pages/login';

const Router = () => {
   const { token } = useContext(AppContext);
   const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

   return (
      <BrowserRouter>
         {!token && <Redirect to="/login" />}
         <Route
            path="/login"
            exact
            component={isMobile ? Login : CurrentDesktopLogin}
         />
         {isMobile && (
            <>
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
            path="/payment/guild/"
            exact
            component={isMobile ? MobilePaymentGuild : DesktopPaymentGuild}
         />
         <Route
            path="/payed-detail/renovation"
            exact
            component={
               isMobile ? RenovationMobilePayedDetail : RenovationPayedDetail
            }
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
      </BrowserRouter>
   );
};

export default Router;
