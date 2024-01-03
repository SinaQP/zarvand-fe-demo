import Input from '../../input';
import inputOnFocus from '../inputOnFocus';
import moveToNextInput from '../moveToNextInput';
import moveToPriviousInput from '../moveToPreviousInput';

const NationalCodeForm = () => {
      return (
            <>
                  <Input
                        className="national-code-page__input"
                        tabIndex={10}
                        maxLength={1}
                        id="national-code-10"
                        onFocus={(event) => inputOnFocus(event)}
                        onKeyDown={(event) => {
                              moveToPriviousInput(event, 'national-code-9');
                        }}
                  />
                  <Input
                        className="national-code-page__input"
                        tabIndex={9}
                        maxLength={1}
                        id="national-code-9"
                        onFocus={(event) => inputOnFocus(event)}
                        onKeyUp={(event) =>
                              moveToNextInput(event, 'national-code-10')
                        }
                        onKeyDown={(event) => {
                              moveToPriviousInput(event, 'national-code-8');
                        }}
                  />
                  <Input
                        className="national-code-page__input"
                        tabIndex={8}
                        maxLength={1}
                        id="national-code-8"
                        onFocus={(event) => inputOnFocus(event)}
                        onKeyUp={(event) =>
                              moveToNextInput(event, 'national-code-9')
                        }
                        onKeyDown={(event) => {
                              moveToPriviousInput(event, 'national-code-7');
                        }}
                  />
                  <Input
                        className="national-code-page__input"
                        tabIndex={7}
                        maxLength={1}
                        id="national-code-7"
                        onFocus={(event) => inputOnFocus(event)}
                        onKeyUp={(event) =>
                              moveToNextInput(event, 'national-code-8')
                        }
                        onKeyDown={(event) => {
                              moveToPriviousInput(event, 'national-code-6');
                        }}
                  />
                  <Input
                        className="national-code-page__input"
                        tabIndex={6}
                        maxLength={1}
                        id="national-code-6"
                        onFocus={(event) => inputOnFocus(event)}
                        onKeyUp={(event) =>
                              moveToNextInput(event, 'national-code-7')
                        }
                        onKeyDown={(event) => {
                              moveToPriviousInput(event, 'national-code-5');
                        }}
                  />
                  <Input
                        className="national-code-page__input"
                        tabIndex={5}
                        maxLength={1}
                        id="national-code-5"
                        onFocus={(event) => inputOnFocus(event)}
                        onKeyUp={(event) =>
                              moveToNextInput(event, 'national-code-6')
                        }
                        onKeyDown={(event) => {
                              moveToPriviousInput(event, 'national-code-4');
                        }}
                  />
                  <Input
                        className="national-code-page__input"
                        tabIndex={4}
                        maxLength={1}
                        id="national-code-4"
                        onFocus={(event) => inputOnFocus(event)}
                        onKeyUp={(event) =>
                              moveToNextInput(event, 'national-code-5')
                        }
                        onKeyDown={(event) => {
                              moveToPriviousInput(event, 'national-code-3');
                        }}
                  />
                  <Input
                        className="national-code-page__input"
                        tabIndex={3}
                        maxLength={1}
                        id="national-code-3"
                        onFocus={(event) => inputOnFocus(event)}
                        onKeyUp={(event) =>
                              moveToNextInput(event, 'national-code-4')
                        }
                        onKeyDown={(event) => {
                              moveToPriviousInput(event, 'national-code-2');
                        }}
                  />
                  <Input
                        className="national-code-page__input"
                        tabIndex={2}
                        maxLength={1}
                        id="national-code-2"
                        onFocus={(event) => inputOnFocus(event)}
                        onKeyUp={(event) =>
                              moveToNextInput(event, 'national-code-3')
                        }
                        onKeyDown={(event) => {
                              moveToPriviousInput(event, 'national-code-1');
                        }}
                  />
                  <Input
                        className="national-code-page__input"
                        tabIndex={1}
                        maxLength={1}
                        id="national-code-1"
                        onFocus={(event) => inputOnFocus(event)}
                        onKeyUp={(event) =>
                              moveToNextInput(event, 'national-code-2')
                        }
                  />
            </>
      );
};

export default NationalCodeForm;
