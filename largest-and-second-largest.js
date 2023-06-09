const arr = [-1, 10, 7, 9, 1, 2, 3, -2, -9, 99, 110, 290];

function largestAndSecondLargest() {
  let largest = arr[0];
  let secondLargest = -Infinity;
  for(let i=0;i<arr.length;i++) {
    const val = arr[i];
    if(val > largest) {
      secondLargest = largest;
      largest = val;
    } else if(val < largest && val > secondLargest) {
      secondLargest = val;
    }
  }
  return [largest, secondLargest];
}

console.log(largestAndSecondLargest());