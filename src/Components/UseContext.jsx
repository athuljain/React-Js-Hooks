export default function UseContext(){
    return(
        <div>
            <div>
            <h1>useContext Hook</h1>
            <p>The useContext hook is a feature provided by React,<br />
             a popular JavaScript library for building user interfaces. <br /> 
             It allows you to access and consume data from a React context within a functional component.<br />
            Context is primarily used for passing data that needs to be accessible to many components <br />
             at different levels in the component tree without having to explicitly pass it through props <br />
              at each level.</p>
              </div>

                
        <div>
        <h4>Creating a Context: <br /> 
                First, you need to create a context using the createContext function. <br />
                 This function returns two components: a Provider and a Consumer.</h4> <br /> <br />

                 <p>
                 const MyContext = React.createContext();

                 </p>

                 <h4>Providing Data: <br /> 
                 Wrap your application or a part of your component tree with the Provider component. <br /> 
                 This is where you'll provide the data that you want to share with other components. <br />
                  You do this by passing a value prop to the Provider.</h4> <br /> <br />

            <p>  <MyContext.Provider value={someData}>
                    {/* Your components */}
                </MyContext.Provider>
            </p>


            <h4>Consuming Data: <br />
             Inside any functional component that's a descendant of the Provider, <br /> 
             you can use the useContext hook to access the data from the context.</h4> <br /> <br />

             <p>
         "    import React, { useContext } from 'react';

            function MyComponent() {
             const data = useContext(MyContext);

  return <div>{data}</div>;
}

             </p>

        </div>

        <div>
            <h4>
            import React, { createContext, useContext } from 'react';

// Create a context
const MyContext = createContext();

// A component that provides data
function ParentComponent() {
  return (
    <MyContext.Provider value="Hello from Context">
      <ChildComponent />
    </MyContext.Provider>
  );
}

// A component that consumes data
function ChildComponent() {
  const data = useContext(MyContext);

  return <div>{data}</div>;
}

function App() {
  return (
    <div>
      <ParentComponent />
    </div>
  );
}

export default App;

            </h4>
        </div>




        </div>
    )
}