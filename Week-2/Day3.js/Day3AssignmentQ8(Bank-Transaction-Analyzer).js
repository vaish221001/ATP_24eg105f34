/*
ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer

You are building a bank statement summary.

Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000
    */

    const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

//filter
const credittransaction=transactions.filter(t=> t.type==="credit")
console.log(credittransaction)
//map
const amount=transactions.map(t=>t.amount)
console.log(amount)
//reduce
const finalBalance=transactions.reduce((balance,t)=>{
   
    if(t.type=="credit"){
        return balance+t.amount;
    } else {
        return balance-t.amount;
    }
},0);
console.log(finalBalance)
//find
const fistTransaction=transactions.find(t =>t.id===1)
console.log(fistTransaction)
//findIndex
const index=transactions.findIndex(t => t.amount===5000)
console.log(index)

