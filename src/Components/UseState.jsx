import { useState } from "react"

export default function UseState(){

    const [count , setCount]= useState(0)

    function Increment(){
        setCount(count + 1)
    }
    function Decrement(){
        if(count > 0){
        setCount(count - 1)
        }
    }
    function Reset(){
        setCount(0)
    }
    return(
        <div className="main-container">
            <div className="sub-container">
            <h1 className="main-heading">useState Hook</h1>
            <p className="main-paragraph">  the useState hook is a fundamental hook that allows you to add state management to functional components.<br />
                It provides a way to declare and manage state variables within your component.</p>

            </div>
            <h1 className="sub-heading" >Counter App using useState hook</h1>

            <h2 className="Count-heading">Count :{count} </h2>

            <button className="incrementBtn" onClick={Increment} >Increment</button>
            <button className="decrementBtn" onClick={Decrement} >Decrement</button>
            <button className="resetBtn" onClick={Reset} >Reset</button>

``

        </div>
    )
}