/*
function test1(){
    console.log(1100);
}
console.log(test1());

let test=function(){
    return function(){
        return 100;
    }
}
let result=test();
console.log(result());
*
let createGame=function(level,nameOfPlayer){
    console.log(`Hello ${nameOfPlayer}, You are at level ${level}`);
}
let res=createGame(1,"Ram");
*

*
let createGame= function(nameOfPlayer){
    return function(level){
        console.log(`Hello ${nameOfPlayer}, You are at level ${level}`);
    }
    
}
let createlevel=createGame("Ravi");
createlevel(1);
createlevel(2);
createlevel(3);
*

//Sending function as an argument
let makePayment=function(amount,paymentType){
    console.log(`payment of ${amount} started`);
    paymentType()
}
let UPIpayment=function(){
    console.log(`UPI payment done`);
}
let cardPayment=function(){
    console.log(`Payment is Done`);
}
makePayment(2000,UPIpayment);
makePayment(5000,cardPayment);
*

//Global Scope

//clouser-it stores x variable in the temorarily in heap heap memory until the whole function is executed.
//every javascript function has clouse by default because of this clouser property the variables of outside scope will be maintained temorarily in the heap even the outside function executed is completed
let sum=function(x){
    //function Scope
    return function(y){
        return x+y;
    }
}
//block scope
let x=sum(20);
console.log(x(30)); //x is not defined
*

//Collections (Pack of Data)
-Array
-Object 
-Array of Objects
*

//Array
let marks=[90,98,76,78];
let names=["Ram","Sai","Madhu","Santu"];
console.log(marks,names);
//iterate (for loop)
for(let x of names){
    console.log(x);
}

//Objects
let students={
    sno:107,
    sname:"Lakshman",
    age:19,
    course: "CSE"

}
console.log(students.sname)

for(let y  in students){
    console.log(`${y} is ${students[y]}`)
}


//Array of Objects
let employee=[
    {eno:1,ename:"Jayaram"},
    {eno:2,ename:"Praneeth"},
    {eno:3,ename:"Vamshi"}
]
for(let z of employee){
console.log(`eno is ${z.eno} and ename is ${z.ename}`)
}
*

let student ={
    Roll_Number:1,
    First_Name:"Sai ",
    Last_Name:"Pulipati",
    Marks:[98,78,89,77],
    Address : {
        city : "Hyd",
        pincode : 900088
    },

    getFullName:function(){
    return this.First_Name+this.Last_Name},
    averageMarks: function(){
        let sum=0;
        for(let i of this.Marks){
            sum+=i;
        }
        return `Average Marks is ${sum/this.Marks.length}`;
    },
};

console.log(student.getFullName());
console.log(student.averageMarks());
*/

//Basic Operations//
let TestArray=[10,20,30]

//Dynamic  Insertion
  //Start
    TestArray.push(40)
    console.log(TestArray)
    TestArray.push(40)
     console.log(TestArray)

     //End
     TestArray.unshift(1,2,3)
      console.log(TestArray)
      
      //In Between
      TestArray.splice(2,0,11)
       console.log(TestArray)

//Dynamic Deletion
//Start
   let removedElement=TestArray.shift()
    console.log(TestArray)  
    //End
    TestArray.pop()
     console.log(TestArray)
     //In between
     TestArray.splice(1,1)
      console.log(TestArray)

 //Dynamic Updation
 TestArray.splice(1,1,50)
  console.log(TestArray)     

 let makePayment=function(amount,paymentType){
    console.log(`payment of ${amount} started`);
    paymentType()
}
let UPIpayment=function(){
    console.log(`UPI payment done`);
}
let cardPayment=function(){
    console.log(`Payment is Done`);
}
makePayment(2000,UPIpayment);
makePayment(5000,cardPayment);