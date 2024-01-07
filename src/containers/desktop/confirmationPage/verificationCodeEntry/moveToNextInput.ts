import { KeyboardEvent } from 'react';

const moveToNextInput = (
      event: KeyboardEvent<HTMLInputElement>,
      nextInputId: string,
) => {
      const currentInput = event.currentTarget;
      if (currentInput.value.length >= currentInput.maxLength) {
            const nextInput = document.getElementById(
                  nextInputId,
            )! as HTMLInputElement;
            if (event.code !== 'Tab') nextInput.focus();
      }
};

export default moveToNextInput;
