
let a:number[]=[4,5,7,10,20]

// a.forEach((myvalue,i)=>{

//     console.log("Myvalue is "+myvalue+" Current index is "+i)
// });

//rest parameter function

function display(...item:number[]){

    console.log(item)
}

// display(10,20,50);
// display(10);


//push & pop
// LIFO=> last in first out 
let a1:number[]=[];

// a1.push(45);
// console.log(a1);
// a1.push(78,80,90);
// console.log(a1);
//  let res=a1.pop();

// console.log(res);
// console.log(a1);


//splice method 
let a2:number[]=[10,78,96,30];
// console.log(a2);
// a2.splice(2,0,444);
// console.log(a2);
// a2.splice(3,0,700,800,100);
// console.log(a2);
// a2.splice(3,1);
// console.log(a2);
// a2.splice(1,2)
// console.log(a2);
// a2.splice(2,1,500);
// console.log(a2);
// a2.splice(2,2,1000,20000);
// console.log(a2);
// a2.splice(1,1,900,200);
// console.log(a2);

//slice
// it copy a section of data from an array

let str:string[]=['Core java','Advanced Java','Spring Boot','JSP','Angular 12','AWS','Jenking','Git Hub'];

// let temp=str.slice(1,6);
// console.log(`
// Original Array => ${str}
// --------------------------
// Copied Array => ${temp}
// `)

let a3:number[]=[2,3,4,5,6];

//map => to perform element by element & return its value 
let res=a3.map((myvalue)=>{
    return (myvalue*myvalue);
})
console.log(a3);
console.log(res);













