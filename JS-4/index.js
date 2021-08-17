let names1 = ['Саша', 'Петя', 'Оксана'];
names1.reverse();
names1[1] = "Олег";

let names2 = ['Саша', 'Петя', 'Оксана'];
let names3 = [names2[2], 'Олег', names2[0]];

console.log(names1, names2, names3);