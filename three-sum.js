const nums = [-1, 0, 1, 2, -1, -4];

//  a + b + c = 0

function threeSome() {
  const res = [];
  const arr = nums.sort(); // NlogN

  for(let i=0; i<arr.length; i++) {
    // if previous val is same as cur value, skip it.
    if(i > 0 && arr[i] === arr[i-1]) continue;

    let j = i + 1;
    let k = arr.length - 1;

    while(j < k) {
      const sum = arr[i] + arr[j] + arr[k];
      if(sum > 0) {
        k--;
      } else if(sum < 0) {
        j++;
      } else {
        res.unshift([arr[i], arr[j], arr[k]]);
        j++;
        k--;
        while(j < k && arr[j] === arr[j-1]) j++;
        while(j < k && arr[k] === arr[k+1]) k--;
      }
    }
  }
  return res;
}

console.log("Solution Three Sum:", threeSome());

// Approach
//  i is fixed.Start from 0 to N
//  j is at i + 1.
//  k is at last position i.e, N - 1
// 