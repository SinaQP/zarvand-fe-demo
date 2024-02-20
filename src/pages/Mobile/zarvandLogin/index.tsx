import React, { useContext, useState } from 'react';
import { LogInProps } from './index.interface';
import './style/index.scss';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../../App.context';
import toast from '../../../utilities/toast';
import { sendVerificationCode } from '../../../apis/login/send-verification-code';

const ZarvandLogIn: React.FC<LogInProps> = () => {
   const history = useHistory();
   const {
      loginEnteredNationalCode,
      setLoginEnteredNationalCode,
      setMaskedPhoneNumber,
   } = useContext(AppContext);

   return (
      <div className="logInSection">
         <div className="dataSection">
            <div className="section1">
               <img src={require(`${'./LOGO 4.png'}`)} alt="" />
               <p className="textStyle">سامانه پرداخت عوارض شهرداری زرند</p>
            </div>
            <div className="section2">
               <div className="inerSec">
                  <p className="textStyle2">لطفا کد ملی خود را وارد کنید.</p>
               </div>
               <div className="textBox">
                  <input
                     type="number"
                     className="inpClass"
                     maxLength={10}
                     minLength={10}
                     onChange={(event) =>
                        setLoginEnteredNationalCode(event.target.value)
                     }
                  />
               </div>
            </div>
            <div className="section3">
               <button
                  className="buttonStyle"
                  onClick={async () => {
                     let isFormValid = true;
                     if (loginEnteredNationalCode.length !== 10) {
                        toast.fire({
                           icon: 'error',
                           title: 'کدملی خود را به درستی وارد کنید.',
                        });
                        isFormValid = false;
                     }
                     if (isFormValid) {
                        const response = await sendVerificationCode({
                           national_code: loginEnteredNationalCode,
                        });
                        if (response.status === 200) {
                           const responseBody = response.body;
                           const personPhoneNumber =
                              responseBody.masked_mobile_number;
                           setMaskedPhoneNumber(personPhoneNumber);
                           history.push('/verfication-code');
                        } else {
                           toast.fire({
                              icon: 'error',
                              title: response.body['message'],
                           });
                        }
                     }
                     
                  }}
               >
                  دریافت کد موقت
               </button>
            </div>
         </div>
      </div>
   );
};
export default ZarvandLogIn;
