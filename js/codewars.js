// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

const createPhoneNumber = (numbers) => {
  const areaCode = numbers.slice(0, 3);
  const threeDigitPrefix = numbers.slice(3, 6);
  const lineNumber = numbers.slice(6, 10);
  const phoneNumber = `(${areaCode}) ${threeDigitPrefix}-${lineNumber}`;
  return phoneNumber.replace(/,/g, "");
};

///////////////////////////////////////////////////
/////////////////////////////////////////////////
///////////////////////////////////////////////

// input - 10 // output - 23

const solution = (number) => {
  let count = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      count += i;
    } else if (i % 3 === 0) {
      count += i;
    } else if (i % 5 === 0) {
      //add the number its divisible by
      count += i;
    }
    if (i < 0) {
      return 0;
    }
  }
  return count;
};

//better
const solution = (number) => {
  const sum = 0;

  for (const i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
};

/////////////////////////////////////////
//////////////////////////////////////
/////////////////////////////////////

// input string // output string with spaces
const solution = (string) => {
  
  let brokenCamelCase = '';
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char === char.toUpperCase()) {
      brokenCamelCase += ` ${char}` 
    } else {
      brokenCamelCase += char;
    }
  }
  return brokenCamelCase;
}