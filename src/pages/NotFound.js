import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container text-center">
      <h2>404 - Página No Encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" className="link">Volver al Inicio</Link>
    </div>
  );
};

export default NotFound;