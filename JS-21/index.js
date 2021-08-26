const switcheroo = (str) => {
  return str.replace(/[ab]/g, ($1) => { return $1 === 'a' ? 'b' : 'a' });
}
console.log(switcheroo('abc'));
console.log(switcheroo('aaabcccbaaa'));
console.log(switcheroo('ccccc'));
console.log(switcheroo('acb'));
console.log(switcheroo('aabacbaa'));