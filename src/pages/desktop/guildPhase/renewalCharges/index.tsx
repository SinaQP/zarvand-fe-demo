import { useContext, useEffect, useState } from 'react';
import Layout from '../../../../containers/desktop/layout';
import { getTradeMasters } from './getPersonTradeMasters';
import { AppContext, Guild } from '../../../../App.context';
import { useHistory } from 'react-router-dom';
import GuildCard from '../../../../componnents/guildCard';

const GuildRenewalCharges = () => {
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
      <Layout backArrowUrl="/subsystem">
         <div className="renwal-charges">
            <p>
               مشاغل زیر در سیستم به نام شما ثبت شده اند. شما با انتخاب هر یک از
               آنها میتوانید صورت حساب مربوط به آن را مشاهده و پرداخت کنید.
            </p>

            <section className="renwal-charges__cards">
               {guilds.map((guild) => (
                  <GuildCard guild={guild} lock={true} />
               ))}
            </section>
         </div>
      </Layout>
   );
};

export default GuildRenewalCharges;
