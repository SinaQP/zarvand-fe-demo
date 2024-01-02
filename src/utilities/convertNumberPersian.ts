function convertNumberPersian(num:string) : string{
  if(num && num.length > 0){
    let NewNum = num.replace(/,/g, '');
    return NewNum.replace(/\d/g, function(x) {
        return String.fromCharCode(x.charCodeAt(0) + 1728);
      });
  }
  return "";
}
export default convertNumberPersian;