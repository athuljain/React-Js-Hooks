import React, { useRef, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function UseRef() {
  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.focus();
  }, []);

  return (
    <div>
      <div className="sub-container">
        <h1 className="main-heading">useRef Hook</h1>
        <p className="main-paragraph">
          {" "}
          useRef is a Hook in React that provides a way to interact with the DOM
          (Document Object Model) and store mutable values <br />
          that persist across renders without causing re-renders. useRef is
          commonly used for: Accessing and interacting with DOM elements: You
          can create a ref object and attach it to a DOM element.
          <br />
          This allows you to access and manipulate that element directly.
          Storing and managing mutable values: Unlike useState, changing the
          value of a ref doesn't
          <br />
          trigger a re-render of the component. This is useful for storing
          values that shouldn't affect the component's rendering.{" "}
        </p>
      </div>

      <div className="RefExample">
        <p className="ExamplePtag">
          Type : <input ref={myRef} type="text" />
        </p>
      </div>

      <div className="CodeDiv">
        <p className="codePtag">code :</p>
      </div>

      <SyntaxHighlighter language="javascript" style={dracula}>
        {`   export default function UseRef() {
  
             const myRef = useRef(null);

  
            useEffect(() => {
   
    
            myRef.current.focus(); 
    
            }, []);

  
            return (
                    <div>
                        <div>
                            <p>Type : <input ref={myRef} type="text"  /></p>
      
                        </div>
      
                     <div>
                  </div> `}
      </SyntaxHighlighter>
    </div>
  );
}
