let arrayNumbers = [10, 20, 30, 50, 235, 3000];

let arrayFilter = arrayNumbers.filter(item => String(item)[0] == 1
    || String(item)[0] == 2 || String(item)[0] == 5);
alert(arrayFilter);