import { useState } from "react";
function Counter(){
    const [count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1)
    }
    const reset=(value)=>{
        reset(value)
    }
    console.log("counter component")
    return(
        <div className="text-center p-10 border-2">
            <h1 className="text-6xl">COUNTER</h1>
            <button type="button">+</button>
             <button type="button">-</button>
             <button type="button">reset</button>
        </div>
    )
}
