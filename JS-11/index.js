let array1 = [5, 2, 2];
let array2 = [9, 7, 2];

let arrayMultiplyDifference = (arr1, arr2) => arr1.reduce((total, amount) => total * amount) - arr2.reduce((total, amount) => total * amount);

console.log(arrayMultiplyDifference(array1, array2));