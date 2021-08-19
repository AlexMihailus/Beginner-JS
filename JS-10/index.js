let name1 = ['Никита', 'Саша', 'Анастасия', 'Дима', 'Саныч', 'Ольга'];
let name2 = ['Алексей', 'Семён', 'Василиса', 'Дима', 'Максим', 'Ольга'];
let name3 = ['Алишер', 'Ольга'];

let arrayFilterNames = (array) => {
    const unwantedNames = ['Дима', 'Саша', 'Ольга', 'Никита'];
    return array.filter((el) => !unwantedNames.includes(el));
};

console.log(arrayFilterNames(name1));
console.log(arrayFilterNames(name2));
console.log(arrayFilterNames(name3));