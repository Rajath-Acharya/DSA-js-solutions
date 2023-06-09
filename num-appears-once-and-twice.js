const arr = [1,1,2,3,3,4,4];

function numAppearsOnceAndTwice() {
  const map = new Map();

  for(let i =0; i<arr.length; i++) {
    if(map.has(arr[i])) {
      const val = map.get(arr[i]);
      const x = val + 1;
      map.set(arr[i], x);
    } else {
      map.set(arr[i], 1);
    }
  }
  const numAppearsOnce = [];
  const numAppearsTwice = [];
  for (let [key, val] of map) {
    if(val === 1) {
      numAppearsOnce.push(key)
    }
    if(val === 2) {
      numAppearsTwice.push(key)
    }
  }

  return {
    numAppearsOnce,
    numAppearsTwice
  }
}

console.log(numAppearsOnceAndTwice());