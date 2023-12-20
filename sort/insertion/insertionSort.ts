function swapNumbers(arr: number[], index1: number, index2: number) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

function insertionSort(array: number[]) {
    //console.log(array);
    for (let i = 1; i < array.length; i++) {
        //console.log(`i = ${i}\nArray[i] = ${array[i]}`);
        for (let j = i - 1; j >= 0; j--) {
            //console.log(`j = ${j}\nArray[j] = ${array[j]}`);
            if (array[j + 1] < array[j]) {
                swapNumbers(array, j + 1, j); //kontrolle
            }
        } 
    }

    return array
}

console.log(insertionSort([45, 3, 4, 78, 15]));
console.log(insertionSort([29, 10, 14, 37, 14]));
console.log(insertionSort([3, 4, 2, 1, 9, 8, 7]));
