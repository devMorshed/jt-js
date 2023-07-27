// Task 1: Reversed String

function reverseString(inputString) {
  let reversed = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversed += inputString[i];
  }
  return reversed;
}

// Test
console.log(reverseString("hello world"));


// Task 2: Sum of Positive Numbers

function sumOfPositiveNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

// Test
console.log(sumOfPositiveNumbers([2, -5, 10, -3, 7]));


// Task 3: Most Frequent Element in an Array

function mostFrequentElement(arr) {
  const frequencyMap = {};
  for (let num of arr) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  }

  let mostFrequentNum;
  let maxFrequency = 0;
  for (let num in frequencyMap) {
    if (frequencyMap[num] > maxFrequency) {
      maxFrequency = frequencyMap[num];
      mostFrequentNum = num;
    }
  }

  return parseInt(mostFrequentNum);
}

// Test example
const inputArrr = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const outputNum = mostFrequentElement(inputArrr);
console.log(outputNum); // Output: 3


// Task 4: Find Two Numbers Summing to Target

function findTwoNumbersSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return null;
}

// Test example
const inputArr = [1, 3, 6, 8, 11, 15];
const target = 9;
const outputIndices = findTwoNumbersSum(inputArr, target);
console.log(outputIndices); // Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)


// Task 5: Simple JavaScript Calculator

function calculator(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}

// Test example
const num1 = 10;
const num2 = 5;
const operator = '+';
const result = calculator(num1, num2, operator);
console.log(result); // Output: 15


// Task 6: Generate Random Password

function generateRandomPassword(length) {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

// Test example
const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);


// Task 7: Roman Numeral to Integer

function romanToInt(roman) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < roman.length; i++) {
    const currentVal = romanMap[roman[i]];
    const nextVal = romanMap[roman[i + 1]];

    if (currentVal < nextVal) {
      result += nextVal - currentVal;
      i++;
    } else {
      result += currentVal;
    }
  }

  return result;
}

// Test example
const romanNumeral = "IX";
const integerValue = romanToInt(romanNumeral);
console.log(integerValue); // Output: 9