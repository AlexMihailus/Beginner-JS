let maxDiff = (array) => {
    array.sort((a, b) => a - b);
    if (array.length == 0 || array.length == 1) {
        return 0;
    } else {
        return array[array.length - 1] - array[0];
    }
}

console.log(maxDiff([0, 1, 2, 3, 4, 5, 6])); 
console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6])); 
console.log(maxDiff([0, 1, 2, 3, 4, 5, 16])); 
console.log(maxDiff([16])); 
console.log(maxDiff([]));