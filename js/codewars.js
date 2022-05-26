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

//edabit

// const arrayToString = (arr) => {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     result.push(element);
//   }
//   return result.join('');
// };

// console.log(arrayToString([1, 2, 3, 4, 5, 6])); //"123456"
// console.log(arrayToString(['a', 'b', 'c', 'd', 'e', 'f'])); //"abcdef"
// console.log(arrayToString([1, 2, 3, 'a', 's', 'dAAAA'])); //"123asdAAAA"

// const addition = (num) => {
//   let addOne = num += 1
//   return addOne;
// };

// console.log(addition(0));
// console.log(addition(5));
// console.log(addition(10));

// const minMax = (arr) => {
//   let minMaxNums = [];

//   const maxNum = Math.max(...arr);
//   minMaxNums.unshift(maxNum);

//   const minNum = Math.min(...arr);
//   minMaxNums.unshift(minNum);

//   return minMaxNums;
// };

// console.log(minMax([1, 2, 3, 4, 5]));

// input => array
// output => number

// const getFirstValue = (arr) => {
//   let firstElArr = 0;

//   if (Array.isArray(arr)) {
//     firstElArr += arr[0];
//   }

//   return firstElArr;
// };
// console.log(getFirstValue([1, 2, 3]));
// console.log(getFirstValue([10, 8, 9]));
// console.log(getFirstValue([25, 4, 7]));

//input number
//output boolean

// const lessThanOrEqualToZero = (num) => {
//   return num <= 0 ? true : false;
// };

// console.log(lessThanOrEqualToZero(5)); //false
// console.log(lessThanOrEqualToZero(-1)); //true
// console.log(lessThanOrEqualToZero(-10)); //true
// console.log(lessThanOrEqualToZero(-100)); //true
// console.log(lessThanOrEqualToZero(12)); //false
// console.log(lessThanOrEqualToZero(14)); //false
// console.log(lessThanOrEqualToZero(57)); //false

//////

// const even_or_odd = (number) => {
//   while (number % 2 === 0) {
//     return 'Even';
//   }
//   return 'Odd';
// };

// console.log(even_or_odd(3)); //odd
// console.log(even_or_odd(4)); //even
// console.log(even_or_odd(10)); //even
// console.log(even_or_odd(13)); //odd
// console.log(even_or_odd(9)); //odd

//////

// const doYouPlayTheTheremin = (sirStringy) => {
//     if (sirStringy[0] === 'S' || sirStringy[0] === 's') return true
//     return false;
// }

// console.log(doYouPlayTheTheremin('Sarah'));
// console.log(doYouPlayTheTheremin('saddy'));
// console.log(doYouPlayTheTheremin('Mark'));
// console.log(doYouPlayTheTheremin('Slick'));
// console.log(doYouPlayTheTheremin('kiddo'));

///////////

// const ex1 = [1, 2]; //[[1], [2]]
// const ex2 = [1, 2, 3];
// const ex3 = [8, 1, 5, 4, 6, 1, 1]; //[[1,5,1,1],[8,4,6]]

//input - array, output - an array of all the odd even numbers in sep arr's
// const pickIt = (arr) => {
//   let odd = [],
//     even = [];

//   for (let i = 0; i < arr.length; i++) {
//     let elementInArr = arr[i];

//     if (elementInArr % 2) {
//       odd.push(elementInArr);
//     } else {
//       even.push(elementInArr);
//     }
//   }
//   console.log({ odd, even });
//   return [odd, even];
// };

// console.log(pickIt(ex3));

//////////

//input - arr of nums, ouput - sum of positive nums

// let ex1 = [1, 2, -3, -4, -5]; //3
// let ex2 = [-1, -2, -3, -4, -5]; //0
// let ex3 = []; //0
// let ex4 = [1, 2, -10, 7, 8]; // 18

// const positiveSum = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     const elInArr = arr[i];
//     if (elInArr >= 0) {
//       sum += elInArr;
//     }
//   }
//   return sum;
// };
//refactor using map()
// const positiveSum = (arr) => {
//   let sum = 0;
//   arr.map((el) => {
//     if (el >= 0) {
//       sum += el;
//     }
//   });
//   return sum;
// };

//refactor using reduce()
// const positiveSum = (arr) => {
//   let initialValue = 0;
//   arr.reduce((previousValue, currentValue) => {
//     if (currentValue >= 0) {
//       previousValue + currentValue;
//       initialValue += currentValue;
//     }
//   }, initialValue);
//   return initialValue;
// };

// console.log(positiveSum(ex1));

//////////////////////////
//simpler reduce use...
// const positiveSum = (arr) => {
//   let initialValue = 0;

