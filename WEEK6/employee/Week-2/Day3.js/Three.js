/*
let person ={
    name:"ravi",
    age:25
}

//Add property
person.city='hyd'
//Update a Property
person.name='Bhanu'
//Delete a Property
delete person.age

console.log(person)
*
//Advanced array operation
let testData = [90,45,-12,65,73]

//Filter//-filtering the data 

//element greater than 30
let r = testData.filter((element)=> element>30);
console.log(r)

//elements between 40 and 80
let s = testData.filter((element) => element>40 && element<80);
console.log(s);

//Map//-updating,modifying the data

//Add 10 for each element
let u = testData.map((element) => element+10);
console.log(u);
//if we assign filter job it returns in boolean form 

//add 10 if element is less  than 50 and subtract 20 if element is greater than 50
let w = testData.filter(function(element){
    if(element<50){
       return element+10
} else 
    return element-20

})
console.log(w)
*/

//Reduse//
let testData = [90,45,-12,65,73]
/*
//find sum of elements
const sum=testData.reduce((accumilator,element) => accumilator+element)
console.log(sum)

//find small
const small=testData.reduce((accumilator,element)=> accumilator<element? accumilator:element )
console.log(small)

//find big
const big=testData.reduce((accumilator,element)=> accumilator>element? accumilator:element )
console.log(big)
*
//Find//

//Search 45
let v=testData.find(element => element===45)
console.log(v)
//FindIndex//

let m=testData.findIndex(element => element===45)
console.log(m)
*
//Sort//

let data=[9,10,8,4]
let newArray=data.sort((a,b)=>a-b)// it is in accending order if you want decending order make a-b as b-a 
console.log("new Array is",newArray)
console.log("Data is",data)
*/


//filter students with marks >80
//     let r1=students.filter(student=>student.marks>80)
//     console.log(r1)
//     //map to get only names
//     let r2=students.map(student=>student.name)
//     console.log(r2)
//     //reduce to get sum of marks
//     let r3=students.reduce((sum,student)=>sum+student.marks,0)
//     console.log(r3)



//error handling

//what is a error
// console.log(a) //when we try to access a variable which is not declared we will get a reference error
// console.log([1,2,3].filter()) //when we try to call a function without providing the required arguments we will get a type error

//creating new error
// const err=new Error("this is new error")
// console.log(err.name) 
// console.log(err.message) 
// console.log(err.stack)

//handling

try{
    console.log(a) //this will throw a reference error
}catch(err){
    console.log("error is handled")
    console.log(err.name) 
    console.log(err.message) 
    console.log(err.stack)
}finally{
    console.log("this will be executed always")
}


//Handling errors
console.log("first")
try{
    console.log(a);
}
catch(err){
    console.log(err.message)
}
console.log("second")
console.log("third")


