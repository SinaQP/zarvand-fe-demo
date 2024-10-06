// node libraries
import { BrowserRouter, createBrowserRouter, Route } from 'react-router-dom';
// pages
import Login from '../pages/login';
import Home from '../pages/home';
import Renovation from '../pages/renovation';
import Profile from '../pages/profile';
import Support from '../pages/support';
import Trade from '../pages/trade';
import { ComponentType, ReactNode, useContext } from 'react';
import { AppContext } from '../App.context';
import Footer from '../components/layout/footer';
import Layout from '../components/layout';

// const Router = () => {
//    const { token } = useContext(AppContext);

//    return (
//       <BrowserRouter>
//          {/* {!token && <Redirect to="/login" />} */}
//          {/* <Route path="/login" exact component={Login} /> */}
//          {/* <Layout> */}
//          {/* <PrivateRoute path="/home" component={Home} />
//          <PrivateRoute path="/renovation" component={Renovation} />
//          <PrivateRoute path="/profile" component={Profile} />
//          <PrivateRoute path="/support" component={Support} />
//          <PrivateRoute path="/trade" component={Trade} /> */}
//          {/* </Layout> */}
//       </BrowserRouter>
//    );
// };

const Router = createBrowserRouter([
   {
      path: '/',
      element: <Layout />,
      children: [
         { path: '/', Component: Home },
         { path: '/home', Component: Home },
         { path: '/profile', Component: Profile },
         { path: '/support', Component: Support },
         { path: '/trade', Component: Trade },
         { path: '/renovation', Component: Renovation },
      ],
   },
]);

export default Router;
