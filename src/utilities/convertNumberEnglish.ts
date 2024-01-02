function convertNumberEnglish(num: string): string {
  let NewNum = num?.replace(/,/g, '');
  NewNum = num?.replace(/,/g, '');
  return NewNum?.replace(/[۰-۹]/g, function (x) {
    return String.fromCharCode(x.charCodeAt(0) - 1728);
  });
}
export default convertNumberEnglish;
