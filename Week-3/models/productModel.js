import { Schema,model } from "mongoose";
//create product schema(productId, productName, price,brand)
const productSchema = new Schema({
    productId:{
        type:Number,
        required:[true,"product ID is created"],
        min:[1,"min length of Id is 1 num"],
        max:[3,"max length of Id is 3 num"],
    },
    productName:{
        type:String,
        required:[true,"product name is created"],
        minLength:[4,"min length of product name is 4 char"],
        maxLength:[10,"min length of product name is 10 char"],
    },
    price:{
        type:Number,
        required:[true,"price is created"],
        min:[10000,"min length of Id is 10000 num"],
        max:[50000,"max length of Id is 50000 num"],
    },
    brand:{
        type:String,
        required:[true,"brand is created"],
    },
},
{
        versionKey:false,
        timestamps:true,
    },
);

//generate productModel
export const productModel=model("product",productSchema)