"use strict";
function linearSearch(numList, term) {
    for (let index = 0; index < numList.length; index++) {
        if (numList[index] == term)
            return index;
    }
    return -1;
}
console.log(linearSearch([5, 2, 1, 3, 4], 1)); // => 2
console.log(linearSearch([5, 2, 1, 3, 4], 6)); // => -1
//# sourceMappingURL=lineareSuche.js.map