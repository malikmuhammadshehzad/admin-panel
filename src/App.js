
import './App.css'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Settings from './pages/Settings';



function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route  exact path='/' element={<Home/>} />
      <Route  exact path='/about' element={<About/>} />
      <Route  exact path='/setting' element={<Settings/>} />
       
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
