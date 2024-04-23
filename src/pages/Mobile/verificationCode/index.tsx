import React, { useContext, useState } from 'react';
import { LogInProps } from './index.interface';
import './style/index.scss';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../../App.context';
import Input from '../../../componnents/input';
import inputOnFocus from '../../../componnents/input/functions/inputOnFocus';
import moveToNextInput from '../../../componnents/input/functions/moveToNextInput';
import moveToPriviousInput from '../../../componnents/input/functions/moveToPreviousInput';
import { validateSmsCode } from '../../../apis/login/validate-sms-code';
import toast from '../../../utilities/toast';

const VerificationCode: React.FC<LogInProps> = () => {
   const history = useHistory();
   const {
      maskedPhoneNumber,
      setToken,
      setUser,
      setSubsystems,
      loginEnteredNationalCode,
   } = useContext(AppContext);
   const [verificationCode, setVerificationCode] = useState('      ');
   return (
      <div className="CodeSection">
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
               <p className="textStyle">سامانه پرداخت عوارض شهرداری زرند</p>
            </div>
            <div className="section2">
               <div className="inerSec">
                  <p className="textStyle2">
                     لطفا کد ارسال شده به شماره{' '}
                     <span>
                        {maskedPhoneNumber.slice(8, 11) +
                           maskedPhoneNumber.slice(4, 8) +
                           maskedPhoneNumber.slice(0, 4)}
                     </span>{' '}
                     را وارد نمایید
                  </p>
               </div>
               <div className="codeArea">
                  <div className="textBox">
                     <Input
                        className="inp"
                        type="number"
                        tabIndex={6}
                        maxLength={1}
                        onFocus={(event) => inputOnFocus(event)}
                        id="verification-code-6"
                        onKeyUp={(event) => {
                           moveToPriviousInput(
                              event,
                              'verification-code-5',
                              true,
                           );
                        }}
                        onChange={(event) => {
                           setVerificationCode((prevState) => {
                              let newVerificationCode =
                                 prevState.slice(0, 5) +
                                 event.target.value +
                                 prevState.slice(5 + 1);
                              return newVerificationCode;
                           });
                        }}
                        value={verificationCode[5]}
                     />
                  </div>
                  <div className="textBox">
                     <Input
                        className="inp"
                        type="number"
                        tabIndex={5}
                        maxLength={1}
                        id="verification-code-5"
                        onFocus={(event) => inputOnFocus(event)}
                        onKeyUp={(event) => {
                           moveToNextInput(event, 'verification-code-6');
                           moveToPriviousInput(event, 'verification-code-4');
                        }}
                        onChange={(event) => {
                           setVerificationCode((prevState) => {
                              let newVerificationCode =
                                 prevState.slice(0, 4) +
                                 event.target.value +
                                 prevState.slice(4 + 1);
                              return newVerificationCode;
                           });
                        }}
                        value={verificationCode[4]}
                     />
                  </div>
                  <div className="textBox">
                     <Input
                        className="inp"
                        type="number"
                        tabIndex={4}
                        maxLength={1}
                        id="verification-code-4"
                        onFocus={(event) => inputOnFocus(event)}
                        onKeyUp={(event) => {
                           moveToNextInput(event, 'verification-code-5');
                           moveToPriviousInput(event, 'verification-code-3');
                        }}
                        onChange={(event) => {
                           setVerificationCode((prevState) => {
                              let newVerificationCode =
                                 prevState.slice(0, 3) +
                                 event.target.value +
                                 prevState.slice(3 + 1);
                              return newVerificationCode;
                           });
                        }}
                        value={verificationCode[3]}
                     />
                  </div>
                  <div className="textBox">
                     <Input
                        className="inp"
                        type="number"
                        tabIndex={3}
                        maxLength={1}
                        onFocus={(event) => inputOnFocus(event)}
                        id="verification-code-3"
                        onKeyUp={(event) => {
                           moveToNextInput(event, 'verification-code-4');
                           moveToPriviousInput(event, 'verification-code-2');
                        }}
                        onChange={(event) => {
                           setVerificationCode((prevState) => {
                              let newVerificationCode =
                                 prevState.slice(0, 2) +
                                 event.target.value +
                                 prevState.slice(2 + 1);
                              return newVerificationCode;
                           });
                        }}
                        value={verificationCode[2]}
                     />{' '}
                  </div>
                  <div className="textBox">
                     <Input
                        className="inp"
                        type="number"
                        tabIndex={2}
                        maxLength={1}
                        id="verification-code-2"
                        onFocus={(event) => inputOnFocus(event)}
                        onKeyUp={(event) => {
                           moveToNextInput(event, 'verification-code-3');
                           moveToPriviousInput(event, 'verification-code-1');
                        }}
                        onChange={(event) => {
                           setVerificationCode((prevState) => {
                              let newVerificationCode =
                                 prevState.slice(0, 1) +
                                 event.target.value +
                                 prevState.slice(1 + 1);
                              return newVerificationCode;
                           });
                        }}
                        value={verificationCode[1]}
                     />
                  </div>
                  <div className="textBox">
                     <Input
                        className="inp"
                        type="number"
                        tabIndex={1}
                        maxLength={1}
                        id="verification-code-1"
                        onFocus={(event) => inputOnFocus(event)}
                        onKeyUp={(event) =>
                           moveToNextInput(event, 'verification-code-2')
                        }
                        onChange={(event) => {
                           setVerificationCode((prevState) => {
                              let newVerificationCode =
                                 event.target.value + prevState.slice(1);
                              return newVerificationCode;
                           });
                        }}
                        value={verificationCode[0]}
                     />
                  </div>
               </div>
               <div className="info">
                  <p className="infoP">
                     در صورت عدم دریافت کد می‌توانید نسبت به تغییر شماره همراه
                     خود اقدام کنید
                  </p>
               </div>
            </div>
            <div
               className="section3"
               onClick={() => {
                  history.push('/');
               }}
            >
               <p className="changeNumberP">تغییر کدملی</p>
            </div>
            <div className="section4">
               <button
                  className="buttonStyle"
                  onClick={async () => {
                     const response = await validateSmsCode({
                        national_code: loginEnteredNationalCode,
                        code: verificationCode,
                     });
                     const responseBody = response.body;

                     if (response.status === 200) {
                        setToken(responseBody.token);
                        setUser(responseBody.user);
                        setSubsystems(() => responseBody.subsystems);
                        history.push('subsystem');
                     } else {
                        toast.fire({
                           icon: 'error',
                           title: responseBody['message'],
                        });
                     }
                  }}
               >
                  ورود
               </button>
            </div>
         </div>
      </div>
   );
};
export default VerificationCode;
