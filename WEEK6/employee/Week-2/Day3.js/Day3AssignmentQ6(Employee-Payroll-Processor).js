// ASSIGNMENT 3:
// -------------
// Employee Payroll Processor

// You are building a salary processing module in a company HR app.

// Test data:
// const employees = [
//   { id: 201, name: "Amit", salary: 45000, department: "IT" },
//   { id: 202, name: "Neha", salary: 60000, department: "HR" },
//   { id: 203, name: "Rahul", salary: 75000, department: "IT" },
//   { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
// ];

// Tasks:
//     1. filter() employees from IT department
//     2. map() to add:
//             netSalary = salary + 10% bonus

//     3. reduce() to calculate total salary payout
//     4. find() employee with salary 30000
//     5. findIndex() of employee "Neha"


const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
//filter
const itDeparment=employees.filter(employee => employee.department=="IT");
console.log(itDeparment)
//map
const salary=employees.map((employee) => {
   return  {
    employee,
    netSalary:employee.salary+(employee.salary*0.1)

   }
})
console.log(salary)
//reduce
const totalSalary=employees.reduce((a,b)=>{
    return a+b.salary

},0)
console.log("Total Salary",totalSalary)
//find
const emp=employees.find(employee => employee.salary === 30000);
console.log(emp)
//findIndex
const Index=employees.findIndex(employee => employee.name === "Neha");
console.log(Index)

