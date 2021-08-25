const divisibleByThree = (str) => {
    let arr = str.split('');
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += +arr[i];
      }
    return Number.isInteger(sum / 3);
}

console.log(divisibleByThree('123'));
console.log(divisibleByThree('19254'));
console.log(divisibleByThree('88'));
console.log(divisibleByThree('1'));