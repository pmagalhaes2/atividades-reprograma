function orderArray(array) {
  array = array.sort(function (a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
    // return a - b;
  });
  console.log(array)
  console.log(`Menor valor do array: ${array[0]}`);
  console.log(`Maior valor do array: ${array[array.length - 1]}`);
}


orderArray([8.5, 2, 13, 1, 1.2, 7]);

