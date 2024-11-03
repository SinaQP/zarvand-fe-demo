// node libraries
import { createBrowserRouter } from 'react-router-dom';
// pages
import Login from '../pages/login';
import Home from '../pages/home';
import Renovation from '../pages/renovation';
import Profile from '../pages/profile';
import Support from '../pages/support';
import Trade from '../pages/trade';
import Layout from '../components/layout';
import PrivateRoute from './privateRoute';
import PaymentStatus from '../pages/paymentStatus';
import BankPortal from '../pages/bankPortal';

const Router = createBrowserRouter([
   {
      path: '/',
      element: <Layout />,
      children: [
         { path: '/', element: <PrivateRoute element={<Home />} /> },
         { path: '/home', element: <PrivateRoute element={<Home />} /> },
         { path: '/profile', element: <PrivateRoute element={<Profile />} /> },
         { path: '/support', element: <PrivateRoute element={<Support />} /> },
         { path: '/trade', element: <PrivateRoute element={<Trade />} /> },
         {
            path: '/renovation',
            element: <PrivateRoute element={<Renovation />} />,
         },
         { path: '/login', element: <Login /> },
         { path: '/payment-status', element: <PaymentStatus /> },
         {
            path: '/bank-portal',
            element: <PrivateRoute element={<BankPortal />} />,
         },
      ],
   },
]);

export default Router;
