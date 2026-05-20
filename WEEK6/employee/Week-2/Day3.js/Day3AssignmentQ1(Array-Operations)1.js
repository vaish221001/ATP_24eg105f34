/*
Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28
    */
  //filter
    const temperatures = [32, 35, 28, 40, 38, 30, 42];
   let r = temperatures.filter((element)=> element>35);
console.log(`Temperature Above 35 are`,r)
//map
let s = temperatures.map((celsius)=>{
     let fahrenheit =( (celsius * 9 / 5) + 32);
     return fahrenheit;
} )
console.log(s)
//reduse
const average=temperatures.reduce((accumilator,element) => accumilator+element/2)
console.log(average)
//Find
const m=temperatures.find(element => element>40)
console.log(m)
//findIndex
const v=temperatures.findIndex(element => element===28)
console.log(v)