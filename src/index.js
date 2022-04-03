import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Intro from '../src/components/intro/intro'
import About from '../src/components/about/about'
import Contact from './components/contact/Contact';
import ProductList from '../src/components/productList/ProductList'
import Work from '../src/components/Work/Work'
import Navbar from './components/navbar/Navbar';
// import { BrowserRouter } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/" element={<Intro />} />
      <Route path="about" element={<About />} />
      <Route path="Work" element={<Work />} />
      
      <Route path="contact" element={<Contact />} />
      
    </Routes>
  </BrowserRouter>


   
  
    
  
  ,document.getElementById('root')
);


