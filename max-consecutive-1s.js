const arr = [0, 1, 1, 1, 0, 1, 1,1,1, 0, 1];

function maxOnes() {
  let max = 0;
  let cnt = 0;

  for(let i=0;i < arr.length;i++) {
    if(arr[i] === 1) {
      cnt++;
      max = Math.max(max, cnt);
    } else {
      cnt = 0;
    }
  }
  return max;
}

console.log(maxOnes());