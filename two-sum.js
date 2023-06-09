const arr = [2, 7, 11, 15];
const target = 9;

function twoSum() {
  const map = new Map();
  
  for(let i=0; i < arr.length; i++) {
    const curr = arr[i];
    const complement = target - curr;

    if(map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(curr, i);
  }
  return [-1, -1];
}

console.log("Solution: ", twoSum());



