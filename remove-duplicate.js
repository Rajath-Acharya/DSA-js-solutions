const arr = [1,1,2,4,5,6,6,7,2,5,8];

function removeDuplicate() {
  const res = [];
  const sortedArr = arr.sort();
  res.push(sortedArr[0]);
  for(let i=1;i<sortedArr.length;i++) {
    if(sortedArr[i] === sortedArr[i-1]) {

    } else {
      res.push(sortedArr[i]);
    }
  }
  return res;
}

console.log(removeDuplicate());