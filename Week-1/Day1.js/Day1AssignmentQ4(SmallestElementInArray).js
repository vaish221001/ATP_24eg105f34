// find the lowest number in the array

let a=[10,20,30,40,50];
let smallest=a[0];
for(let i=0;i<a.length;i++){
if (a[i]<smallest){
    smallest=a[i];
}
}
console.log(`smallest number is ${smallest}`);