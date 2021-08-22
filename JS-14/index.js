const remove = (str, n) => str.replace(/!/g, match => n-- > 0 ? '' : match);

console.log(remove("Hi!",1));
console.log(remove("Hi!",100)); 
console.log(remove("Hi!!!",1));
console.log(remove("Hi!!!",100));
console.log(remove("!Hi",1));
console.log(remove("!Hi!",1));
console.log(remove("!Hi!",100));
console.log(remove("!!!Hi !!hi!!! !hi",1));
console.log(remove("!!!Hi !!hi!!! !hi",3));
console.log(remove("!!!Hi !!hi!!! !hi",5));
console.log(remove("!!!Hi !!hi!!! !hi",100));