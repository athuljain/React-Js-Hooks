import { useState } from "react"

export default function UseState(){

    const [count , setCount]= useState(0)

    function Increment(){
        setCount(count + 1)
    }

    return(
        <div>
            <div>
            <h1>useState Hook</h1>
            <p>the useState hook is a fundamental hook that allows you to add state management to functional components.<br />
                It provides a way to declare and manage state variables within your component.</p>

            </div>
            
            <h3>Count :{count} </h3>

            <button onClick={Increment} >Increment</button>



        </div>
    )
}