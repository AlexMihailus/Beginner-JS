const evensAndOdds = (num) => {
  if (num % 2 === 0) {
    return (num >>> 0).toString(2);
  } else {
    return Math.abs(num).toString(16);
  }
}
console.log(evensAndOdds(2));
console.log(evensAndOdds(13));
console.log(evensAndOdds(-2));