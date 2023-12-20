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

    return array
}


const arr = [5, 2, 1, 8, 4, 7, 6, 3];
const arr2 = [55, 17, 22, 78, 101, 25, 156, 8, 7, 88]
console.log(pivot(arr));
console.log(pivot(arr2));

