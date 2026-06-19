import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/public/Home';
import Busca from './pages/public/Busca';
import Unidade from './pages/public/Unidade'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/busca" element={<Busca />} />
      {/* O ":id" cria uma URL dinâmica (ex: /unidade/1, /unidade/2) */}
      <Route path="/unidade/:id" element={<Unidade />} /> 
    </Routes>
  );
}

export default App;