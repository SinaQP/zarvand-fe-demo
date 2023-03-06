import React from 'react';
import { AppProps } from './App.interface';
const App = (props: AppProps) => {
      return <>{props.children}</>;
};

export default App;
