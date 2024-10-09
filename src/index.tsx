import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Router from './router';
import { RouterProvider } from 'react-router-dom';
import { LayoutProvider } from './components/layout/layout.provider';
import './assets/scss/fonts/_all.css';
import './assets/scss/_all.scss';

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement,
);
root.render(
   <App>
      <LayoutProvider>
         <RouterProvider router={Router} />
      </LayoutProvider>
   </App>,
);

reportWebVitals();
