import './index.css';
import Food from './pages/Foods';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Search from './pages/Search';
import { useState, useEffect, createContext } from "react";
import Home from './pages/Home';
import FoodOne from './pages/FoodOne';
import Notfound from './components/NotFound';
import Welcome from './pages/Welcome';
import Login from './pages/Login';

export const LoginContext = createContext();

function App() {
  const [loggin, setLoggin] = useState(true);

  return (
    <div className="App min-h-screen bg-red-200">
      <LoginContext.Provider value={[loggin, setLoggin]}>
        <BrowserRouter>
          <Header>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/home" element={<Home />} />
              <Route path="/food" element={<Food />} />
              <Route path="/search/:mean" element={<Search />} />
              <Route path="/food/:id" element={<FoodOne />} />
              <Route path="/login" element={<Login />} />
              <Route path="404" element={<Notfound />} />
              <Route path="*" element={<Notfound />} />
            </Routes>
          </Header>
        </BrowserRouter>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
