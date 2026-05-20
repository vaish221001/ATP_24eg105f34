// Create Product REST API with below features
// Product document structure
//      a.productId (required)
//      b.productName(required)
//      c.price(required, min price 10000 and max price 50000)
//      d.brand(required)
// REST API with below operations
//      a. Create product
//      b. Read all products
//      c. Read a product by productId
//      d. Update a product by productId
//      e. Delete a product by productId
//          ------

//Create min-express app(separate route)
import exp from 'express'
import { productModel } from '../models/productModel.js'
import {hash} from 'bcryptjs'
//const product = exp.Router()
export const productApp=exp.Router()
import { verifyToken } from "../middlewares/verifyToken.js";
//define all rest API routes
//create new user
productApp.post("/product",verifyToken,async (req,res)=>{
    const newProduct=req.body
    const newProductDocument=new productModel(newProduct)
    const result=await newProductDocument.save()
    res.status(201).json({message:"product created"})
});

productApp.get("/product", verifyToken,async (req, res) => {
    let productList = await productModel.find();
    res.status(200).json({ message: "products", payload: productList })
});
//Read product by id
productApp.get("/product/:id",verifyToken, async (req, res) => {

    //Step 1: Read product id from URL
    const pid = req.params.id;

    //Step 2: Find product in MongoDB using id
    const productObj = await productModel.findById(pid);

    //Step 3: Send response to client
    res.status(200).json({
        message: "product",
        payload: productObj
    });
});
//Route to handle PUT request for updating a product
productApp.put("/product/:id",verifyToken, async (req, res) => {

    // Read the modified product data sent by the client
    const modifiedProduct = req.body;

    // Extract product id from URL parameters
    const pid = req.params.id;

    //Find product by id and update it in database
   const updatedProduct = await productModel.findByIdAndUpdate(
  pid,
  { $set: { ...modifiedProduct } },
  { returnDocument: 'after' }
);

    // Send response back to client
    res.status(200).json({message: "Product updated successfully",payload: updatedProduct});
});

//Route to handle DELETE request for removing a product
productApp.delete("/product/:id",verifyToken, async (req, res) => {
    const pid=req.params.id;
    const deletedProduct=await productModel.findByIdAndDelete(pid);

    // Send response to client
    res.status(200).json({ message:"Product deleted successfully",payload:deletedProduct });
});


//product create API
productApp.post("/auth", verifyToken,async (req, res) => {

    //get product data from client
    console.log(req.body);

    const { productId, productName, price, brand } = req.body;

    //check if product already exists
    let product = await productModel.findOne({ productId: productId });

    if (product) {
        return res.status(400).json({ message: "Product already exists" });
    }

    //create new product document
    const newProduct = new productModel({
        productId,
        productName,
        price,
        brand
    });

    await newProduct.save();

    //send response
    res.status(201).json({
        message: "Product created successfully",
        payload: newProduct
    });

});