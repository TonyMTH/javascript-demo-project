'use strict'

module.exports = {

 /* Find the average of three integers 
 computeAverage: function(num1, num2, num3) {
 	const = 3;
   let average = (num1 + num2 + num3) / 3;
   return average;
 },*/
 aritGeo: function(numArray){
  if (numArray.length === 0){
    return 0;
  }else if (arithmeticProgression(numArray).toString() == numArray.toString()){
    return 'Arithmetic';
  }else if (geometricProgression(numArray).toString() == numArray.toString()){
    return 'Geometric';
  }else{
    return -1;
  }


function arithmeticProgression(numArray){
  let diff = (numArray[1] - numArray[0]), first = numArray[0], i = 0;
  let computedArray = [];
  
  while (i < numArray.length){
    computedArray.push (first + (i) * diff);
    i += 1;
  }
  return computedArray;
}


function geometricProgression(numArray){
  let ratio = (numArray[1] / numArray[0]), first = numArray[0], i = 0;
  let computedArray = [];
  
  while (i < numArray.length){
    computedArray.push (first * Math.pow(ratio,(i)));// formula = ar^(n-1), since i starts from zero, hence i-1 is equivalent to i.
    i += 1;
  }
  return computedArray;
}
}
}