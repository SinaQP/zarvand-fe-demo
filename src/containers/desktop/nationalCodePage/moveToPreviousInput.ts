import { KeyboardEvent } from 'react';

const moveToPriviousInput = (
      event: KeyboardEvent<HTMLInputElement>,
      previousInputId: string,
      isLastInput: boolean = false,
) => {
      const { key } = event;

      if (key === 'Backspace') {
            event.currentTarget.value = '';
            const previousInput = document.getElementById(
                  previousInputId,
            )! as HTMLInputElement;

            previousInput.focus();
      }
};

export default moveToPriviousInput;
