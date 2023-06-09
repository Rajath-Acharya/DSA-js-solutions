const arr = [1, 2, 3, 5];

const N = 5;

function missingNumber() {
  let sum = 0;
  let givenArrSum = 0;
  for(let i=1;i<=N;i++) {
    sum += i;
  }
 for(let i=0;i<N - 1;i++) {
    givenArrSum += arr[i];
  }
  return sum - givenArrSum;
}

console.log(missingNumber());