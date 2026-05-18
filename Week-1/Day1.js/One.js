//Data
// Declaration 
/*
let x;
//const y;

let a=10;

//const b;
a=10;
b=2;
//array
let marks=[10,20,30,40];
let status = true;
//object
let person = {
    pid : 30,
    username : 'Mani'
}
console.log(marks,person,a,b);
console.log("a is", a, "b is",b);
*
//String
//boolean
//Array-group of elements
//object-group of propertites
//JavaScript is a Dynamically typed programing language 
let a;
console.log(typeof a);
a=10;
console.log(typeof a);
a='Hello';
console.log(typeof a);
a=true;
console.log(typeof a);
a=[1,2,3];
console.log(typeof a);
a={}
console.log(typeof a);
*
let a=123; //number
let b='123'; //string
console.log(a,b);
*

//Storage
//call the memory    heap memory-reference of the perticular object.

//comparision
let a=100;
let b="1000";
console.log(a==b);

//operators...
//control statements
// if, if else, if else if
if(condition){

}
*
//itersation
//for, while, do while

//switch

let x=100;
x='123';
x=400;
const y=12;
x=15;
console.log(x,y);

*/

//function declaration 
function findsum(a,b){
    //body of the function
    //console.log("first");
    let sum = a+b;
    return sum;
}
//funcction call

let result=findsum(100,200)
console.log(result);

//function expression- storing a function in a variable 
let a= function(){
    return 100;
}
let r=a()
console.log(r);

// Arrow function (To specify the function expression)
let test= (a,b) =>a+b;
let t=test(10,20);
console.log(t);