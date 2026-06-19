import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importando as nossas duas telas
import Home from './pages/public/Home';
import Busca from './pages/public/Busca';

function App() {
  return (
    <Routes>
      {/* Quando a URL for apenas "/", mostra a Home */}
      <Route path="/" element={<Home />} />
      
      {/* Quando a URL for "/busca", mostra a nossa nova tela de resultados */}
      <Route path="/busca" element={<Busca />} />
    </Routes>
  );
}

export default App;