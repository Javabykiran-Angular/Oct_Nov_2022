//Fat Arrow Function/ Arrow function
//it is advnced version of anonymous function
var temp1 = function () {
    console.log("fat Arrow function is called....");
};
// temp1();
var temp2 = function (a, b) {
    return (a + b);
};
// console.log(`Addition is ${temp2(10,2)}`)
// optional parameter function
function add1(a, b) {
    console.log("Value of a is " + a); //10
    console.log("Value of b is " + b); //undefined
    console.log("Addition of a+b is " + (a + b)); //nan=> not a number
}
// add1(10);
function add2(a, b) {
    console.log("Value of a is " + a); //10
    console.log("Value of b is " + b); //undefined
    console.log("Addition of a+b is " + (a + b)); //nan=> not a number
}
// add2();
// add2(4,5);
//Default parameter function
function add3(a, b) {
    if (b === void 0) { b = 10; }
    console.log("Value of a is " + a); //10
    console.log("Value of b is " + b); //undefined
    console.log("Addition of a+b is " + (a + b)); //nan=> not a number
}
// add3(7);
function add4(a, b) {
    if (a === void 0) { a = 20; }
    console.log("Value of a is " + a); //10
    console.log("Value of b is " + b); //undefined
    console.log("Addition of a+b is " + (a + b)); //nan=> not a number
}
// add4(7,6);
function add5(a, b) {
    if (a === void 0) { a = 20; }
    console.log("Value of a is " + a); //10
    console.log("Value of b is " + b); //undefined
    console.log("Addition of a+b is " + (a + b)); //nan=> not a number
}
// add5();
// add5(8,90);
function add6(a, b) {
    if (b === void 0) { b = 30; }
    console.log("Value of a is " + a); //10
    console.log("Value of b is " + b); //undefined
    console.log("Addition of a+b is " + (a + b)); //nan=> not a number
}
add6(45);
