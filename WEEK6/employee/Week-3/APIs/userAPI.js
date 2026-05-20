//Create min-express app(separate route)
import exp from 'express'
import { userModel } from '../models/userModel.js'
import { hash, compare } from 'bcryptjs'
import jwt  from 'jsonwebtoken' //it user default export,import later 
const { sign } = jwt
import {verifyToken} from '../middlewares/verifyToken.js'
export const userApp = exp.Router()

//Define user rest API  routes

//user Login
//create new user
userApp.post("/users", async (req, res) => {
    //get new user obj from req
    const newUser = req.body
    //hash the password
    const hashedPassword = await hash(newUser.password, 10)
    //replace plain password with hashed password
    newUser.password = hashedPassword
    //create new user document
    const newUserDocument = new userModel(newUser)
    //solve
    const result = await newUserDocument.save()
    //send response
    res.status(201).json({ message: "User Created" })
});

//Read all users
userApp.get("/users", verifyToken,async (req, res) => {
    //read all users from db
    let userList = await userModel.find();
    //send res
    res.status(200).json({ message: "users", payload: userList })
});

//Read user by object id
userApp.get("/users/:id",verifyToken, async (req, res) => {
    //read user email from req
    const emailOfUser=req.user?.email;

    //console.log(emailOfUser)

    //read object id from req params
  //  const uid = req.params.id
    //find user by id
    const userObj = await userModel.findOne({email:emailOfUser})
    //if not found
    if(!userObj){
        return res.status(404).json({message:"user not found"})
    }
    //send res
    res.status(200).json({ message: "user", payload: userObj })
});


//update a user by id
userApp.put("/users/:id",verifyToken, async (req, res) => {
    //get modified user from req
    const modifiedUser = req.body;
    const uid = req.params.id;

    //find user by id and update
    const updateUser = await userModel.findByIdAndUpdate(uid, { $set: { ...modifiedUser }, new: true })

    //send res
    res.status(200).json({ message: 'User modified', payload: updateUser })
})

//Delete a user by id
userApp.delete("/users/:id",verifyToken, async (req, res) => {
    //get modified user from req
    const modifiedUser = req.body;
    const uid = req.params.id;

    //find user by id and delete
    let updateUser = await userModel.findByIdAndDelete(uid, { $pop: { ...modifiedUser } })

    //send res
    res.status(200).json({ message: 'User deleted', payload: updateUser })
})

//user login
userApp.post("/auth", async (req, res) => {
    //get user cred obj from client
        console.log(req.body);
    const { email, password } = req.body;

    //verify email
    let user = await userModel.findOne({ email: email })
    //if email not existed
    if (!user) {
        return res.status(404).json({ message: "Invalid email" });
    }
    //compare passwords
    let results = await compare(password, user.password)
    //if password not matched
    if (!results) {
        return res.status(400).json({ message: "Invalid Password" })
    }
    //if password are mathched 
    //create token(jsonwebtoken -jwt--jaat )
    const signedToken = sign({ email: user.email }, "abcdef", { expiresIn: 10000 })
    //send token in res
    // res.status(200).json({message:"Login success",token:signedToken})

    //host token as httpOnly cookie
    res.cookie("token", signedToken, {
        httpOnly: true,
        sameSite: "lax",
        secure: false
    })
    //send res
    res.status(200).json({ message: "login Success", payload: user })
})



//add product to the cart 
// add product to cart
userApp.put('/cart/product-id/:id', verifyToken, async (req, res) => {

    // get product id from URL
    let productId = req.params.id;

    // get current user email from token
    let emailOfUser = req.user?.email;

    // find user
    const user = await userModel.findOne({ email: emailOfUser }).populate("cart.product")

    // if user not found
    if (!user) {
        return res.status(404).json({ message: "user not found" });
    }

    // update cart
  const result = await userModel.findOneAndUpdate(
  { email: emailOfUser },
  { $push: { cart: { productId: productId } } },
  { returnDocument: "after" }
);

    res.status(200).json({
        message: "product added to cart",
        payload: result
    });

});


// User created   === "User  created" -->false
// 200 -- success
// 201 -- created
// 400 -- bad request
// 401 -- Unauthorised
// 404 -- Not found
// 500 -- Server error