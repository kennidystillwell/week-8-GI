//defined "sharePizzaEvenly" function  
//takes two parameters that act as x and y
//x = totalSlices 
//y = numberOfPeople
function sharePizzaEvenly(totalSlices, numberOfPeople) {
    //calculating the slices per person by dividing totalSlices by numberOfPeople
    const slicesPerPerson = totalSlices / numberOfPeople;
  
    //returns message depedning on slices per person
    // "${slicesPerPerson.toFixed(2)}" takes calculated result of "slicesPerPerson" and used ".toFixed(2)" so that the result displays with two decimal points
    // "${totalSlices}" takes value of "totalSlices" parameter
    return `Each person gets ${slicesPerPerson.toFixed(2)} slices of pizza; from our ${totalSlices} slice pizza`;

  }

  
  console.log(sharePizzaEvenly(8, 2));  // Output: Each person gets 4.00 slices of pizza; from our 8 slice pizza
  console.log(sharePizzaEvenly(8, 3));  // Output: Each person gets 2.67 slices of pizza; from our 8 slice pizza
  console.log(sharePizzaEvenly(21, 20)); // Output: Each person gets 1.05 slices of pizza; from our 21 slice pizza
  console.log(sharePizzaEvenly(10, 3));  // Output: Each person gets 3.33 slices of pizza; from our 10 slice pizza