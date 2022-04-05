import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from './components/Countries';
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/countries" element={<Countries />} />
  </Routes>
</BrowserRouter>

  );
};

export default App;