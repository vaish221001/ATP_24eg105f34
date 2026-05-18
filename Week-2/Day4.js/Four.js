/*
//Object Literals-only in javascript
const test={
    a:10,
    getData:function(){

    }
}
*
// create 20 onjects
class Student{
    //Properties
    sno;
    name;               
    email;
    //constructor
    constructor(sno,name,email){
        //Initialization of object
        this.sno=sno;
        this.name=name;
        this.email=email;
    }
    //methods
    getStudentName(){
        return this.name;
    }
}
//Creating Object
let std1=new Student(10,`ram`,`A@gmail.com`);
console.log(std1)
*/

//method,static,private,public


// //Spread operator(Create coppies of arrays 6 objects )

// let obj={a:100};
// //Creating a Copy
// let copyObj={...obj}   //Shalow copy
// obj.a=123;
// console.log(obj)
// console.log(copyObj)

// //person
// let person={
//     name:"Ram",
//     Address:{
//         city:"Hyd",
//         pincode:908080
//     }
// }

// let copyperson={...person}
// person.Address.city="Varangel";
// console.log(person)
// //Deep copy
// //let copyPerson=structuredClone(person)

//Desturbing(unpacking)
/*
let arr=[10,20,30]
let[a,b,c]=arr;
console.log(a,b,c)
let emp={
    sid:100,
    company:"CTS",
    address:{
        city:"hyd"
    }
}
let {sid,company,address:{city}}=emp;
console.log(sid,company,city)
*

//Syncronous

//time function
setTimeout(()=>{
    console.log("executed")    //acyncronous
},700)
 console.log("hi")
 *

 //promise
 console.log("friend is waiting...")
 let futureCondition=true;
 //promise producer(create promise)
 const promiseobj= new promise((fulfilled,rejected)=>{
    setTimeout()=>{
        if(futureCondition===true){
            fulfilled("hello")
        } else{
            rejected("bye")
        }
    }
 })
 console.log(promiseobj)


 //promise consumer
promiseobj
*
 //promise-i will send 10000 by tomorrow
 console.log("need to send money...")
 let futureCondition=true;
 const promiseobj=new Promise((fulfilled,rejected)=>{
    setTimeout()=>{

    }
 })
*/

// Examples of promises
// make API Request
// Hash a Password
// Creating Tokens
// Database / HTTP Libraries
// // File & Stream API's