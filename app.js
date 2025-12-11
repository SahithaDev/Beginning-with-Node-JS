const { z, calculateSum } = require("./sum.js");
const { calculateMultiply } = require("./calculate/multiply.js");

var a = 10;
var b = 20;

calculateMultiply(a, b);
calculateSum(a, b);
console.log(z);
