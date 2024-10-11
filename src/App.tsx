import { AppProps } from './App.interface';
import 'react-toastify/dist/ReactToastify.css';
import AppProviders from './app.provider';

const App = (props: AppProps) => {
   return <AppProviders>{props.children}</AppProviders>;
};

export default App;
