function getDigit(num: number, index: number) {
    return Math.floor((Math.abs(num) / Math.pow(10, index)) % 10);
}

/* ----- Test getDigit ----- */
// console.log(getDigit(4655, 0)); // => 5
// console.log(getDigit(975, 2));  // => 9
// console.log(getDigit(75169, 1)); // => 6

function digitCount(num: number) {
    if (num === 0) return 1;
    let counter = 0;
    while (num !== 0) {
        num = Math.floor(Math.abs(num) / 10);
        counter++;
    }
    return counter;
}

/* ----- Test digitCount ----- */
// console.log(digitCount(4655)); // => 4
// console.log(digitCount(975)); // => 3
// console.log(digitCount(0));  // => 1

function mostDigits(array: number[]) {
    let maxDigits = 0;
    array.forEach(num => {
        let temp = digitCount(num);
        maxDigits = (maxDigits < temp) ? temp : maxDigits;
    });
    return maxDigits
}

/* ----- Test mostDigits ----- */
//console.log(mostDigits([23, 9865, 99721, 345, 12, 7])); // => 5
//console.log(mostDigits([674, 987, 9, 87, 0, 765, 87])); // => 3
//console.log(mostDigits([45, 6, 5, 67, 43, 54, 2, 56])); // => 2

function radixSort(array: number[]) {
    const most = mostDigits(array);
    for (let i = 0; i < most; i++) {
        let digitBuckets: number[][] = [];
        for (let j = 0; j < 10; j++) {
            let bucket: number[] = [];
            digitBuckets.push(bucket);
        }
        for (let k = 0; k < array.length; k++) {
            const digit = getDigit(array[k], i);
            digitBuckets[digit].push(array[k])
        }
        // console.log("test: i = ", i);
        // console.log(digitBuckets);
        array = ([] as number[]).concat(...digitBuckets);
    }

    return array
}

/* ----- Test radixSort ----- */
// radixSort([1, 25, 6, 981]);
console.log(radixSort([23, 9865, 99721, 345, 12, 7]));
console.log(radixSort([674, 987, 9, 87, 0, 765, 87]));
console.log(radixSort([45, 6, 5, 67, 43, 54, 2, 56]));