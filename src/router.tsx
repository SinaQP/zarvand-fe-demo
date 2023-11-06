// node libraries
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// pages
import ZarvandLogIn from './pages/zarvandLogin';
import VerificationCode from './pages/verificationCode';
import ChangePhoneNumber from './pages/changeNumber';
import ZarvandSubsystem from './pages/subsystem';
import SubsystemDetais from './pages/subsystemDetails';

/**
 * Router Container
 */
function Router() {
      return (
            <BrowserRouter>
                  <Route path="/" exact component={ ZarvandLogIn } />
                  <Route path="/verfication-code" exact component={ VerificationCode } />
                  <Route path="/change-phone-number" exact component={ ChangePhoneNumber } />
                  <Route path="/subsystem" exact component={ ZarvandSubsystem } />
                  <Route path="/subsystem-info" exact component={SubsystemDetais} />
            </BrowserRouter>
      );
}

export default Router;
