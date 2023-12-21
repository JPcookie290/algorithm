function swapPivot(arr: number[], index1: number, index2: number) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function pivot(array: number[], startIndex: number = 0, endIndex: number = array.length - 1) {
    let pivotIndex = startIndex;
    let pivotValue = array[startIndex]

    for (let i = startIndex + 1; i <= endIndex; i++) {
        if (pivotValue > array[i]) {
            pivotIndex++;
            swapPivot(array, pivotIndex, i)
        };   
    }
    swapPivot(array, startIndex, pivotIndex);

    return pivotIndex
}

function quickSort(array: number[], indexLeft: number = 0, indexRight: number = array.length - 1) {
    if (indexLeft < indexRight) {                               // => if indexRight is not bigger then indexLeft,
        let pivotIndex = pivot(array, indexLeft, indexRight);   //    it means that the length of the array part, 
        quickSort(array, indexLeft, pivotIndex - 1);            //    which is to check is only one
        quickSort(array, pivotIndex + 1, indexRight);
    }

    return array
}

console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3]));
console.log(quickSort([55, 17, 22, 78, 101, 25, 156, 8, 7, 88]));
