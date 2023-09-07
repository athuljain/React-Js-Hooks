
import './App.css';
import UseState from './Components/UseState';
import MainPage from './Components/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/useState' element={<UseState />} />
      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
