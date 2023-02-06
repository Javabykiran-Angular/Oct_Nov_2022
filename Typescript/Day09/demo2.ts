//Shallow Copy & deep Copy (Js Interview Question)
let a=10;
let b=a;
// console.log(`
//     a=> ${a}
//     b=> ${b}
// `);
// a=20;
// console.log(`
//     a=> ${a}
//     b=> ${b}
// `);

let arr=[10,20,30,40];
let arr1=arr;
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

let arr2=[7,8,9,21];
let [...arr3]=arr2;
console.log(`
    arr2 => ${arr2}
    arr3=> ${arr3}
`);
arr2[0]=400;
console.log(`
-------------------
    arr2 => ${arr2}
    arr3=> ${arr3}
`);