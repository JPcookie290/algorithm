function searchSubString(mainString: string, searchString: string): number {
    let wordCounter = 0;

    for (let i = 0; i < mainString.length; i++) {
        for (let j = 0; j < searchString.length; j++) {
            //if(mainString[i + j] === searchString[j]) console.log(`test: ${mainString[i + j]} == ${searchString[j]}`);
            if(mainString[i + j] !== searchString[j]) break;
            if (j === searchString.length -1) wordCounter++
        }
    }

    return wordCounter > 0 ? wordCounter : -1;
}

console.log("Test 1, Case: 2");
console.log(searchSubString("test lets try test", "test")); // => 2
console.log("Test 2, Case: 1");
console.log(searchSubString("test lets try test", "lets")); // => 1
console.log("Test 3, Case: -1");
console.log(searchSubString("test lets try test", "nope")); // => -1
