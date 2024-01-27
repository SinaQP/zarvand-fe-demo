import React from 'react';
import { LogInProps } from './index.interface';
import './style/index.scss';
import { useHistory } from 'react-router-dom';

const VerificationCode: React.FC<LogInProps> = () =>
{
      
  const history = useHistory();


      return (
            <div className="CodeSection">
                  <button className="back" onClick={ () => {
            history.push('/');
          }}>&gt;</button>
                  <div className="dataSection">
                        <div className="section1">
                              <img src={require(`${'./LOGO 4.png'}`)} alt="" />
                              <p className="textStyle">
                                    سامانه پرداخت عوارض شهرداری زرند
                              </p>
                        </div>
                        <div className="section2">
                              <div className="inerSec">
                                    <p className="textStyle2">
                                          لطفا کد ارسال شده به شماره 535****0913 را وارد نمایید
                                    </p>
                              </div>
                              <div className="codeArea">
                                    <div className="textBox">
                                          <input
                                                // type="number"
                                                className="inp"
                                                max={9}
                                                min={0}
                                                maxLength={1}
                                                tabIndex={1}
                                  minLength={ 1 }
                                  
                                          />
                                    </div>
                                    <div className="textBox">
                                          <input
                                                // type="number"
                                                className="inp"
                                                max={'9'}
                                                maxLength={1}
                                                tabIndex={2}
                                          />
                                    </div>
                                    <div className="textBox">
                                          <input
                                                type="number"
                                                className="inp"
                                          />
                                    </div>
                                    <div className="textBox">
                                          <input
                                                type="number"
                                                className="inp"
                                          />
                                    </div>
                                    <div className="textBox">
                                          <input
                                                type="number"
                                                className="inp"
                                          />
                                    </div>
                                    <div className="textBox">
                                          <input
                                                type="number"
                                                className="inp"
                                          />
                                    </div>
                              </div>
                              <div className="info">
                                    <p className="infoP">
                                          در صورت عدم دریافت کد می‌توانید نسبت
                                          به تغییر شماره همراه خود اقدام کنید
                                    </p>
                              </div>
                        </div>
                                    <div className="section3" onClick={ () => {
            history.push('/change-phone-number');
          }}>
                                          {/* <a href="/change-phone-number">تغییر شماره تلفن</a> */}
                                          <p className="changeNumberP" >
                                                تغییر شماره تلفن
                                          </p>
                                    </div>
                        <div className="section4">
                              <button className="buttonStyle" onClick={ () => {
            history.push('/subsystem');
          }}>ورود</button>
                        </div>
                  </div>
            </div>
      );
};
export default VerificationCode;
