import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Páginas Públicas
import Home from './pages/public/Home';
import Busca from './pages/public/Busca';
import Unidade from './pages/public/Unidade';

// Páginas Restritas
import Login from './pages/restrita/Login';
import GestorMunicipal from './pages/restrita/GestorMunicipal';
import GestorUbs from './pages/restrita/GestorUbs'; 

// Importação do Guarda-costas
import RotaPrivada from './components/RotaPrivada';

function App() {
  return (
    <Routes>
      {/* Rotas Abertas */}
      <Route path="/" element={<Home />} />
      <Route path="/busca" element={<Busca />} />
      <Route path="/unidade/:id" element={<Unidade />} />
      <Route path="/login" element={<Login />} />
      
      {/* Rotas Trancadas */}
      <Route 
        path="/gestor-municipal" 
        element={
          <RotaPrivada perfilExigido="ADMIN_MUNICIPAL">
            <GestorMunicipal />
          </RotaPrivada>
        } 
      />
      
      <Route 
        path="/gestor-ubs" 
        element={
          <RotaPrivada perfilExigido="GESTOR_UBS">
            <GestorUbs />
          </RotaPrivada>
        } 
      />
    </Routes>
  );
}

export default App;