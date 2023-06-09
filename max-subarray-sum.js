const arr = [-2, -3, 4, -1, -2, 1, 5, -3];
// o/p => 7

// Kadane's Algorithm

function maxSubarraySum() {
  let max = -Infinity;
  let sum = 0;
  let ansStart = -1;
  let ansEnd = -1;
  let start = -1;

  for(let i=0;i<arr.length;i++) {

    if(sum === 0) {
      start = i;
    }

    sum += arr[i];

    if(sum > max) {
      max = sum;
      ansStart = start;
      ansEnd = i;
    }

    if(sum < 0) {
      sum = 0;
    }
  }

  return [ansStart, ansEnd]
}

console.log(maxSubarraySum());