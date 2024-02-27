import { subsystemDetailsProps } from './index.interface';
import './style/index.scss';
import { useHistory } from 'react-router-dom';
import { FC, useContext, useEffect, useState } from 'react';
import handleChargeDetailButton from './handleChargeDetailButton';
import { AppContext, Guild } from '../../../../App.context';
import { getPersonTradeMasters } from '../../../../apis/guildPhase/get-person-trade-master';
import GuildCard from '../../../../componnents/guildCard';
import Button from '../../../../containers/desktop/button';

const SubsystemGuildDetais: FC<subsystemDetailsProps> = () => {
   const history = useHistory();
   const { token, setSelectedGuildCharge } = useContext(AppContext);
   const [guilds, setGuilds] = useState<Guild[]>([]);

   useEffect(() => {
      if (!token) history.push('');
      async function loadGuilds() {
         let response = await getPersonTradeMasters(token);
         const guilds: Guild[] = [...response.body];
         setGuilds(guilds);
      }
      loadGuilds();
   }, []);
   console.log('guilds', guilds);
   return (
      <div className="subsystemGuildDetailsPage">
         <div className="headerSection">
            <div className="mainDiv">
               <button
                  className="back"
                  onClick={() => {
                     history.push('/subsystem');
                  }}
               >
                  &gt;
               </button>
               <div className="innerSection1">
                  <img src={require(`${'./LOGO 4.png'}`)} alt="" />
               </div>
               <div className="innerSection2">
                  <div className="infoSection">
                     <p className="infoText">
                        مشاغل زیر در سیستم به نام شما ثبت شده‌اند. شما با انتخاب
                        هر یک از آن‌ها،می‌توانید صورتحساب مربوط به آن را مشاهده
                        و اقدام به پرداخت نمایید.
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="mainBillSection">
            {guilds.map((guild) => (
               <>
                  <GuildCard
                     className={
                        guild.is_paid
                           ? 'subsystemDetailsPage__paied_card'
                           : 'subsystemDetailsPage__card'
                     }
                     guild={guild}
                     lock
                     viewOnly
                  />
                  {guild.is_paid ? (
                     <span className="card__caption">پرداخت شده</span>
                  ) : (
                     <Button
                        className="card__button"
                        onClick={() => {
                           handleChargeDetailButton(
                              setSelectedGuildCharge,
                              guild,
                              history,
                           );
                        }}
                     >
                        مشاهده جزئیات قبض
                     </Button>
                  )}
               </>
            ))}
         </div>
         <div className="footerSection">
            <p className="footerDetails">Zaravand Co.</p>
         </div>
      </div>
   );
};
export default SubsystemGuildDetais;
