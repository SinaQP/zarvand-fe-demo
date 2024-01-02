import React from 'react';
import { LogInProps } from './index.interface';
import './style/index.scss';
import background from './image 3.png';
import { useHistory } from 'react-router-dom';

const ChangePhoneNumber: React.FC<LogInProps> = () => {
      const history = useHistory();

      return (
            <div className="changeNumberSection">
                  <button
                        className="back"
                        onClick={() => {
                              history.push('/');
                        }}
                  >
                        &gt;
                  </button>
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
                                          لطفا شماره موبایل مطابق با کد ملی خود
                                          را وارد فرمایید
                                    </p>
                              </div>
                              <div className="section2">
                                    <div className="textBox">
                                          <input
                                                type="number"
                                                className="inpClass"
                                                maxLength={10}
                                                minLength={10}
                                          />
                                    </div>
                              </div>
                        </div>
                        <div className="section3">
                                              <button className="buttonStyle" onClick={ () => {
            history.push('/verfication-code');
          }}>دریافت کد موقت</button>
                        </div>
                  </div>
            </div>
      );
};
export default ChangePhoneNumber;
