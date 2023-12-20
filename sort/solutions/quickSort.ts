/*
function pivot(arr: number[], start: number  = 0, end: number = arr.length -1): number {
    let pivotValue = arr[start];
    let pivotIndex = start;

    for (let i = start + 1; i <= end; i++){
        if (pivotIndex > arr[i]) {
            pivotIndex++;
            //swap(arr, pivotIndex, i); // swap muss noch definiert werden
        }
    }
    //swap(arr, start, pivotIndex);
    return pivotIndex;
}

function quickSort(arr: number[], left: number = 0, right: number = arr.length -1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}
*/