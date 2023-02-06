//Swapping variables without using 3rd variables (Js interview Question)
var _a;
//1 Addition & substraction 
//2 multiplication & division
//3 using xoring 
// 4 using derefencing 
var a = 10;
var b = 20;
console.log("\n-----Before swapping------\n    a => ".concat(a, "\n    b => ").concat(b, "\n"));
_a = [b, a], a = _a[0], b = _a[1];
console.log("\n-----After swapping------\n    a => ".concat(a, "\n    b => ").concat(b, "\n"));
