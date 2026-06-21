import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Páginas Públicas
import Home from './pages/public/Home';
import Busca from './pages/public/Busca';
import Unidade from './pages/public/Unidade';

// Páginas Restritas
import Login from './pages/restrita/Login';
import GestorMunicipal from './pages/restrita/GestorMunicipal';
import GestorUbs from './pages/restrita/GestorUbs'; // <-- IMPORTAÇÃO

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/busca" element={<Busca />} />
      <Route path="/unidade/:id" element={<Unidade />} />
      
      {/* Rotas Restritas */}
      <Route path="/login" element={<Login />} />
      <Route path="/gestor-municipal" element={<GestorMunicipal />} />
      <Route path="/gestor-ubs" element={<GestorUbs />} /> {/* <-- NOVA ROTA */}
    </Routes>
  );
}

export default App;