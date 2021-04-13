// // createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// const createPhoneNumber = (numbers) => {
//   const areaCode = numbers.slice(0, 3);
//   const threeDigitPrefix = numbers.slice(3, 6);
//   const lineNumber = numbers.slice(6, 10);
//   const phoneNumber = `(${areaCode}) ${threeDigitPrefix}-${lineNumber}`;
//   return phoneNumber.replace(/,/g, "");
// };

// ///////////////////////////////////////////////////
// /////////////////////////////////////////////////
// ///////////////////////////////////////////////

// // input - 10 // output - 23

// const solution = (number) => {
//   let count = 0;
//   for (let i = 1; i < number; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       count += i;
//     } else if (i % 3 === 0) {
//       count += i;
//     } else if (i % 5 === 0) {
//       //add the number its divisible by
//       count += i;
//     }
//     if (i < 0) {
//       return 0;
//     }
//   }
//   return count;
// };

// //better
// const solution = (number) => {
//   const sum = 0;

//   for (const i = 1; i < number; i++) {
//     if (i % 3 == 0 || i % 5 == 0) {
//       sum += i;
//     }
//   }
//   return sum;
// };

// /////////////////////////////////////////
// //////////////////////////////////////
// /////////////////////////////////////

// // input string // output string with spaces
// const solution = (string) => {
//   let brokenCamelCase = "";
//   for (let i = 0; i < string.length; i++) {
//     const char = string[i];
//     if (char === char.toUpperCase()) {
//       brokenCamelCase += ` ${char}`;
//     } else {
//       brokenCamelCase += char;
//     }
//   }
//   return brokenCamelCase;
// };

// // input - string // output - sorted/ordered string
// const order = (words) => {
//   // break the words up into an array so that i can push that element into sentence
//   const splitWords = words.split(" ");
//   // if input is empty, return empty string ''
//   let sentence = "";

//   // check for a number
//   // loop from 1 , not 0,
//   for (let i = 0; i < splitWords.length; i++) {
//     const numberInWord = splitWords[i];
//     console.log(numberInWord);
//     // sort the numbers position in order
//     // if theres a number remove it, and shift it to the front of the word
//     if (
//       numberInWord === 1 ||
//       numberInWord === 2 ||
//       numberInWord === 3 ||
//       numberInWord === 4 ||
//       numberInWord === 5 ||
//       numberInWord === 6 ||
//       numberInWord === 7 ||
//       numberInWord === 8 ||
//       numberInWord === 9
//     ) {
//     }
//   }
//   // >= 9

//   // the result will be the numbers in the words in order
//   return sentence;
// };

function order(words) {
  debugger;
  var array = words.split(" ");
  var sortedArray = [];
  for (i = 0; i <= array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (array[j].indexOf(i) >= 0) {
        sortedArray.push(array[j]);
      }
    }
  }
  return sortedArray.join(" ");
}


const mouthSize = (animal) => {
  const r = animal.toLowerCase();
  
  for (let i = 0; i < r.length; i++) {
    if (r === 'alligator') {
      return 'small';
    } else {
      return 'wide'
    }
  }
}

const TempleStrings = (obj, feature) => {
  return `${obj} are ${feature}`
}


