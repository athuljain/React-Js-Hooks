import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import "../Styles/UseContext.css"



function UseContext() {
  const codeExample = `
import React, { useContext } from 'react';

function MyComponent() {
 const {data} = useContext(MyContext);

 return <div>{data}</div>;
}
  `;

  return (
    <div className='ContextContainer'>
      <div className='SubContainerContext'>
        <h1 className='contextHtag'>useContext Hook</h1>
        <p className='contextPtag'>The useContext hook is a feature provided by React,<br />
          a popular JavaScript library for building user interfaces. <br />
          It allows you to access and consume data from a React context within a functional component.<br />
          Context is primarily used for passing data that needs to be accessible to many components <br />
          at different levels in the component tree without having to explicitly pass it through props <br />
          at each level.</p>
      </div>

      <div className='ContextSubDiv'>
        <h4 className='ContextH4Tag'>Creating a Context: <br />
          First, you need to create a context using the createContext function. <br />
          This function returns two components: a Provider and a Consumer.</h4> <br /> <br />

        <SyntaxHighlighter language="javascript" style={dracula}>
          {`const MyContext = React.createContext();`}
        </SyntaxHighlighter>

        <h4 className='ContextH4Tag'>Providing Data: <br />
          Wrap your application or a part of your component tree with the Provider component. <br />
          This is where you'll provide the data that you want to share with other components. <br />
          You do this by passing a value prop to the Provider.</h4> <br /> <br />

        <SyntaxHighlighter language="javascript" style={dracula}>
          {`<MyContext.Provider value={someData}>
  {/* Your components */}
</MyContext.Provider>`}
        </SyntaxHighlighter>

        <h4  className='ContextH4Tag'>Consuming Data: <br />
          Inside any functional component that's a descendant of the Provider, <br />
          you can use the useContext hook to access the data from the context.</h4> <br /> <br />

        <SyntaxHighlighter language="javascript" style={dracula}>
          {codeExample}
        </SyntaxHighlighter>
      </div>

      </div>
   
  );
}

export default UseContext;
