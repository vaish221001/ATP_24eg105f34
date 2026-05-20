/*
ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"

*/
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
//filter
const studentsPassed=students.filter((mark) => mark.marks>=40);
console.log(studentsPassed)
//map
const grades=students.map((grade)=>{
    if(grade.marks>=90){
        return "A grade"
    } else if(grade.marks>=75){
        return "B grade"
    }else if(grade.marks>=60){
        return "C grade"
    } else{
      return "D grade"
    }
});
console.log(grades)
//reduce
const avg = students
  .map(s => s.marks)
  .reduce((a, b) => a + b) / students.length;

console.log(avg);
//find 
const Scored= students.find((score)=>score.marks===92);
console.log(Scored)
//findIndex
const st=students.findIndex((sname) =>sname==="kiran")
console.log(st)