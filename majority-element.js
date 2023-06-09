// Problem: Majority element that appears more than N/2 times

const arr = [2, 2, 3, 3, 1, 2, 3, 3, 3, 3];

// Moor's Algorithm
function majorityElementMoorAlgo() {
  let cnt = 0;
  let majorityEle;
  for(let i=0;i<arr.length;i++) {
    if(cnt == 0) {
      cnt = 1;
      majorityEle = arr[i];
    } else if(majorityEle === arr[i]) {
      cnt++;
    } else {
      cnt--;
    }
  }

  let newCnt = 0;
  for(let i=0;i<arr.length;i++) {
    if(majorityEle === arr[i]) {
      newCnt = newCnt + 1;
    }
  }
  if(newCnt > arr.length / 2) {
    return majorityEle;
  }
  return -1;
}

console.log("majorityElementMoorAlgo",majorityElementMoorAlgo());


function majorityElement() {
  const map = new Map();
  let majorityEle = null;
  for(let i=0;i<arr.length;i++) {
    if(map.has(arr[i])) {
      const val = map.get(arr[i]);
      map.set(arr[i], val + 1);
    } else {
      map.set(arr[i], 1);
    }
  }

  for(const [key,val] of map.entries()) {
    if(val > arr.length / 2) {
      majorityEle = key;
      break;
    }
  }
  return majorityEle;
}

console.log(majorityElement());