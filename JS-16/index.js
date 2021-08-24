let wordLength = (str, num) => {
    str = str.replace(/[^a-zа-яё\s]/gi, '');
    let array = str.split(' ');
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > num) {
            result.push(array[i]);
        }
    }
    return result;
}

console.log(wordLength('Сегодня отличный день. С самого утра мы пойдем на озеро, купаться.', 5));
console.log(wordLength('Над городом облака, коридоры, берега, проспект, река.', 7));
