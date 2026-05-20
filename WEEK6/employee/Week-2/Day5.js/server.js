//create HTTP request
import exp from 'express'
import { userApp } from './APIs/userAPI.js'
import { productApp } from './APIs/productAPI.js'
const app = exp();

//use body parser middleware
app.use(exp.json())

//set a port number
const port = 3000;


// .use --->middleware
  //farword req to userAPI if path starts with /user-api
app.use('/user-api', userApp)

//forword the req to product-api
app.use('/product-api', productApp)

// Assign port number to HTTP server
app.listen(port,()=>console.log(`Server listing to port ${port}...`))

//POSTMAN, rest client behaves like a client side application
  // nodemon to automatically update contents in server without restarting the server


//create a custom middleware
function middleware1(req,res,next){
  //send response from middleware
  // res.json({message:"this response from middleware 1"})
  console.log("middleware 1 executed")
  next()
}
function middleware2(req,res,next){
  //send response from middleware
  // res.json({message:"this response from middleware 1"})
  console.log("middleware 2 executed")
  next()
}

//use middleware
app.use(middleware1)
app.use(middleware2)

