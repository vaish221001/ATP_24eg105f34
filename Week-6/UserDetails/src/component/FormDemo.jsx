import React from "react";
import { useForm } from "react-hook-form";
function FormDemo(){
    const {register, //to reg form fields
        handleSubmit,// to handle submissions
        formState:{errors}//to handle validations
    } = useForm()
    //form submit func
    const onformsubmit=(obj)=>{
        console.log(obj);
    }
    return(
          <div>
            <h1 className="text-center text-5xl mt-10 text-indigo-950"> Form Demo</h1>
            <form className="max-w-md mt-10 mx-auto "onSubmit={handleSubmit(onformsubmit)}> 
                <div className="mb-3">
                    <label htmlFor="username">Username</label>
                    <input type="text" {...register("username",
                        {
                            required: "Username required",
                            validate:(v)=>v.trim().length!=0 || "White space  is not valid",
                            minLength: 4,
                            maxLength:15
                        }
                    )} id="username" className="border-2 w-full p-3"/>
                    {errors.username?.type==="required"&&<p className="text-red-500">{errors.username.message}</p>}
                    {errors.username?.type==="minLength"&&<p className="text-red-500">Minimum length of 4 char</p>}
                    {errors.username?.type==="maxLength"&&<p className="text-red-500">Maximum length of 15 char</p>}
                    {errors.username?.type==="validate"&&<p className="text-red-500">Whilte space is not valid</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="text" {...register("email",
                    {
                        required: "Email required",
                         validate:(v)=>v.trim().length!=0 || "White space  is not valid"
                    }
                    )} id="email" className="border-2 w-full p-3"/>
                    {errors.email?.type==="required"&&<p className="text-red-500">{errors.email.message}</p>}
                </div>
                <button type="submit" className="mx-auto p-3 block bg-indigo-400">Submit</button>
            </form>
          </div>
    )
}
export default FormDemo