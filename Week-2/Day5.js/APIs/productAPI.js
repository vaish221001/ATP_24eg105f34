

import exp from 'express'
export const productApp=exp.Router();

let products=[]
//read all products
productApp.get('/products',(req,res)=>{
res.json({message:"all products",payload:products})
})
//read products with a given brand
productApp.get('/products/brand/:brand',(req,res)=>{
let brandOfUrl=req.params.brand

let product=products.find(productObj=>productObj.brand===brandOfUrl)

if(product===undefined){
return res.json({message:"product Not found"})
}

res.json({message:"Product found",payload:product})
})
//create new product
productApp.post('/products',(req,res)=>{

const newProduct=req.body;

products.push(newProduct)

res.json({message:"Product created"})

})
//update a product using id
productApp.put('/products',(req,res)=>{
let modifiedProduct=req.body;

let index=products.findIndex(productObj=>productObj.id===modifiedProduct.id)

if(index===-1){
return res.json({message:"product Not found"})
}

products.splice(index,1,modifiedProduct)

res.json({message:"product updated"})

})
//delete a product
productApp.delete('/products/:id',(req,res)=>{
let idOfUrl=Number(req.params.id)

let index=products.findIndex(productObj=>productObj.id===idOfUrl)

if(index===-1){
return res.json({message:"Product Not Found"})
}

products.splice(index,1)

res.json({message:"product deleted"})
})

