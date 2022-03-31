import { useEffect, useState } from "react";


export default function COunterFunc() {




    //Gedächtnis
    const [count, setCount] = useState(0);
     

    useEffect(()=>{
        console.log("started");
    }, [count])

    let  increase = ()=> {
            setCount(count +1)
    }


    return (<div>
        <h1>FUnctional COunter</h1>
        <h2>{count}</h2>
        <button onClick={increase}>inc</button>
         </div>)
}