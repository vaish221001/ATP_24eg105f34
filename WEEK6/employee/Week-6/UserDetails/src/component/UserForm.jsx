import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
function UserForm(){
    const [users,setUsers]=useState([])
    const{register,
        handleSubmit, 
         formState:{errors}//to handle validations
        } = useForm()

     const onformsubmit=(obj)=>{
        setUsers([...users,obj])
        }
    return(
        <div className="bg-amber-100 max-w-3xl mx-auto mt-10 mb-20 rounded-4xl px-10 py-6">
            <h1 className="text-center p-10 text-5xl mt-20">User Form</h1>
            <form className="max-w-md mt-10 mx-auto "onSubmit={handleSubmit(onformsubmit)}>
                <div className="mb-4">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" {...register("firstname",{
                        required: "Firstname required",
                        minLength: 4,
                         validate:(v)=>v.trim().length!=0 || "White space  is not valid"
                    })
                    } className="border-2 w-full p-3"  id="firstname"/>
                    {errors.firstname?.type==="required"&&<p className="text-red-500">{errors.firstname.message}</p>}
                    {errors.firstname?.type==="minLength"&&<p className="text-red-500">Required minimum of 4 character</p>}
                    {errors.firstname?.type==="validate"&&<p className="text-red-500">Whilte space is not valid</p>}
                </div>
                     <div className="mb-4">
                    <label htmlFor="email">Email</label>
                    <input type="text" {...register("email",{
                        required: "Email required",
                         validate:(v)=>v.trim().length!=0 || "White space  is not valid"
                    })
                    } className="border-2 w-full p-3"  id="email"/>
                    {errors.email?.type==="required"&&<p className="text-red-500">{errors.email.message}</p>}
                    {errors.email?.type==="validate"&&<p className="text-red-500">Whilte space is not valid</p>}
                </div>
                    <div className="mb-4">
                    <label htmlFor="dob">Date Of Birth</label>
                    <input type="date" {...register("dob",{
                        required: "Date of Birth required",
                    })
                    } className="border-2 w-full p-3"  id="dob"/>
                    {errors.dob?.type==="required"&&<p className="text-red-500">{errors.dob.message}</p>}
                </div>
                <button type="submit" className="w-full p-3 border-black bg-amber-600 text-white mt-2">Add User</button>
            </form>
            <div className="mt-10">
        <h1 className="text-4xl text-center mb-4">List of Users</h1>

        <table className="mx-auto p-10 mb-20 border">
          <thead>
            <tr>
              <th className="border px-4 py-2">First Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">DOB</th>
            </tr>
          </thead>
          <tbody></tbody>
        {users.map((obj, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{obj.firstname}</td>
                <td className="border px-4 py-2">{obj.email}</td>
                <td className="border px-4 py-2">{obj.dob}</td>
              </tr>
            ))}
          </table>
          </div>
           </div>

)
}
export default UserForm;