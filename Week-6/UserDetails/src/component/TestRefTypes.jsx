import { useState } from "react";
function TestRef(){
    const [user,setUser]=useState({username:Ravi,age:21,city:Hyd})
    const [marks,setMarks]=useState([10,20,30])
    const updateUser=()=>{
      setUser({...user,username:Bhanu})
    };
    const updateMarks=()=>{
        setMarks([40,...marks]);
    }
    return(
        <div>
            <p className="text-3xl">Username:{user.username}</p>
            <p className="text-3xl">Age:{user.age}</p>
            <p className="text-3xl">City:{user.city}</p>
            <button onClick={updateUser}>Update User</button>
            
        </div>
    )
}
export default TestRef;