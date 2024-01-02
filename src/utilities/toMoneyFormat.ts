function toMoneyFormat(amount: string, decimals: number = 0) {
  // Remove all non-numeric characters from the string.
  const numberString = amount?.replace(/\D/g, '');

  // Convert the string to a number.
  const number = parseFloat(numberString);

  // Format the number as a currency string.
  const currencyFormatter = new Intl.NumberFormat('fa-IR', {
    style: 'decimal',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return currencyFormatter.format(number);
}
export default toMoneyFormat;
