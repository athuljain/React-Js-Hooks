
import './App.css';
import UseState from './Components/UseState';
import MainPage from './Components/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UseEffect from './Components/UseEffect';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/useState' element={<UseState />} />
        <Route path='/useEffect' element={<UseEffect />} />
      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
