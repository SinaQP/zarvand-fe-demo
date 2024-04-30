import { useContext } from 'react';
import Input from '../../../../../componnents/input';
import moveToPriviousInput from '../../../../../componnents/input/functions/moveToPreviousInput';
import inputOnFocus from '../../../../../componnents/input/functions/inputOnFocus';
import moveToNextInput from '../../../../../componnents/input/functions/moveToNextInput';
import { LoginContext } from '../../context';
import "./index.scss";

const NationalCodeForm = () => {
   const { setNationalCode, nationalCode } = useContext(LoginContext);
   return (
      <div className="national-code-entry__wrapper">
         <Input
            className="national-code-entry__input"
            tabIndex={10}
            maxLength={1}
            id="national-code-10"
            autoComplete="off"
            onChange={(event) => {
               setNationalCode((prevState) => {
                  let newNationalCode =
                     prevState.slice(0, 9) +
                     event.target.value +
                     prevState.slice(9 + 1);
                  return newNationalCode;
               });
            }}
            onFocus={(event) => inputOnFocus(event)}
            onKeyUp={(event) => {
               moveToPriviousInput(event, 'national-code-9', true);
            }}
            value={nationalCode[9]}
         />
         <Input
            className="national-code-entry__input"
            tabIndex={9}
            maxLength={1}
            id="national-code-9"
            autoComplete="off"
            onChange={(event) => {
               setNationalCode((prevState) => {
                  let newNationalCode =
                     prevState.slice(0, 8) +
                     event.target.value +
                     prevState.slice(8 + 1);
                  return newNationalCode;
               });
            }}
            onFocus={(event) => inputOnFocus(event)}
            onKeyUp={(event) => {
               moveToNextInput(event, 'national-code-10');
               moveToPriviousInput(event, 'national-code-8');
            }}
            value={nationalCode[8]}
         />
         <Input
            className="national-code-entry__input"
            tabIndex={8}
            maxLength={1}
            id="national-code-8"
            autoComplete="off"
            onChange={(event) => {
               setNationalCode((prevState) => {
                  let newNationalCode =
                     prevState.slice(0, 7) +
                     event.target.value +
                     prevState.slice(7 + 1);
                  return newNationalCode;
               });
            }}
            onFocus={(event) => inputOnFocus(event)}
            onKeyUp={(event) => {
               moveToNextInput(event, 'national-code-9');
               moveToPriviousInput(event, 'national-code-7');
            }}
            value={nationalCode[7]}
         />
         <Input
            className="national-code-entry__input"
            tabIndex={7}
            maxLength={1}
            id="national-code-7"
            autoComplete="off"
            onChange={(event) => {
               setNationalCode((prevState) => {
                  let newNationalCode =
                     prevState.slice(0, 6) +
                     event.target.value +
                     prevState.slice(6 + 1);
                  return newNationalCode;
               });
            }}
            onFocus={(event) => inputOnFocus(event)}
            onKeyUp={(event) => {
               moveToNextInput(event, 'national-code-8');
               moveToPriviousInput(event, 'national-code-6');
            }}
            value={nationalCode[6]}
         />
         <Input
            className="national-code-entry__input"
            tabIndex={6}
            maxLength={1}
            id="national-code-6"
            autoComplete="off"
            onChange={(event) => {
               setNationalCode((prevState) => {
                  let newNationalCode =
                     prevState.slice(0, 5) +
                     event.target.value +
                     prevState.slice(5 + 1);
                  return newNationalCode;
               });
            }}
            onFocus={(event) => inputOnFocus(event)}
            onKeyUp={(event) => {
               moveToNextInput(event, 'national-code-7');
               moveToPriviousInput(event, 'national-code-5');
            }}
            value={nationalCode[5]}
         />
         <Input
            className="national-code-entry__input"
            tabIndex={5}
            maxLength={1}
            id="national-code-5"
            autoComplete="off"
            onChange={(event) => {
               setNationalCode((prevState) => {
                  let newNationalCode =
                     prevState.slice(0, 4) +
                     event.target.value +
                     prevState.slice(4 + 1);
                  return newNationalCode;
               });
            }}
            onFocus={(event) => inputOnFocus(event)}
            onKeyUp={(event) => {
               moveToNextInput(event, 'national-code-6');
               moveToPriviousInput(event, 'national-code-4');
            }}
            value={nationalCode[4]}
         />
         <Input
            className="national-code-entry__input"
            tabIndex={4}
            maxLength={1}
            id="national-code-4"
            autoComplete="off"
            onChange={(event) => {
               setNationalCode((prevState) => {
                  let newNationalCode =
                     prevState.slice(0, 3) +
                     event.target.value +
                     prevState.slice(3 + 1);
                  return newNationalCode;
               });
            }}
            onFocus={(event) => inputOnFocus(event)}
            onKeyUp={(event) => {
               moveToNextInput(event, 'national-code-5');
               moveToPriviousInput(event, 'national-code-3');
            }}
            value={nationalCode[3]}
         />
         <Input
            className="national-code-entry__input"
            tabIndex={3}
            maxLength={1}
            id="national-code-3"
            autoComplete="off"
            onChange={(event) => {
               setNationalCode((prevState) => {
                  let newNationalCode =
                     prevState.slice(0, 2) +
                     event.target.value +
                     prevState.slice(2 + 1);
                  return newNationalCode;
               });
            }}
            onFocus={(event) => inputOnFocus(event)}
            onKeyUp={(event) => {
               moveToNextInput(event, 'national-code-4');
               moveToPriviousInput(event, 'national-code-2');
            }}
            value={nationalCode[2]}
         />
         <Input
            className="national-code-entry__input"
            tabIndex={2}
            maxLength={1}
            id="national-code-2"
            autoComplete="off"
            onChange={(event) => {
               setNationalCode((prevState) => {
                  let newNationalCode =
                     prevState.slice(0, 1) +
                     event.target.value +
                     prevState.slice(2);
                  return newNationalCode;
               });
            }}
            onFocus={(event) => inputOnFocus(event)}
            onKeyUp={(event) => {
               moveToNextInput(event, 'national-code-3');
               moveToPriviousInput(event, 'national-code-1');
            }}
            value={nationalCode[1]}
         />
         <Input
            className="national-code-entry__input"
            tabIndex={1}
            maxLength={1}
            id="national-code-1"
            autoComplete="off"
            onChange={(event) => {
               setNationalCode((prevState) => {
                  let newNationalCode = event.target.value + prevState.slice(1);
                  return newNationalCode;
               });
            }}
            onFocus={(event) => inputOnFocus(event)}
            onKeyUp={(event) => moveToNextInput(event, 'national-code-2')}
            value={nationalCode[0]}
         />
      </div>
   );
};

export default NationalCodeForm;
