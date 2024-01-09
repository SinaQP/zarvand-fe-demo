import { FC } from 'react';
import Fieldset from '../fieldset';
import ContainerCard from '../containerCard';
import './_index.scss';
import Props from './props.interface';

const PropertyNumberInput: FC<Props> = ({ inp, setInp, className }) => {
   return (
      <ContainerCard
         className={`SSNNumberStyle ${className}`}
         isInner={true}
         title="شماره شناسنامه ملک"
      >
         <section className={`SSNNumberStyle_firstSection`}>
            <Fieldset
               label="فرعی"
               inputProps={{
                  value: inp[0],
                  className: 'SSNNumberStyle__input',
                  maxLength: 3,
                  onChange: (event) =>
                     setInp((prevState) => {
                        let value = [...prevState];
                        value[0] = event.target.value;
                        return value;
                     }),
               }}
               className="SSNNumberStyle__fieldset"
            />
            <Fieldset
               label="ملک"
               inputProps={{
                  value: inp[1],
                  maxLength: 4,
                  className: 'SSNNumberStyle__input',
                  onChange: (event) =>
                     setInp((prevState) => {
                        let value = [...prevState];
                        value[1] = event.target.value;
                        return value;
                     }),
               }}
               className="SSNNumberStyle__fieldset"
            />
            <Fieldset
               label="بلوک"
               inputProps={{
                  value: inp[2],
                  maxLength: 7,
                  className: 'SSNNumberStyle__input',
                  onChange: (event) =>
                     setInp((prevState) => {
                        let value = [...prevState];
                        value[2] = event.target.value;
                        return value;
                     }),
               }}
               className="SSNNumberStyle__fieldset SSNNumberStyle__fieldset--large"
            />
            <Fieldset
               label="محله"
               inputProps={{
                  value: inp[3],
                  maxLength: 2,
                  className: 'SSNNumberStyle__input',
                  onChange: (event) =>
                     setInp((prevState) => {
                        let value = [...prevState];
                        value[3] = event.target.value;
                        return value;
                     }),
               }}
               className="SSNNumberStyle__fieldset"
            />
            <Fieldset
               label="منطقه"
               inputProps={{
                  maxLength: 3,
                  value: inp[4],
                  className: 'SSNNumberStyle__input',
                  onChange: (event) =>
                     setInp((prevState) => {
                        let value = [...prevState];
                        value[4] = event.target.value;
                        return value;
                     }),
               }}
               className="SSNNumberStyle__fieldset"
            />
         </section>
         <section className={`SSNNumberStyle_secondSection`}>
            <span>{inp[0].length ? inp[0] : '---'}</span>/
            <span>{inp[1].length ? inp[1] : '----'}</span>/
            <span>{inp[2].length ? inp[2] : '-------'}</span>/
            <span>{inp[3].length ? inp[3] : '--'}</span>/
            <span>{inp[4].length ? inp[4] : '---'}</span>
         </section>
      </ContainerCard>
   );
};

export default PropertyNumberInput;
