// 1.Exam portal simulator:
// -----------------------------
// When a student submits an exam:

//         Immediately show: “Exam submitted successfully”
//         After 2 seconds → show: “Evaluating answers…”
//         After 4 seconds → show: “Result: Pass”
studentSubmit=()=>{
    console.log("Exam Submitted sucessfully");
    setTimeout(()=>{
    console.log("Evaluating Answers....")

},4000)
setTimeout(()=>{
    console.log("Pass")
},9000)
}
studentSubmit()
