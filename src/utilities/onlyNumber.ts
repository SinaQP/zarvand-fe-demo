import { FormEvent } from 'react';

// function for onInput handler that making input accept only Number
const onlyNumber = (event: FormEvent<HTMLDivElement>) => {
  /**
   * @param {FormEvent} event -> default onInput Event
   */
  const input = event.target as HTMLInputElement;
  const inputValue: string = input.value;

  if (inputValue !== '') {
    const isNanInputValue = isNaN(Number(inputValue));
    if (isNanInputValue) {
      // Set input value empty
      input.value = input.value.slice(0, -1);
    }
  }
};
export default onlyNumber;
