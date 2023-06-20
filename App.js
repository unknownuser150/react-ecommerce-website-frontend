import React from 'react';
import './App.css';

import Home from './home';
import "react-multi-carousel/lib/styles.css";

import "./home.css"
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import Contactus from './contactus';


function App(){
  return(
    <div > <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/Contactus' element={<Contactus />}></Route>
    </Routes>
    </BrowserRouter></div>
  )
}


export default App;