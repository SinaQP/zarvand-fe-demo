import { useContext, useEffect, useState } from 'react';
import { getTradeMasters } from './getPersonTradeMasters';
import { AppContext, Guild } from '../../../../App.context';
import { useHistory } from 'react-router-dom';
import GuildCard from '../../../../components/guildCard';
import "./index.scss";
import Layout from '../../layout';

const TrdRenewalCharges = () => {
   const { token } = useContext(AppContext);
   const [guilds, setGuilds] = useState<Guild[]>([]);
   const history = useHistory();

   useEffect(() => {
      if (!token) history.push('');

      const fetch = async function () {
         const guilds = await getTradeMasters(token);
         setGuilds(guilds);
      };
      fetch();
   }, []);

   return (
      <Layout>
         <div className="trd-renwal-charges">
            <p>
               مشاغل زیر در سیستم به نام شما ثبت شده اند. شما با انتخاب هر یک از
               آنها میتوانید صورت حساب مربوط به آن را مشاهده و پرداخت کنید.
            </p>

            <section className="trd-renwal-charges__cards">
               {guilds.map((guild) => (
                  <GuildCard guild={guild} lock={true} />
               ))}
            </section>
         </div>
      </Layout>
   );
};

export default TrdRenewalCharges;
