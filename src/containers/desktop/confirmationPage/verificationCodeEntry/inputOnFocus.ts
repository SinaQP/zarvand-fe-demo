import { FocusEvent } from 'react';

const inputOnFocus = (event: FocusEvent<HTMLInputElement>) => {
      const input = event.target;
      input.setSelectionRange(0, input.value.length);
};

export default inputOnFocus;
