let exampleArray = [1, 2, 3, 4];

let arrayMultiply = (array) => {
    let counter = 1;
    array.forEach(elem => counter *= elem);
    return counter;
}

console.log(arrayMultiply(exampleArray));