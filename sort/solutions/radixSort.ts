function getDigit(num: number, i: number) {
    return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
}
console.log(getDigit(4978, 0)); // 8
console.log(getDigit(491, 1)); // 9

/*
Erklärung der Modulo-Rechnung

491 / 10 = 49,1
49,1 % 10 = 9,1

    4             9           1
10² = 100     10¹ = 10     10⁰ = 1
   400           90           1

*/

function digitCount(num: number) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num)) + 1);
}

function mostDigits(numbers: number[]): number {
    let maxDigits = 0;
    numbers.forEach(num => {
        maxDigits = Math.max(digitCount(num), maxDigits)
    });
    return maxDigits;
}

function radixSort(arr: number[]): number[] {
    const most = mostDigits(arr);
    for (let i = 0; i < most; i++) {
        let digitBuckets: number[][] = Array.from({length: 10}, () => []);
        for (let j = 0; j < arr.length; j++) {
            const digit = getDigit(arr[j], i);
            digitBuckets[digit].push(arr[j])
        }
        arr = ([] as number[]).concat(...digitBuckets);
    }
    return arr;
}

const data = radixSort([5, 12, 3, 11]);
console.log(data);
