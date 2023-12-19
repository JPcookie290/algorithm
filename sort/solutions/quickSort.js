"use strict";
function pivot(arr, start = 0, end = arr.length - 1) {
    let pivotValue = arr[start];
    let pivotIndex = start;
    for (let i = start + 1; i <= end; i++) {
        if (pivotIndex > arr[i]) {
            pivotIndex++;
            //swap(arr, pivotIndex, i); // swap muss noch definiert werden
        }
    }
    //swap(arr, start, pivotIndex);
    return pivotIndex;
}
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}
//# sourceMappingURL=quickSort.js.map