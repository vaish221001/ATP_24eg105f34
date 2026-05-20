import { Schema,Types,model } from "mongoose";

//create cart schema{product,count}
const cartSchema=new Schema({
    product:{
        type:Types.ObjectId,
        ref:"product" //name of the product model
    },
    count:{
        type:Number,
        default:1
    }
})
//Create user schema(username,password,email,age)
const userSchema=new Schema({
    //Structe of user resource
    username:{
        type:String,
        required:[true,"username is required"],
        miniLength:[4,"min length of username is 4 chars"],
        maxLength:[6,"max length of username is 6 chars"]
    },
    password:{
        type:String,
        required:[true,"Password Required"],
        unique:[true,"Password must be unque"]
    },
    email:{
        type:String,
        required:[true,"Email Required"],
        unique:[true,"Password must be unque"]
    },
    age:{
        type:Number,
        required:[false,"Does not Required"],
    },
    cart:[cartSchema], //{product:"",count:2}
},
{
        versionKey:false,
        timestamps:true,
    },
);

//generate userModel
export const userModel=model("user",userSchema)

