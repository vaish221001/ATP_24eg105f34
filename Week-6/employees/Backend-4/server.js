import exp from 'express'
import { connect } from 'mongoose'
import { employeeApp } from './APIs/employeeAPI.js'
import { config } from 'dotenv'
import cookieParser from "cookie-parser";
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
config({ path: path.join(__dirname, '.env') })
const app=exp()
//add cors middleware
app.use(cors())
//body parser middleware
app.use(exp.json());
app.use(cookieParser());
//path level middleware
app.use("/employee-api", employeeApp);

//connect to database
const connectDB=async()=>{
try{
await connect(process.env.DB_URL);
console.log("DB server connected");
//assign port
const port =process.env.PORT || 4000
app.listen(port,()=>console.log(`server listening on ${port}...`))

}catch(err){
console.log("err in db connection",err)
}
}
connectDB();


//To handle invalid Path
app.use((req, res, next) => {
  res.status(404).json({ message: `Path ${req.url} is Invalid` })
})

//To handle errors
app.use((err, req, res, next) => {
  console.log(err.name)
  console.log(err.stack);
  //validation Error
  if (err.name === "ValidationError") {
    return res.status(400).json({ message: "error Occurred", error: err.message })
  }
  //Cast Error
  if (err.name === "CastError") {
    return res.status(400).json({ message: "error Occurred", error: err.message })
  }
  //Custom Error
  //send Server side Error
  return res.status(500).json({ message: "error Occurred", error: "Server side error" })
});

