// Desafio 1
function compareTrue(parameter1, parameter2) {
  if (parameter1 === true && parameter2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height, areaTotal) {
  areaTotal = (base * height) / 2;

  return areaTotal;
}

// Desafio 3
function splitSentence(string = [], result) {
  result = string;
  return result.split(' ');
}

// Desafio 4
function concatName(array) {
  let test = array.length;
  let string = (array[test - 1] + ", " + array[0]);
  console.log(test);

  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins * 3;
  let empates = ties * 1;
  let totalPoints = vitorias + empates;

  return totalPoints;
}

// Desafio 6
function highestCount(numbers) {
  let larger = "";
  let counter = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > larger || larger === "") {
      larger = numbers[index];
    }
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === larger) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(arrayNum) {
  let strings = [];
  for (let index = 0; index < arrayNum.length; index += 1) {
    if (arrayNum[index] % 3 === 0 && arrayNum[index] % 5 !== 0) {
      strings[index] = 'fizz';
    } else if (arrayNum[index] % 5 === 0 && arrayNum[index] % 3 !== 0) {
      strings[index] = 'buzz';
    } else if (arrayNum[index] % 3 === 0 && arrayNum[index] % 5 === 0) {
      strings[index] = 'fizzBuzz';
    } else {
      strings[index] = 'bug!';
    }
  }
  return strings;
}

// Desafio 9
function encode(messageEncode) {
  // let messageEncode = 'hello';
  // let split = messageEncode.split('');
  // console.log(split);

  return messageEncode.replaceAll('a', 1).replaceAll('e', 2).replaceAll('i', 3).replaceAll('o', 4).replaceAll('u', 5);

  // .replace('e', '2').replace('i', '3').replace('o', '4').replace('u', '5');

  // return split;
}
// console.log(encode('hallo'));

function decode(messageDecode) {

  return messageDecode.replaceAll('1', 'a').replaceAll('2', 'e').replaceAll('3', 'i').replaceAll('4', 'o').replaceAll('5', 'u');

}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
