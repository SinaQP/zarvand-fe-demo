const calcBarcode = (billNo: string, paymentNo: string) => {
  let i = 26 - billNo.length - paymentNo.length,
    string,
    zero = '',
    j;
  for (j = 0; j < i; j++) {
    zero += '0';
  }
  string = `${billNo}${zero}${paymentNo}`;
  return string;
};

export default calcBarcode;
