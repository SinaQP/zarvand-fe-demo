import React from "react";
import { LogInProps } from "./index.interface";
import './style/index.scss';
import background from './image 3.png'
const ZarvandLogIn: React.FC<LogInProps> = () =>
{
    return <div className="logInSection">
        <div className="dataSection">
            <div className="section1">
            <img src={require(`${'./LOGO 4.png'}`)} alt="" />
            <p className="textStyle">سامانه پرداخت عوارض شهرداری زرند</p>
            </div>
            <div className="section2">
                <div className="inerSec">
                <p className="textStyle2">لطفا شماره همراه خود را وارد کنید</p>
                </div>
                <div className="textBox">
                    <input type="number" className="inpClass" placeholder="0913..." />
                </div>
            </div>
            <div className="section3">
                <button className="buttonStyle">دریافت کد موقت</button>
            </div>
        </div>
    </div>
}
export default ZarvandLogIn;