//   const reducer = arr.reduce((previousVal, currentVal) => {
//     if (currentVal > 0) {
//       initialValue += currentVal;
//     }
//   }, initialValue);

//   return initialValue;
// };

// console.log(positiveSum([1, 2, 3]));

///////////////////////////////////////
/////tiniest refactor!
// const positiveSum = arr => {
//   return arr.reduce((previous, current) => current > 0 ? previous + current : previous, 0)
// }
// // if current Value is greater than zero then add previous and current together. Otherwise return previous which would be zero because nothing was added to it and the initail Value starts at 0 above.

// console.log(positiveSum([1, 2, 3]));

/////////
//merge arrays
// const mergeArrays = (arr1, arr2) => {
//   let slice = arr1.slice(0, 1);
//   let mergedArrays = [];

//   for (let i = 0; i < arr1.length; i++) {
//     let item = arr1[i];
//   }

//   console.log(slice);
// };

// console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']));

// function mergeArrays(a, b) {
//   let j = [],
//     longest = a.length > b.length ? a : b;
//   for (var i = 0; i < longest.length; i++) {
//     if (a[i]) j.push(a[i]);
//     if (b[i]) j.push(b[i]);
//   }
//   return j;
// }

// const mergeArrays = (arr1, arr2) => {
//   let merged = [];
//   const longestArr = arr1.length > arr2.length ? arr1 : arr2;
//   // if arr1 is greater than the length of the arr2 the return arr1 else return arr2

//   for (let i = 0; i < longestArr.length; i++) {
//     // the for loop runs through arr1, in this test it is longer so arr1 be pushed into merged var
//     const itemA = arr1[i]; // the element in a
//     const itemB = arr2[i]; // the element in b

//     if (itemA) {
//       merged.push(itemA);
//     }
//     if (itemB) {
//       merged.push(itemB);
//     }
//   }
//   return merged;
// };

// console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']));

/////////

// as long as hashtag is less than 8 add hashtag to empty string and print after every add
// let hashtag = '';

// for (let i = 0; i < 8; i++) {
//   hashtag += '#';
//   console.log(hashtag)
// }

// console.log(hashtag.length)

////////////

//fizzbuzz part 1

// let fizz = 'Fizz';
// let buzz = 'Buzz';
// if num is divisible by 3, print "Fizz"
// if num is divisible by 5, print "Buzz"
// if num is divisible by 3 & 5 print "Fizz" + "Buzz"

// let num = 0;
// while (num >= 10) {
//   if (num % 3 === 0) console.log(fizz)
// }

// 9 divided by 3 has a remainder of 0

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// examples input->output
//// "ATTGC" --> "TAACG"
//// "GTAT" --> "CATA"

//input string
//output string

// const DNAStrand = (dna) => {
//   //return the reverse of a and t c and g.
//   // iterate through the dna string
//   // if A then return T  or operator?
//   // if T then return A
//   // if G return C
//   // if C return G
//   let complementaryDNAStrand = [];

//   for (let i = 0; i < dna.length; i++) {
//     let characterInDna = dna[i];
//     // individual character
//     if (characterInDna === 'A') {
//       characterInDna = 'T';
//       complementaryDNAStrand.push(characterInDna);
//     } else if (characterInDna === 'T') {
//       characterInDna = 'A';
//       complementaryDNAStrand.push(characterInDna);
//     }

//     if (characterInDna === 'C') {
//       characterInDna = 'G';
//       complementaryDNAStrand.push(characterInDna);
//     } else if (characterInDna === 'G') {
//       characterInDna = 'C';
//       complementaryDNAStrand.push(characterInDna);
//     }
//   }
//   return complementaryDNAStrand.join('');
// };

// console.log(DNAStrand('ATTCG')); //"TAAGC"

// revised
// const pairs = { A: 'T', T: 'A', C: 'G', G: 'C' };
// // when the .map sees A it sets the A to T
// // when it sees T it sets T to A with key value pairs

// const DNAStrand = (dna) => {
//   const complementaryDNAStrand = dna
//     .split('')
//     .map((v) => {
//       return pairs[v];
//     })
//     .join('');
//   return complementaryDNAStrand;
// };

// console.log(DNAStrand('ATTCG')); //"TAAGC"
// console.log(DNAStrand('TAAGC')); //"ATTCG"

////////////////////////

// Complete the solution so that the function will break up camel casing, using a space between words.

//examples
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// input string
// output string

// const breakCamelCasing = (string) => {
// use split to break up each character in the string and put into an array
// then map through each character and check for capital letters
// at each capital letter add a space until end of string
// if empty string return empty string
// check your work as you go Ber!

