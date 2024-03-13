
import './App.css';
import Home from '../src/home.js'
import Admin from './Admin.js'
import MainPage  from './MainPage.js';
import Offers from './Offers.js';
import Abt from './Abt.js';
import toggle from './toggle.js'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetails from './MovieDetails.js';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/admin' element={<Admin/>} ></Route>
      <Route path='/main' element={<MainPage/>} ></Route>
      <Route path='/off' element={<Offers/>} ></Route>
      <Route path='/abt' element={<Abt/>}></Route>
      <Route path='/toggle' element={<toggle/>}></Route>
      <Route path='/MovieDetails' element={<MovieDetails/>} ></Route>
     </Routes>
     </BrowserRouter> 
      
    </div>
  );
}

export default App;
