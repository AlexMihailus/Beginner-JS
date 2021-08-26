const sortByKeys = (arr) => {
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    result[typeof arr[i]] = [];
  }
  for (let i = 0; i < arr.length; i++) {
    result[typeof arr[i]].push(arr[i]);
  }
  return result;
}

console.log(sortByKeys(["a", 1, 2, false, "b"]));