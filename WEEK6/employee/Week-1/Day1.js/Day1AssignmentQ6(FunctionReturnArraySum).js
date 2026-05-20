//write a functions that receives an array as arg and return their sum

let test2=function(arr){
    let sum=0;
for(let i=0; i<arr.length;i++){
    sum=sum+arr[i];
    
}
return sum;
}
arr=[10,20,30,40,50];
console.log(test2(arr));