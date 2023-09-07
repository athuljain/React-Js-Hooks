import { useNavigate } from "react-router-dom";

export default function MainPage(){

    const navigate=useNavigate()

    function UseStatePage(){
        console.log("useSate button Click");
        navigate('/useState')

    }

    return(
        <div>
            <div>
            <h1>React js Hooks</h1>
            </div>
            <div>
            <p>React.js, often referred to as React, is an open-source JavaScript library for building user interfaces. <br />
            It was developed by Facebook and is commonly used for creating web applications with dynamic and interactive user interfaces. <br />
             React allows developers to build reusable UI components and efficiently update the user interface when data changes, <br />
             making it a popular choice for building modern web applications.</p>


            <h3> Hooks make it easier to write and maintain React code, as they allow you to reuse stateful logic without changing your component's structure into a class.</h3>
            </div>

            <div>
                <button onClick={UseStatePage} >useState</button>
            </div>



        </div>
    )
}