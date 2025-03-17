// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42); // Use Math.abs to calculate the absolute difference
  }


  function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue); // Get blocks from the first function
    return blocks * 264; // Convert blocks to feet
  }

  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264; // Calculate the absolute distance in feet
  }
  
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
  
    if (distanceInFeet <= 400) {
      return 0; // First 400 feet are free
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02; // Charge 2 cents per foot over 400 feet
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25; // Flat $25 charge for distances between 2000 and 2500 feet
    } else {
      return 'cannot travel that far'; // If the distance is over 2500 feet
    }
  }
  
  