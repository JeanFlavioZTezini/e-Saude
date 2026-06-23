import React from 'react';
import { Navigate } from 'react-router-dom';

export default function RotaPrivada({ children, perfilExigido }) {
  const token = localStorage.getItem('token');
  const usuarioString = localStorage.getItem('usuario');

  // 1. Se não tem token ou não tem usuário salvo, chuta de volta para o Login
  if (!token || !usuarioString) {
    return <Navigate to="/login" replace />;
  }

  const usuario = JSON.parse(usuarioString);

  // 2. Se a rota exige um perfil específico e o usuário não é dono desse perfil
  if (perfilExigido && usuario.perfil !== perfilExigido) {
    // Redireciona ele para o lugar que ele pertence
    if (usuario.perfil === 'GESTOR_UBS') {
      return <Navigate to="/gestor-ubs" replace />;
    }
    if (usuario.perfil === 'ADMIN_MUNICIPAL') {
      return <Navigate to="/gestor-municipal" replace />;
    }
    
    // Se não for nenhum dos dois, manda pro início
    return <Navigate to="/" replace />;
  }

  // 3. Se passou em todos os testes de segurança, deixa a tela carregar!
  return children;
}