//write a function that recieves an array & search element as args and returns the index of that search element in the array. It should return "Not Found" when search element not found.

let test3=function(){

for(let i=0; i<arr.length;i++){
    if(arr[i]==args){
        return `value found at element ${i}`;
    } 
}
  return `nod found`;
  }
let args=30;
arr=[10,20,30,40,50];
let h=test3(arr,args)
console.log(h);


let a=10
