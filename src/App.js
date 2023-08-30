import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Page1 from './components/page1';
import Page2 from './components/page2';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/display" element={<Page2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;