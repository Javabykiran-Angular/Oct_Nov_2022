
//data types
// number(int,float,long,double,short),string(""/''),boolean(true/flase),
// any(number,string,boolean)
//void => it is neutral data type=> it does not point anything
//miesc. null & undefined => it used as value as well as data type

var a1:number=10;   // forward declaration & defination 

// console.log("Value of a1 "+a1);
// console.log('==== Value of a1 '+a1);
// console.log(`value of a1= ${a1} `);
// back tic operator

var str!:string;
// console.log("Value of str is "+str);

str='Sumit';
// console.log("Value of str is "+str);

var myany:any;
myany=2.5;
// console.log("myany is "+myany);
myany='Sumit';
// console.log("myany is "+myany);
myany=true;
// console.log("myany is "+myany);

var a;

// Literal type 

var b1:number|string;
b1=45;
// console.log("Value of b1 "+b1);
b1='Raokhande';
// console.log("Value of b1 "+b1);

var b2:50|string;
b2='Angular';

var b3=78;


// type assertion
// it is used to tell to the compiler to access or perform any functionality of that variable
// pre-requirest 
// data type should be any/unknown/object
    var c1:any;
    //1 Angle bracket
        // ts file is used 
    //2 as syntax
        // in html file & ts file 
        
   //1 Angle bracket
    c1=10;
   var temp=(<string>c1);
    // temp.
    console.log(c1);
    //2 as syntax
    var temp1=(c1 as string);
    // temp1.






