/*
Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"
    */

const courses = ["javascript", "react", "node", "mongodb", "express"];
//filter
    let r = courses.filter((element)=> element.length>5)
    console.log(r)
//map 
 let s=courses.map((element) => {
   return  element.toUpperCase()
 }

) 
console.log(s)
//reduce
let single=courses.reduce((accumilator,element)=> accumilator +" | "+ element )
console.log(single)
//find
let t=courses.find(element => element=="react")
console.log(t)
//findIndex
let m=courses.findIndex(element => element==="node")
console.log(m)