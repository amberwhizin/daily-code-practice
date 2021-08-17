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

// const order = (words) => {
//   debugger;
//   var array = words.split(' ');
//   var sortedArray = [];
//   for (i = 0; i <= array.length; i++) {
//     for (j = 0; j < array.length; j++) {
//       if (array[j].indexOf(i) >= 0) {
//         sortedArray.push(array[j]);
//       }
//     }
//   }
//   return sortedArray.join(' ');
// }

// const mouthSize = (animal) => {
//   const r = animal.toLowerCase();

//   for (let i = 0; i < r.length; i++) {
//     if (r === 'alligator') {
//       return 'small';
//     } else {
//       return 'wide';
//     }
//   }
// };

// const TempleStrings = (obj, feature) => {
//   return `${obj} are ${feature}`;
// };

// const apple = (x) => {
//   if (Math.pow(x, 2) > 1000) {
//     return "It's hotter than the sun!!";
//   } else {
//     return 'Help yourself to a honeycomb Yorkie for the glovebox.';
//   }
// };

// const catMouse = (stringy) => {
//   const dots = stringy.slice(1, stringy.length - 1);

//   if (dots.length > 3) {
//     return 'Escaped!';
//   } else {
//     return 'Caught!';
//   }
// };

// console.log(catMouse('wordy words'))

/////////////

// const fakeBin = (x) => {
//   let binary = '';

//   for (let i = 0; i < x.length; i++) {
//     const numString = x[i];

//     if (numString < 5) {
//       binary += '0';
//     } else {
//       binary += '1';
//     }
//   }
//   return binary;
// };

// console.log(fakeBin([4, 5, 8, -2]));

/////////////

// example1 = 'Hello World!';
// example2 = 'What is happening here?';
// example3 = 'Am I super cool?';

// const removeExclamationMarks = (deleteSymbol) => {
//   //   console.log(deleteSymbol)
//   const splitString = deleteSymbol.split('');
//   //   console.log(splitString)
//   splitString.pop();
//   //   console.log(splitString.join(''))
//   return splitString.join('');
// };

// console.log(removeExclamationMarks(example3));

//////////////////

// const vowels = 'aeiou';

// function disemvowel(str) {
//   return (
//     str
//       .split('')
//       .filter((letter) => !vowels.includes(letter.toLowerCase()))
//       //if vowels 'do not include' ( => !vowels) letter in original string (changed to lowercase letters just before we interpret the answer)
//       // then join them!
//       .join('')
//   );
// }

// console.log(disemvowel('trolls be gone!'));

///////////////////////////////////
// fullstack practice source--> https://learn.fullstackacademy.com/workshop/5ab509868b62ab0004346be6/content/5ab509868b62ab0004346be8/text

// source --> eloquent Javascript --> https://eloquentjavascript.net///
// let total = 0,
//   count = 1;
// console.log('total: ', total);
// console.log('count: ', count, '\n');
// while (count <= 10) {
//   total += count;
//   count += 1;
//   console.log('total: ', total);
//   console.log('count: ', count, '\n');
// }
// console.log('total: ', total);
// console.log('count: ', count, '\n');
//console.log(total) //55

// const opposite = (number) =>  {
//     // if a number then make that number negative
//     if (Number(number) === number) {
//         return -number;
//     } else {
//         return number
//     }
//   }
// console.log(opposite(5))
// console.log(opposite(-6))
// console.log(opposite(44))
// console.log(opposite(-100))

//////
//WIP
// const vaporCode = (stringy) => {
//   const splitStringy = stringy.split('');
//   const noSpacesInStringy = splitStringy.join('');

//   let resultString = '';
//   let spaceTrash = [];

//   for (let i = 0; i < noSpacesInStringy.length; i++) {
//     const letters = noSpacesInStringy[i];

//     if (letters === ' ') {
//       spaceTrash.push(letters);
//     } else {
//       resultString += letters + '  ';
//       //its putting a space at the end
//       //if there is no letter next then stop there
//     }
//   }

//   return resultString.toUpperCase();
// };

// console.log(vaporCode("Let's go to the movies"));

//////


