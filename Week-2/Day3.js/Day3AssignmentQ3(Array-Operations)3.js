/*
Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92
    */

const marks = [78, 92, 35, 88, 40, 67];
//filter
    let r=marks.filter((Element)=>Element>=40)
    console.log(`pass marks`,r)
//map
let add=marks.map((Element)=> Element+5)
console.log(add)
//reduce
const highest=marks.reduce((accumilator,element)=> accumilator>element? accumilator:element )
console.log(highest)
//find
let v=marks.find(element => element<40)
console.log(v)
//findIndex
let m=marks.findIndex(element => element===92)
console.log(m)