//   return string
//     .split('')
//     .map((charInString) => {
//       if (charInString === charInString.toUpperCase()) {
//         return ' ' + charInString;
//       } else {
//         return charInString;
//       }
//     })
//     .join('');
// };

// console.log(breakCamelCasing('camelCasing'));
// console.log(breakCamelCasing('camelCasingIsSoCool'));
// console.log(breakCamelCasing('identifier'));
// console.log(breakCamelCasing(''));
// concatenate looked nicer than template literals

//////////////////////////////////////////

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

//input - string
//output - number
// const getCount = (inputString) => {
// loop through the string
//split em up
//map through and
//if string matches anything in the vowel array add to count
// loop to the end of string
// declare vowel variable
//   let vowels = ['a', 'e', 'i', 'o', 'u'];
//   let vowelsCount = 0;

//   inputString.split('').forEach((characterInString) => {
//     if (vowels.includes(characterInString)) {
//       ++vowelsCount;
//     }
//   });
//   return vowelsCount;
// };

// console.log(getCount('abracadabra')); // 5
// console.log(getCount('iliketobreakbacksew')); // 8

//forEach over map() because im not returning an array
// and for loop becasuse i dont need to put it into an array first with split
// const getVowelCount = (inputString) => {
//   let vowels = ['a', 'e', 'i', 'o', 'u'];
//   let vowelsCount = 0;
//   for (let i = 0; i < inputString.length; i++) {
//     if (vowels.includes(inputString[i])) {
//       ++vowelsCount;
//     }
//   }
//   return vowelsCount;
// };

///////////////////////////////////////////////////////////////

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
//example -
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

//input - array of numbers
//output - number
// const sumTwoSmallestNumbers = (numbersArray) => {
//   // sort array
//   // loop through sortedArray
//   // grab first 2 indices
//   // add em
//   const sortedArray = numbersArray.sort((a, b) => a - b);
//   let sum = sortedArray[0] + sortedArray[1];
//   return sum;
// };

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); //13
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])); //6

///////////////////////////////////////////////

// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none.

//input - 2 params - word & array of words
//output - 1 param - array of anagram words

// sort array
// sort searchWord
// if sort === sort
// then put them in return array

//this function turns strings into anagrams
// const sortString = (string) => {
//   return string.split('').sort().join('')
// }

// // console.log(sortString('abba'))

// const findAnagrams = (word, array) => {
//   let anagrams = [];
//   console.log(typeof anagrams)
// debugger
//   for (let i = 0; i < array.length; i++) {
//     let element = array[i];

//     let searchWord = word
//       .split('')
//       .sort()
//       .join('');

//     let wordInArray = element
//       .split('')
//       .sort()
//       .join('');

//     if (wordInArray === searchWord) {
//       anagrams += element;
//     }
//   }
//   return anagrams;
// };
// console.log(findAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'baba']));
//=> ['aabb', 'bbaa', 'baba']

// ---->  im getting "aabbbbaababa "... fix!

////////////////////////////////////

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
//The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

//input numbers
//string
// const createPhoneNumber = (numbersArray) => {
//   const areaCode = numbersArray.join('').slice(0, 3);
//   const middle = numbersArray.join('').slice(3, 6);
//   const end = numbersArray.join('').slice(6, 10);

//   return `(${areaCode}) ${middle}-${end}`;
// };
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // => returns "(123) 456-7890"
// //awesome solution
// function createPhoneNumber(numbers){
//   var format = "(xxx) xxx-xxxx";

//   for(var i = 0; i < numbers.length; i++)
//   {
//     format = format.replace('x', numbers[i]);
//   }

//   return format;
// }

//////////////////////////////////////////////

//map explained! /////////

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// ex ->
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// String.prototype.toJadenCase = function () {
//     return this.split(" ").map(function(word){
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(" ");
//   }

// const jaden = (string) => {
//   return (
//     string
//       .split(' ')
//       .map((w) => w[0].toUpperCase() + w.slice(1))
//       // the piece of  info we need from every word is the first letter capitalized and then send in the rest with slice
//       .join(' ')
//   );
// };

// const jaden2 = (string) => {
//   const words = string.split(' ');
//   let output = []; //new array that map does under the hood
//   for (let index = 0; index < words.length; index++) {
//     const word = words[index]; //  you
//     // console.log(word)
//     output[index] = word[0].toUpperCase() + word.slice(1);
//     //output[i] = setting the index of the new array for each element in the previous string
//     // then slicing in every other character in the element till the end of it from index 1
//   }
//   return output.join(' ');
// };

