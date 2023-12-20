"use strict";
function merge(arr1, arr2) {
    const resultArray = [];
    let i = 0;
    let j = 0;
    while ((i < arr1.length) && (j < arr2.length)) {
        if (arr1[i] < arr2[j]) {
            resultArray.push(arr1[i]);
            //console.log(arr1[i]);
            i++;
        }
        else {
            resultArray.push(arr2[j]);
            //console.log(arr2[j]);
            j++;
        }
    }
    for (i; i < arr1.length; i++) {
        resultArray.push(arr1[i]);
    }
    for (j; j < arr2.length; j++) {
        resultArray.push(arr2[j]);
    }
    //console.log(resultArray.length);
    return resultArray;
}
//console.log(merge([12, 14, 22, 47], [11, 17, 22, 50]));
//console.log(merge([5, 17, 22, 68, 78, 101, 125, 156, 544, 801], [7, 23, 88]));
function mergeSort(array) {
    if (array.length <= 1)
        return array;
    let mid = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid));
    return merge(left, right);
}
//console.log(mergeSort([2, 4, 1, 9, 6, 10, 11, 3]));
console.log(mergeSort([5, 17, 22, 68, 78, 101, 125, 156, 544, 801, 7, 23, 88]));
//# sourceMappingURL=mergeSort.js.map