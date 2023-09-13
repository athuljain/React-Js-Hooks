
import Header from "./Header";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Props(props){
    return(
        
            <div className="main-container">
      <Header />
      <div className="sub-container">
        <h1 className="main-heading">useProps Hook</h1>
        <p className="main-paragraph">
          {" "}
          In React, you can pass data to another component by providing props when you render <br />
           the child component within the parent component. <br />
            Here's a step-by-step guide on how to pass data from a parent component to a child component using props:
         
        </p>


      </div>
            <div>
            <div>
      <h2>Props receive</h2>
      <p>Data received from Parent:  {props.data}</p>
    </div>
            </div>
<p>code:</p>

<h4>
First, create the parent component that will pass data to the child component. Inside the parent component, <br /> 
you'll define the data you want to pass as props.
</h4>

<SyntaxHighlighter language="javascript" style={dracula}>
    {
        `
        function App() {

            // props creating
              const dataToPass = "Hello from Parent!";
            
            
              return (
                <div className="App">
            
                  <BrowserRouter>
                  <Routes>
                  <Route path='/useProps' element={< Props data={dataToPass} /> }  />
                  </Routes>
                  </BrowserRouter>
            
                  
                </div>
              );
            }
            
            export default App;
            
        `
    }
</SyntaxHighlighter>

<h4>
create the child component  that will receive the data as props and use it.
</h4>
<SyntaxHighlighter language="javascript" style={dracula}>
    {`
    export default function Props(props){
        return(
            
                <div className="main-container">
                <h2>Props receive</h2>
      <p>Data received from Parent:  {props.data}</p>
    </div>
    `}
</SyntaxHighlighter>

        </div>
    )
}