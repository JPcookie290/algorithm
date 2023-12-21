function swap(arr: number[], index1: number, index2: number) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function swapEs6(arr: number[], index1: number, index2: number) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function bubbleSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    //kann verbessert werden performance-technisch
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }

  return array;
}

//optimized: doesent iterate over sorted numbers
function bubbleSortOptimized(arr: number[]) {
  const swap = (arr: number[], index1: number, index2: number) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  };
  //Stops unnecessary loops
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([45, 3, 4, 78, 15]));
console.log(bubbleSort([29, 10, 14, 37, 14]));
console.log(bubbleSort([3, 4, 2, 1, 9, 8, 7]));
