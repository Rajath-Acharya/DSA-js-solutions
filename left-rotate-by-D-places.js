const arr = [1, 2, 3, 4, 5, 6, 7];

const p = 4;

function rotate() {
  const n = arr.length;
  const d = p % n; // 7 - 4 = 3 
  const res = [];

  for(let i=d;i<n;i++) {
    res.push(arr[i]);
  }

  for(let i=0;i<d;i++) {
    res.push(arr[i]);
  }

  return res;
}

console.log(rotate());