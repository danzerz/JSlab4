// funtion to check wheather the no is multiple of five or not

function multipleOfFive(mul) {
  return mul % 5 === 0;
}

// Test the function
const input = prompt("Enter a number: ");
const number = Number(input);

// Check if the input is a valid number
if (!isNaN(number)) {
  if (multipleOfFive(number)) {
    console.log(`${number} is a multiple of five.`);
  } else {
    console.log(`${number} is not a multiple of five.`);
  }
} else {
  console.log("Please enter a valid number.");
}

// Get input from the user
const scores = prompt("Enter the student's score: ");
// Convert input to a number
const score = Number(input);

function gradeScore(score) {
  if (score >= 80 && score <= 100) {
    return "A";
  } else if (score >= 70 && score < 80) {
    return "B";
  } else if (score >= 60 && score < 70) {
    return "C";
  } else if (score >= 50 && score < 60) {
    return "D";
  } else if (score >= 0 && score < 50) {
    return "F";
  } else {
    // return default if no condition is fulfilled
    return "Invalid score";
  }
}

// Check if the input is a valid number
if (!isNaN(score)) {
  const grade = gradeScore(score);
  console.log(`The grade for a score of ${score} is: ${grade}`);
} else {
  console.log("Please enter a valid number.");
}

// calculator function for mathmatical operation on two numbers.
function calculator(num1, num2, operator) {
  switch (operator) {
    // to add
    case "+":
      return num1 + num2;
    // to subtract
    case "-":
      return num1 - num2;
    // to multiply
    case "*":
      return num1 * num2;
    // to divide
    case "/":
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "Error: Division by zero";
      }
    //default value
    default:
      return "Error: Invalid operator";
  }
}

// given Example usage:
console.log(calculator(5, 2, "+"));
console.log(calculator(5, 2, "-"));
console.log(calculator(5, 2, "*"));
console.log(calculator(5, 2, "/"));
console.log(calculator(5, 2, "&"));

// fizzbuzz

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    // Multiples of both 3 and 5
    console.log("FizzBuzz");
  } // Multiples of 3
  else if (i % 3 === 0) {
    console.log("Fizz");
  } // Multiples of 3
  else if (i % 5 === 0) {
    console.log("Buzz"); // Multiples of 5
  } // Multiples of 3
  else {
    console.log(i); // Numbers that are not multiples of 3 or 5
  }
}
