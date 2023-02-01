// anonymous function
//
// function does not have any name 
// it reduce on memory call and execute ur logic there itself 
var temp = function () {
    console.log("First type anonymous function is called ");
};
// temp();
var temp1 = function (a, b) {
    return (a + b);
};
console.log("Addition is " + temp1(7, 7));
