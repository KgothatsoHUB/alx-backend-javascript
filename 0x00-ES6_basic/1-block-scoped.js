// Function to demonstrate block scoping with let
export default function taskBlock(condition) {
  let taskCompleted = false; // Default value for task
  let taskPending = true; // Default value for another task

  if (condition) {
    taskCompleted = true; // Update the value if condition is true
    taskPending = false; // Change the status of the task
  }

  return [taskCompleted, taskPending]; // Return an array of task statuses
}

