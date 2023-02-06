//Shallow Copy & deep Copy (Js Interview Question)
var a = 10;
var b = a;
// console.log(`
//     a=> ${a}
//     b=> ${b}
// `);
// a=20;
// console.log(`
//     a=> ${a}
//     b=> ${b}
// `);
var arr = [10, 20, 30, 40];
var arr1 = arr;
// console.log(`
//     arr => ${arr}
//     arr1=> ${arr1}
// `);
// arr[0]=500;
// console.log(`
// -----After change--------
//     arr => ${arr}
//     arr1=> ${arr1}
// `);
var arr2 = [7, 8, 9, 21];
var arr3 = arr2.slice(0);
console.log("\n    arr2 => ".concat(arr2, "\n    arr3=> ").concat(arr3, "\n"));
arr2[0] = 400;
console.log("\n-------------------\n    arr2 => ".concat(arr2, "\n    arr3=> ").concat(arr3, "\n"));
