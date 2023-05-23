import './index.css';
import Food from './pages/Food';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Search from './pages/Search';
import { useState, useEffect } from "react";
import Home from './pages/Home';

function App() {
  return (
    <div className="App min-h-screen bg-red-200">
        
          <BrowserRouter>
           <Header>
             <Routes>
               <Route path='/home' element={<Home/>}/>
               <Route path='/food' element={<Food/>}/>
               <Route path='/search/:mean' element={<Search/>}/>
             </Routes>             
            </Header>
          </BrowserRouter>
    </div>
  );
}

export default App;
