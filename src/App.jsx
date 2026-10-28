import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import CustomSolution from './pages/CustomServices/CustomSolution';
import Blog from './pages/Blog/Blog';
import Project from './pages/Projects/Project';
import Page from './pages/Page/Pricing';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound'; 

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<CustomSolution />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/pricing" element={<Page />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  );
}