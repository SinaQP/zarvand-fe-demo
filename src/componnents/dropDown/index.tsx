import * as React from 'react';
import { useState } from 'react';
import { dropDownInterface } from './index.interface';
import './scss/index.scss';

const DropDown: React.FC<dropDownInterface> = ( selected,setSelected): JSX.Element =>
{
    const[isActive,setIsActive]=React.useState(false)
    return (
        <div className='body' onClick={(e) => setIsActive(!isActive)} >
        <div className="dropDown" >
        <div className="dropDown-btn" onClick={(e) => setIsActive(!isActive)}>
            تعاریف اولیه
        </div>
      { isActive && (
                      <div className="doropDown-content">
                <div className="dropDown-item">Amir</div>
                <div className="dropDown-item">Reza</div>
            </div>
        )}
            </div>
            </div>
); }
export default DropDown;
