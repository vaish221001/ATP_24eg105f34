//write a function that recieves 3 number args and return the big number

let test=function(x,y,z){
   let s=(x>y&&y>z)?(`x is bigger ${x}`):(x>z)?(`y is bigger ${ y}`):(`z is bigger ${z}`);
   return s;
}
let r=test(10,20,30);
console.log(r);