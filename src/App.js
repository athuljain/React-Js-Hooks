
import './App.css';
import UseState from './Components/UseState';
import MainPage from './Components/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UseEffect from './Components/UseEffect';
import UseContext from './Components/UseContext';
import UseRef from './Components/UseRef';
import Props from './Components/Props';

function App() {

// props creating
  const dataToPass = "Hello from Parent!";


  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/useState' element={<UseState />} />
        <Route path='/useEffect' element={<UseEffect />} />
        <Route path='/useContext' element={<UseContext />} />
        <Route path='/useRef' element={<UseRef />} />
        <Route path='/useProps' element={< Props data={dataToPass} /> }  />
      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
