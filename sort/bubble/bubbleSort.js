"use strict";
function swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
function swapEs6(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) { //kann verbessert werden performance-technisch
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
}
console.log(bubbleSort([45, 3, 4, 78, 15]));
console.log(bubbleSort([29, 10, 14, 37, 14]));
console.log(bubbleSort([3, 4, 2, 1, 9, 8, 7]));
//# sourceMappingURL=bubbleSort.js.map