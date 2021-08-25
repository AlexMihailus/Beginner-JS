const spacey = (arr) => {
  let str = '';
  for (i = 0; i < arr.length; i++) {
    str += arr[i];
    arr[i] = str;
  }
  return arr;
}
console.log(spacey(['kevin', 'has', 'no', 'space']));
console.log(spacey(['this', 'cheese', 'has', 'no', 'holes']));