// // console.log(jaden('how are you'));
// console.log(jaden2('how are you'));

////////////////////////////////////////////////

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e. --> friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

//input => array
//output => array of your friends
// const friend = (friends) => {
//   return friends.filter((friend) => friend.length === 4);
// };

// console.log(friend(['Ryan', 'Kieran', 'Jason', 'Yous']));
// console.log(friend(['Ryan', 'carr', 'Jason', 'Yous']));
// console.log(friend(['Ryan', 'carr', 'Jason', 'Yousy']));

////////////////////////////////////////////////

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// ex
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

// input - positive num
//ouput - neg num
// const makeNegative = (num) => {
//   if (num === 0) return 0;
//   if (num > 0) return Number('-' + num);
//   if (num < 0) return num;
// };

//refacter
// const makeNegative = (num) => {
//   return num < 0 ? num : -num;
// };
// console.log(makeNegative(42));
// console.log(makeNegative(0));
// console.log(makeNegative(700));
// console.log(makeNegative(-60));

////////////////////////////////////////////////

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// input string
// string
// const removeChar = (str) => {
//  let substringString = str.substring(1, str.length- 1)
// return substringString
// };

// console.log(removeChar('eloquent'));

/////////////////////////////////////////////////////////////////////////////////////////

// Will you make it?
// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog and NASM) if it is possible and false (0 in Prolog and NASM) if not. The input values are always positive.

//input - number
//output - boolean
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   // i have 2 gallons
//   let math = fuelLeft * mpg // distance my car can travel!
//   let canIMakeIt = math < distanceToPump ? false : true;
//   return canIMakeIt;
// };

//refactor
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump;
// //if my gas amount is greater than or equal to the distance to the pump then true, everything else false

// console.log(zeroFuel(50, 25, 2)); //true will make it
// console.log(zeroFuel(100, 50, 1)); //false
// console.log(zeroFuel(100, 50, 2)); //true
// console.log(zeroFuel(400, 50, 2)); //false

/////////////////////////////////////////////////////////////////////////////////////////

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

// const hero = (bulletsIHave, dragons) => {
//   const dragonMath = dragons * 2;
//   return toEndBeautifulDragonOrNot = dragonMath <= bulletsIHave;
// };

// console.log(hero(4, 5)); //false
// console.log(hero(100, 40)); //true
// console.log(hero(1500, 751)); //false
// console.log(hero(0, 1)); //false

/////////////////////////////////////////////////////////////////////////////////////////

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//input boolean
//output string
// const boolToWord = (bool) => {
//   return bool === true? 'Yes' : 'No';
// };
// //refactor
// const boolToWord = (bool) => {
//   return bool === true? 'Yes' : 'No'; //if its true it will accept first argument if false the second, ha
// };

// console.log(boolToWord(true));
// console.log(boolToWord(false));

/////////////////////////////////////////////////////////////////////////////////////////

// const booleanToString = (b) => {
//   return String(b);
// };

// console.log(booleanToString(true));

/////////////////////////////////////////////////////////////////////////////////////////

// Given a number n, return the number of positive odd numbers below n, EASY!

// const oddCount = (n) => {
//   let count = 0;

//     for (let i = n - 1; i >= 0; i--) {
//       // set i to our number // while n above 0 count backwards
//       if (i % 2) count++;
//     }
//     return count;
// };
//refacter
//thought they were asking me to do a loop, but the loop was taking too long since they had a billion tests to run it with
// const oddCount = (n) => {
//an integer that can be divided by 2 is an even number, and integer that cant be divided by 2 is odd
//  let isItEvenOrOdd = n % 2
// if (isItEvenOrOdd) {
// console.log(isItEvenOrOdd)
//  // console.log((n - 1) / 2);
//   //return (n - 1) / 2;
// }

//return n / 2;
// };

// console.log(oddCount(15)); // 7, - [1, 3, 5, 7, 9, 11, 13]
// console.log(oddCount(7)); // 3, - [5, 3, 1]
// console.log(oddCount(8)); // 4, - [7,5,3,1]

////////////////////////////////////////////////////////////////////////////////

const plusMinus = (arr) => {
  let len = arr.length;
  let positive = 0;
  let negative = 0;
  let zero = 0;

  for (let i = 0; i < len; i++) {
    if (arr[i] > 0) positive++;
    if (arr[i] < 0) negative++;
    if (arr[i] === 0) zero++;
  }
  const posRatio = positive / len;
  const negRatio = negative / len;
  const zeroRatio = zero / len;

  console.log(posRatio.toFixed(6));
  console.log(negRatio.toFixed(6));
  console.log(zeroRatio.toFixed(6));
};

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
