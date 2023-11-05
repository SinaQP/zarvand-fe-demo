// node libraries
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// pages
import Root from './pages/root/index';
import ZarvandLogIn from './pages/zarvandLogin';
import VerificationCode from './pages/verificationCode';

/**
 * Router Container
 */
function Router() {
      return (
            <BrowserRouter>
                  <Route path="/1" exact component={ ZarvandLogIn } />
                  <Route path="/" exact component={VerificationCode} />
            </BrowserRouter>
      );
}

export default Router;
