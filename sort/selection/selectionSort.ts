function swapSelection(arr: number[], index1: number, index2: number) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function selectionSort(array: number[]) {
    
    for (let i = 0; i < array.length; i++) {
        let minimum = array[i];
        for (let j = i; j < array.length; j++) {
            if(minimum > array[j]){
                minimum = array[j];
                swapSelection(array, i, j)
            }
        }
        //console.log(minimum);
    }
    
    return array
}

console.log(selectionSort([45, 3, 4, 78, 15]));
console.log(selectionSort([29, 10, 14, 37, 14]));
console.log(selectionSort([3, 4, 2, 1, 9, 8, 7]));