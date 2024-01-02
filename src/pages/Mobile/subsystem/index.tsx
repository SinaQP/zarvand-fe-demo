import * as React from 'react';
import { subsystemProp } from './index.interface';
import './style/index.scss';
import { useHistory } from 'react-router-dom';

const ZarvandSubsystem: React.FC<subsystemProp> = () => {
      const history = useHistory();

      return (
            <div className="subsystemPage">
                  <div className="headerSection">
                        <img src={require(`${'./LOGO 4.png'}`)} alt="" />
                        <button
                              className="back"
                              onClick={() => {
                                    history.push('/');
                              }}
                        >
                              &gt;
                        </button>
                  </div>
                  <div className="infoSection">
                        <h3>شهروند گرامی</h3>
                        <p className="infoText">
                              به سامانه پرداخت عوارض شهرداری زرند خوش آمدید.
                              لطفا به جهت پرداخت عوارض مد نظر خود یکی از موارد
                              زیر را انتخاب کنید.
                        </p>
                  </div>
                  <div className="subsystemSection">
                        <button
                              className="enableSubsystemButton"
                              onClick={() => {
                                    history.push('/subsystem-info');
                              }}
                        >
                              عوارض نوسازی
                        </button>
                        <button className="disableSubsytemButton">
                              عوارض کسب و پیشه
                        </button>
                  </div>
                  <div className="footerSection">
                        <p className="footerDetails">Zaravand Co.</p>
                  </div>
            </div>
      );
};
export default ZarvandSubsystem;
