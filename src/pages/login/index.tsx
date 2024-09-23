import { FC, useState } from 'react';
import Layout from '../../components/layout';
import NationalCodeEntry from './nationalCodeEntry';
import ConfirmationEntry from './confirmationEntry';
import CounterBadge from './counter';


const Login: FC = () => {
   const [showConfirmationForm, setShowConfirmationForm] = useState(false);
   return <Layout extraHeaderContent={showConfirmationForm && <ConfirmationEntry />}
                  headerBadge={showConfirmationForm && <CounterBadge initialCount={45} />}>
      <NationalCodeEntry setShowConfirmationForm={setShowConfirmationForm}/>
   </Layout>;
};

export default Login;
