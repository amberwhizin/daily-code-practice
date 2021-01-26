// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

const createPhoneNumber = (numbers) => {
  const areaCode = numbers.slice(0, 3);
  const threeDigitPrefix = numbers.slice(3, 6);
  const lineNumber = numbers.slice(6, 10);
  const phoneNumber = `(${areaCode}) ${threeDigitPrefix}-${lineNumber}`;
  return phoneNumber.replace(/,/g, "");
};
