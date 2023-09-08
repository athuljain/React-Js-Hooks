import React, { useState, useEffect } from 'react';
import "../Styles/UseEffect.css"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';


export default function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (


    <div>
        <div className="sub-container">
            <h1 className="main-heading">useEffect Hook</h1>
            <p className="main-paragraph"> The useEffect hook in React is a built-in hook that allows you to perform side effects in your functional components.<br /> 
            Side effects are operations that occur in a React component, such as data fetching, DOM manipulation, setting up subscriptions, or anything that involves interactions with the outside world.</p>

            </div>

        <div>


      <p className='EffectSub'>You clicked {count} times</p>
      <button className='Effect-Btn' onClick={() => setCount(count + 1)}>
        Click me
      </button>
      </div>


    <div>

<p>Code</p>

<SyntaxHighlighter language="javascript" style={dracula}>
{`
    const [count, setCount] = useState(0);

useEffect(() => {
  document.title = "You clicked ${count} times"; \\use here as backtick 
});

return (

  <div>
     
    <p className='EffectSub'>You clicked {count} times</p>
    <button className='Effect-Btn' onClick={() => setCount(count + 1)}>
      Click me
    </button>
    </div>
  
    `}
    </SyntaxHighlighter>

    </div>

  

    </div>
  );
}