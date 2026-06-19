import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/public/Home';
import Busca from './pages/public/Busca';
import Unidade from './pages/public/Unidade'; 
import Login from './pages/restrita/Login';
import Estado from './pages/public/Estado';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/busca" element={<Busca />} />
      <Route path="/unidade/:id" element={<Unidade />} />
      <Route path="/login" element={<Login />} />
      <Route path="/estados/:slug" element={<Estado />} />
    </Routes>
  );
}

export default App;