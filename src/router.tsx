// node libraries
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// pages
import Root from './pages/root/index';

/**
 * Router Container
 */
function Router() {
      return (
            <BrowserRouter>
                  <Route path="/" exact component={Root} />
            </BrowserRouter>
      );
}

export default Router;
