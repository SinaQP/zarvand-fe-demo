const persianNumbersToEnglish = (text: string) => {
  const splitedText = text.split('');
  const english_numbers: any = {
    '۰': '0',
    '۱': '1',
    '۲': '2',
    '۳': '3',
    '۴': '4',
    '۵': '5',
    '۶': '6',
    '۷': '7',
    '۸': '8',
    '۹': '9',
  };
  for (let char in splitedText) {
    if (text[char] in english_numbers) {
      splitedText[char] = english_numbers[text[char]];
    }
  }

  return splitedText.join('');
};

export default persianNumbersToEnglish;
