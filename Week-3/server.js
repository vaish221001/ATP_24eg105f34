import exp from 'express'
import { connect } from 'mongoose'
// import { userApp } from '../APIs/userAPI.js';
import { userApp } from './APIs/userAPI.js';
import { productApp } from './APIs/productAPI.js';
const app = exp()
//Add body parser-if we won't write this, and  send request to user it showes undefined
app.use(exp.json());

import cookieParser from "cookie-parser";

app.use(cookieParser());
//forword req to userAPP if path starts with /user-api
app.use("/user-api", userApp)
app.use("/product-api", productApp)

//connect to database server
async function connectDB() {
  try {
    await connect("mongodb://localhost:27017");
    console.log("DB connection successfull")

    //start server
    app.listen(4000, () => console.log("server is running on  port  4000..."))

  } catch (err) {
    console.log("error in DB connection :", err);
  }
}
connectDB()

//Error handling middleware
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
})

//error=> {name,message,callstack}

//server.js changes


