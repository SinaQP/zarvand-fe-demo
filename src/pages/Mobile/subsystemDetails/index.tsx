import * as React from 'react';
import { subsystemDetailsProps } from './index.interface';
import './style/index.scss';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import ContainerCard from '../../../componnents/containerCard';
import Input from '../../../componnents/input';
import Button from '../../../componnents/button';
const SubsystemDetais: React.FC<subsystemDetailsProps> = () => {
   const history = useHistory();
   const [inp, setInp] = useState<string[]>(['', '', '', '', '']);
   return (
      <div className="subsystemDetailsPage">
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
                        ملک های زیر در سیستم به نام شما ثبت شده‌اند. شما با
                        انتخاب هر یک از آن‌ها،می‌توانید صورتحساب مربوط به آن را
                        مشاهده و اقدام به پرداخت نمایید.
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="mainBillSection">
            <div className="billsSection">
               <div className="billDetails">
                  <div className="part1">
                     <img src={require(`${'./basil_home-solid.png'}`)} alt="" />
                     <p className="addressStyle">
                        بلوار مصلی -کوچه شماره 23-پلاک 3
                     </p>
                  </div>
                  <div className="part2">
                     <ContainerCard
                        className={`SSNNumberStyle`}
                        isInner={true}
                        title="شماره شناسنامه ملک"
                     >
                        <section className={`SSNNumberStyle_firstSection`}>
                           <Input label="فرعی" value={inp[0]} disabled></Input>
                           <p>/</p>
                           <Input label="ملک" value={inp[1]} disabled></Input>
                           <p>/</p>
                           <Input
                              className="codeInput"
                              label="بلوک"
                              value={inp[2]}
                              disabled
                           ></Input>
                           <p>/</p>
                           <Input label="محله" value={inp[3]} disabled></Input>
                           <p>/</p>
                           <Input
                              maxLength={3}
                              label="منطقه"
                              value={inp[4]}
                              disabled
                           ></Input>
                        </section>
                        <section className={`SSNNumberStyle_secondSection`}>
                           <span>{inp[0].length ? inp[0] : '---'}</span>/
                           <span>{inp[1].length ? inp[1] : '----'}</span>/
                           <span>{inp[2].length ? inp[2] : '-------'}</span>/
                           <span>{inp[3].length ? inp[3] : '--'}</span>/
                           <span>{inp[4].length ? inp[4] : '---'}</span>
                        </section>
                     </ContainerCard>
                  </div>
               </div>
               <div className="buttonSection">
                  <Button fullWidth>مشاهده جزئیات قبض</Button>
               </div>
            </div>
            <div className="billsSection">
               <div className="billDetails">
                  <div className="part1">
                     <img src={require(`${'./basil_home-solid.png'}`)} alt="" />
                     <p className="addressStyle">
                        بلوار مصلی -کوچه شماره 23-پلاک 3
                     </p>
                  </div>
                  <div className="part2">
                     <ContainerCard
                        className={`SSNNumberStyle`}
                        isInner={true}
                        title="شماره شناسنامه ملک"
                     >
                        <section className={`SSNNumberStyle_firstSection`}>
                           <Input label="فرعی" value={inp[0]} disabled></Input>
                           <p>/</p>
                           <Input label="ملک" value={inp[1]} disabled></Input>
                           <p>/</p>
                           <Input
                              className="codeInput"
                              label="بلوک"
                              value={inp[2]}
                              disabled
                           ></Input>
                           <p>/</p>
                           <Input label="محله" value={inp[3]} disabled></Input>
                           <p>/</p>
                           <Input
                              maxLength={3}
                              label="منطقه"
                              value={inp[4]}
                              disabled
                           ></Input>
                        </section>
                        <section className={`SSNNumberStyle_secondSection`}>
                           <span>{inp[0].length ? inp[0] : '---'}</span>/
                           <span>{inp[1].length ? inp[1] : '----'}</span>/
                           <span>{inp[2].length ? inp[2] : '-------'}</span>/
                           <span>{inp[3].length ? inp[3] : '--'}</span>/
                           <span>{inp[4].length ? inp[4] : '---'}</span>
                        </section>
                     </ContainerCard>
                  </div>
               </div>
               <div className="buttonSection">
                  <Button fullWidth>مشاهده جزئیات قبض</Button>
               </div>
            </div>
         </div>
         <div className="footerSection">
            <p className="footerDetails">Zaravand Co.</p>
         </div>
      </div>
   );
};
export default SubsystemDetais;
