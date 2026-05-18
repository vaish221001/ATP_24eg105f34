
const employees = [
  {eno: 101,name: "Ravi",marks: [78, 82, 91],},
  {eno: 102,name: "Bhanu",marks: [65, 70, 68],},
  {eno: 103,name: "Sneha",marks: [88, 92, 95],},
  {eno: 104,name: "Kiran",marks: [55, 60, 58],},
  {eno: 105,name: "Anitha",marks: [90, 85, 87],}];

/*
1.Insert new Emp at 2nd position
2.Remove an emp with name "Kiran"
3.Change the last mark 95 to 75 of emp  "Sneha"
*/
//1.
employees.splice(1,0,{eno: 101,name: "Hari",marks: [90, 87, 98]})
       console.log(employees)

//2.
let s=0;
for(let i in employees){
if(employees.name==="Kiran"){
  employees.splice(i,1)
}

}
 console.log(employees)

//3.
employees.splice(3,1,{eno: 103,name: "Sneha",marks: [88, 92, 75]})
 console.log(employees)

 //callback function-it is a function that calls the passing function as an argument
