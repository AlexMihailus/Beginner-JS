let arrayBetweenTwoNumbers = (a, b) => {
    array = [];
    for (var i = 0; a <= b; i++) {
        array[i] = a++;
    }
    return array;
}
console.log(arrayBetweenTwoNumbers(1, 4));
console.log(arrayBetweenTwoNumbers(-2, 2));
console.log(arrayBetweenTwoNumbers(20, 25));