// Function to manage neighborhoods in San Francisco
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square']; // Initial neighborhoods

  // Adding a neighborhood with an arrow function
  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood); // Add new neighborhood
    return this.sanFranciscoNeighborhoods; // Return updated list
  };
}

