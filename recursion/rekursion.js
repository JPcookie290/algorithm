"use strict";
/* ----------- Question 1 ----------- */
function sumRange(num) {
    if (num == 1) {
        return 1;
    }
    return num + sumRange(num - 1);
}
//console.log(sumRange(3)); // => sum 6
//console.log(sumRange(5)); // => sum 15
/* ----------- Question 2 ----------- */
function power(baseNum, expoNum) {
    if (expoNum == 0)
        return 1;
    return baseNum * power(baseNum, expoNum - 1);
}
for (let index = 4; index >= 0; index--) {
    //console.log(power(2,index));
}
/* ----------- Question 3 ----------- */
function factorial(factNum) {
    if (factNum == 1)
        return 1;
    return factNum * factorial(factNum - 1);
}
//console.log(factorial(5));
/* ----------- Question 4 ----------- */
function all(numbers) {
    return true;
}
/*var allAreLessThanSeven = all([1,2,9], function(num){
    return num < 7;
});*/
//console.log(allAreLessThanSeven); // false
//# sourceMappingURL=rekursion.js.map