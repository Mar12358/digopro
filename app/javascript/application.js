// Entry point for the build script in your package.json
import '@hotwired/turbo-rails';
import './controllers';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Reserve from './components/Reserve';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Reserve />} />
      {/* <Route path="/" element={<Home/>} /> */}
    </Routes>
  );
}

export default App;
