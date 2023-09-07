import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Home from './components/home';
import ThreeD from './components/Demo';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<ThreeD />} />
          <Route path="/data" element={<Page1 />} />
          <Route path="/cube" element={<Home />} />
          <Route path="/display" element={<Page2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;