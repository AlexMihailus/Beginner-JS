let num1 = +prompt('Введите первое число', '');
let num2 = +prompt('Введите второе число', '');

if (num1 > num2) {
    alert(num1 + num2);
} else if (num1 < num2) {
    alert(num1 * num2);
}
else {
    alert('Числа одинаковые');
}