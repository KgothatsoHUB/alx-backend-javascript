// Function to demonstrate the use of const and let
export function taskFirst() {
  const message = 'I prefer const when I can.'; // Using const for a constant value
  return message; // Returning the message
}

// Function to get the last part of a sentence
export function getLast() {
  return ' is okay'; // Returns a simple string
}

// Function to concatenate two messages using let
export function taskNext() {
  let result = 'But sometimes let'; // Using let to allow modification
  result += getLast(); // Append the result of getLast

  return result; // Return the combined message
}

