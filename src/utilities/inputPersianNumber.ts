export const InputPersianNumber = (
  event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
) => {
  const persian_numbers: any = {
    '0': '۰',
    '1': '۱',
    '2': '۲',
    '3': '۳',
    '4': '۴',
    '5': '۵',
    '6': '۶',
    '7': '۷',
    '8': '۸',
    '9': '۹',
  };
  const lastCharecter = event.target.value.split('').pop();
  const isLastCharecterNumber = !isNaN(Number(lastCharecter));
  if (lastCharecter && isLastCharecterNumber && lastCharecter !== ' ') {
    event.target.value =
      event.target.value.slice(0, -1) + persian_numbers[lastCharecter];
  }
};
