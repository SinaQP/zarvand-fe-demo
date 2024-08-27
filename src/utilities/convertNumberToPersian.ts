function convertNumberToPersian(num:string | number) : string{
  let convertNum = String(num);
  if(num && convertNum.length > 0){
    let NewNum = convertNum.replace(/,/g, '');
    return NewNum.replace(/\d/g, function(x) {
        return String.fromCharCode(x.charCodeAt(0) + 1728);
      });
  }
  return "";
}
export default convertNumberToPersian;