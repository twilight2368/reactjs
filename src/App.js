import './index.css';
import Food from './pages/Foods';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Search from './pages/Search';
import { useState, useEffect } from "react";
import Home from './pages/Home';
import FoodOne from './pages/FoodOne';
import Notfound from './components/NotFound';

function App() {
  return (
    <div className="App min-h-screen bg-red-200">
        
          <BrowserRouter>
           <Header>
             <Routes>
               <Route path='/home' element={<Home/>}/>
               <Route path='/food' element={<Food/>}/>
               <Route path='/search/:mean' element={<Search/>}/>
               <Route path='/food/:id' element={<FoodOne/>}/>
               <Route path='404' element={<Notfound/>}/>
               <Route path='*' element={<Notfound/>}/>
             </Routes>             
            </Header>
          </BrowserRouter>
    </div>
  );
}

export default App;
