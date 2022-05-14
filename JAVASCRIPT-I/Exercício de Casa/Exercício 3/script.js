// Exercício 1
function countRepeatedNumbers(array, numberRequest) {
  const arrayRepeatedNumbers = array.filter((number) => {
    if (number === numberRequest) return number;
  });
  console.log(arrayRepeatedNumbers);
  console.log(
    `Explanation: Frequency of ${numberRequest} is ${arrayRepeatedNumbers.length}`
  );
}

countRepeatedNumbers([1, 1, 1, 1, 2], 1);


// Exercício 2
function countRepeatedLetters(array, letterRequest) {
  let count = 0
  for(let word of array) {
    for(let letter of word) {
      if(letter === letterRequest) {
        count++
        }
      }
    }
    console.log(`Frequency of '${letterRequest}' is ${count}`)
}

countRepeatedLetters(["abacaxi", "lousa", "amora"], "a")
