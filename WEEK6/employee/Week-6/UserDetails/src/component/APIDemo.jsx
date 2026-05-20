import { useEffect, useState } from "react";

function APIDemo(){
    let [users,setUsers]=useState([]);
    let[loading,setLoding]=useState(false);
    let[error,setError]=useState(null)
    useEffect(()=>{
      //a unction to make API req
      async function getData(){
        //set loading to true
        setLoding(true);
        try{
            let res=await fetch("https://jsonplaceholder.typicode.com/comments")
            let userlist=await res.json();
            //update state
            setUsers(userlist)
        }
        catch(err){
            console.log("err is".err)
            //upate error state
            setError(err);
        }
        finally{
         setLoding(false)
        }
      }
      getData();
        
    },[]);
    //deal with loading 
    if(loading){
        return(<p className="text-4xl p-10 text-center">Loading...</p>)
    }
    //deal with error
    if(error!=null){
        return(<p className="text-center p-10 text-red-700 text-5xl">{error.message}</p>)
    }
    console.log("API rendered")
    //Making API req neeed to be wauting until intial rener occurs hence we use useEffect
    //inital render->display->api req->re-render->display
return(
    <div className="text-center mt-10">
        <h1 className="text-8xl p-3 text-amber-200">LIST</h1>
        <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {users.map((userObj)=>(
                <div key={userObj.id}>
                    <p>{userObj.name}</p>
                    <p>{userObj.email}</p>
                </div>
            ))}

        </div>
    </div>

)
}
export default APIDemo