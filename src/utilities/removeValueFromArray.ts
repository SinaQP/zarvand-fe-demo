export function removeValueFromArray(arr: any, valueToRemove: any): any {
  let index = arr.indexOf(valueToRemove);

  if (index !== -1) {
    arr.splice(index, 1);
  }
  return arr;
}
