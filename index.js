// Ask the user how many odd numbers they want to enter
let count = parseInt(prompt ("How many odd numbers do you want to enter?"));

// Initialize sum
let sum = 0;

// Loop to collect odd numbers
for (let i = 0; i < count; i++) {
  let number = parseInt(prompt(`Enter odd number ${i + 1}:`));

  // Check if the number is odd
  if (number % 2 !== 0) {
    sum += number; // Add to sum
  } else {
    alert("That is not an odd number! Please try again.");
    i--; // Repeat this iteration
  }
}

// Show the result
alert("The sum of the odd numbers is: " + sum);
