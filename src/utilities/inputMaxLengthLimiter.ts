import { ChangeEvent } from 'react';

const inputMaxLengthLimiter = (
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  maxLength: number,
) => {
  event.target.value = event.target.value.slice(0, maxLength);
};

export default inputMaxLengthLimiter;
