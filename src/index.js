import React from 'react';
import ReactDOM from 'react-dom/client';  // updated import
import App from './App';
import Intro from '../src/components/intro/intro';
import About from '../src/components/about/about';
import Work from '../src/components/Work/Work';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="/" element={<Intro />} /> */}
      <Route path="about" element={<About />} />
      <Route path="Work" element={<Work />} />
    </Routes>
  </BrowserRouter>
);
