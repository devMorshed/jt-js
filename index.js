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