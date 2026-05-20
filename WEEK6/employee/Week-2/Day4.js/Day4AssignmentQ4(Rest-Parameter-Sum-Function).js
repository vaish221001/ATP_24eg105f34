//Exercise 3: Create a function that receives any number of args as arguments and return their sum using REST parameter

const FinsSum=(...numbers)=>{
    return numbers.reduce((Sum,el)=>Sum+el)

}
let result=FinsSum(10,20,30,40)
console.log(result)