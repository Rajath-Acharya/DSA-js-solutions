// Dutch National Flag 

// 0 - low-1 => 0
// low - mid - 1 => 1
// hight+1 - n-1 => 2

const arr = [0, 1, 2, 2, 0, 0, 1, 1, 1, 0];

function sort012() {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;
  while(mid <= high) {
    if(arr[mid] === 0) {
      // swap
      const temp= arr[mid];
      arr[mid]=arr[low];
      arr[low]=temp;

      low++;
      mid++;
    } else if(arr[mid] == 1) {
      mid++;
    } else {
      //swap
      const temp= arr[mid];
      arr[mid]=arr[high];
      arr[high]=temp;
      
      high--;
    }
  }
  return arr;
}

console.log(sort012());