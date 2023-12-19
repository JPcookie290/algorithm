"use strict";
function banarySearch(array, term) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (term === array[middle])
            return middle;
        if (term < array[middle])
            right = middle - 1;
        if (term > array[middle])
            left = middle + 1;
    }
    return -1;
}
console.log(banarySearch([12, 13, 15, 20, 22, 34, 35, 36, 56, 57, 63, 65, 77, 78, 79, 90], 12)); // => 0
console.log(banarySearch([12, 13, 15, 20, 22, 34, 35, 36, 56, 57, 63, 65, 77, 78, 79, 90], 34)); // => 5
console.log(banarySearch([12, 13, 15, 20, 22, 34, 35, 36, 56, 57, 63, 65, 77, 78, 79, 90], 57)); // => 9
console.log(banarySearch([12, 13, 15, 20, 22, 34, 35, 36, 56, 57, 63, 65, 77, 78, 79, 90], 77)); // => 12
console.log(banarySearch([12, 13, 15, 20, 22, 34, 35, 36, 56, 57, 63, 65, 77, 78, 79, 90], 90)); // => 15
console.log(banarySearch([12, 13, 15, 20, 22, 34, 35, 36, 56, 57, 63, 65, 77, 78, 79, 90], 17)); // => -1
//# sourceMappingURL=binarySearch.js.map