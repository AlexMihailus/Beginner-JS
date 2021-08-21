// let hexToDec = (hex) => parseInt(hex, 16);

let hexToDec = (hex) => {
    let dec = 0;
    let str = hex.replace(/[^a-zA-Z0-9]/g, '');
    str = str.toLowerCase();
    for (i = 0; i < str.length; i++) {
        let hexToDec = 16 ** (str.length - 1 - i);
        switch (str[i]) {
            case 'a':
                dec += 10 * hexToDec;
                break;
            case 'b':
                dec += 11 * hexToDec;
                break;
            case 'c':
                dec += 12 * hexToDec;
                break;
            case 'd':
                dec += 13 * hexToDec;
                break;
            case 'e':
                dec += 14 * hexToDec;
                break;
            case 'f':
                dec += 15 * hexToDec;
                break;
            default:
                dec += str[i] * hexToDec;
        }
    }
    return dec;
}
console.log(hexToDec('1'));
console.log(hexToDec('a'));
console.log(hexToDec('10'));
console.log(hexToDec('FF'));
console.log(hexToDec('-C'));