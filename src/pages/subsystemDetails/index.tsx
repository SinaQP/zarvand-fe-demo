import * as React from 'react';
import { subsystemDetailsProps } from './index.interface';
import './style/index.scss';
import { useHistory } from 'react-router-dom';
const SubsystemDetais: React.FC<subsystemDetailsProps> = () => {
      const history = useHistory();
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
                                    <img
                                          src={require(`${'./LOGO 4.png'}`)}
                                          alt=""
                                    />
                              </div>
                              <div className="innerSection2">
                                    <div className="infoSection">
                                          <p className="infoText">
                                                ملک های زیر در سیستم به نام شما
                                                ثبت شده‌اند. شما با انتخاب هر یک
                                                از آن‌ها،می‌توانید صورتحساب
                                                مربوط به آن را مشاهده و اقدام به
                                                پرداخت نمایید.
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className="billsSection">
                        <div className="unpaidBills">
                              <div className="billPreview">
                                    <div className="part1">
                                          <img
                                                src={require(`${'./basil_home-solid.png'}`)}
                                                alt=""
                                          />
                                          <p className='addressStyle'>بلوار مصلی -کوچه شماره 23-پلاک 3</p>
                                    </div>
                                    <div className="part2"></div>
                              </div>
                        </div>
                        <div className="paidBills"></div>
                  </div>
                  <div className="footerSection">
                        <p className="footerDetails">Zaravand Co.</p>
                  </div>
            </div>
      );
};
export default SubsystemDetais;
