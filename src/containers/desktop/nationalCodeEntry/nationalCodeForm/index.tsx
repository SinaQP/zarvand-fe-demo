import { useContext } from 'react';
import Input from '../../../../componnents/input';
import inputOnFocus from '../../../../componnents/input/inputOnFocus';
import moveToNextInput from '../../../../componnents/input/moveToNextInput';
import moveToPriviousInput from '../../../../componnents/input/moveToPreviousInput';
import { LoginContext } from '../../../../pages/desktop/login/context';

const NationalCodeForm = () => {
   const { setNationalCode } = useContext(LoginContext);
   return (
      <div className="national-code-entry__wrapper">
         <Input
            className="national-code-entry__input"
            tabIndex={10}
            maxLength={1}
            id="national-code-10"
            autoComplete="off"
            onChange={(event) =>
               setNationalCode((prevState) => {
                  prevState[9] = event.target.value;
                  return prevState;
               })
            }
            onFocus={(event) => inputOnFocus(event)}
            onKeyUp={(event) => {
               moveToPriviousInput(event, 'national-code-9', true);
            }}
         />
         <Input
            className="national-code-entry__input"
            tabIndex={9}
            maxLength={1}
            id="national-code-9"
            autoComplete="off"
            onChange={(event) => {
               setNationalCode((prevState) => {
                  prevState[8] = event.target.value;
                  return prevState;
               });
            }}
            onFocus={(event) => inputOnFocus(event)}
            onKeyUp={(event) => {
               moveToNextInput(event, 'national-code-10');
               moveToPriviousInput(event, 'national-code-8');
            }}
         />
         <Input
            className="national-code-entry__input"
            tabIndex={8}
            maxLength={1}
            id="national-code-8"
            autoComplete="off"
            onChange={(event) => {
               setNationalCode((prevState) => {
                  prevState[7] = event.target.value;
                  return prevState;
               });
            }}
            onFocus={(event) => inputOnFocus(event)}
            onKeyUp={(event) => {
               moveToNextInput(event, 'national-code-9');
               moveToPriviousInput(event, 'national-code-7');
            }}
         />
         <Input
            className="national-code-entry__input"
            tabIndex={7}
            maxLength={1}
            id="national-code-7"
            autoComplete="off"
            onChange={(event) => {
               setNationalCode((prevState) => {
                  prevState[6] = event.target.value;
                  return prevState;
               });
            }}
            onFocus={(event) => inputOnFocus(event)}
            onKeyUp={(event) => {
               moveToNextInput(event, 'national-code-8');
               moveToPriviousInput(event, 'national-code-6');
            }}
         />
         <Input
            className="national-code-entry__input"
            tabIndex={6}
            maxLength={1}
            id="national-code-6"
            autoComplete="off"
            onChange={(event) => {
               setNationalCode((prevState) => {
                  prevState[5] = event.target.value;
                  return prevState;
               });
            }}
            onFocus={(event) => inputOnFocus(event)}
            onKeyUp={(event) => {
               moveToNextInput(event, 'national-code-7');
               moveToPriviousInput(event, 'national-code-5');
            }}
         />
         <Input
            className="national-code-entry__input"
            tabIndex={5}
            maxLength={1}
            id="national-code-5"
            autoComplete="off"
            onChange={(event) => {
               setNationalCode((prevState) => {
                  prevState[4] = event.target.value;
                  return prevState;
               });
            }}
            onFocus={(event) => inputOnFocus(event)}
            onKeyUp={(event) => {
               moveToNextInput(event, 'national-code-6');
               moveToPriviousInput(event, 'national-code-4');
            }}
         />
         <Input
            className="national-code-entry__input"
            tabIndex={4}
            maxLength={1}
            id="national-code-4"
            autoComplete="off"
            onChange={(event) => {
               setNationalCode((prevState) => {
                  prevState[3] = event.target.value;
                  return prevState;
               });
            }}
            onFocus={(event) => inputOnFocus(event)}
            onKeyUp={(event) => {
               moveToNextInput(event, 'national-code-5');
               moveToPriviousInput(event, 'national-code-3');
            }}
         />
         <Input
            className="national-code-entry__input"
            tabIndex={3}
            maxLength={1}
            id="national-code-3"
            autoComplete="off"
            onChange={(event) => {
               setNationalCode((prevState) => {
                  prevState[2] = event.target.value;
                  return prevState;
               });
            }}
            onFocus={(event) => inputOnFocus(event)}
            onKeyUp={(event) => {
               moveToNextInput(event, 'national-code-4');
               moveToPriviousInput(event, 'national-code-2');
            }}
         />
         <Input
            className="national-code-entry__input"
            tabIndex={2}
            maxLength={1}
            id="national-code-2"
            autoComplete="off"
            onChange={(event) => {
               setNationalCode((prevState) => {
                  prevState[1] = event.target.value;
                  return prevState;
               });
            }}
            onFocus={(event) => inputOnFocus(event)}
            onKeyUp={(event) => {
               moveToNextInput(event, 'national-code-3');
               moveToPriviousInput(event, 'national-code-1');
            }}
         />
         <Input
            className="national-code-entry__input"
            tabIndex={1}
            maxLength={1}
            id="national-code-1"
            autoComplete="off"
            onChange={(event) => {
               setNationalCode((prevState) => {
                  prevState[0] = event.target.value;
                  console.log(prevState);
                  return prevState;
               });
            }}
            onFocus={(event) => inputOnFocus(event)}
            onKeyUp={(event) => moveToNextInput(event, 'national-code-2')}
         />
      </div>
   );
};

export default NationalCodeForm;
