import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">Task Manager</Link>
        <div className="navbar-links">
          {user ? (
            <>
              <span className="navbar-user">Hola, {user.username}</span>
              <button onClick={handleLogout} className="btn btn-logout">
                Cerrar Sesión
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="navbar-link">Iniciar Sesión</Link>
              <Link to="/register" className="navbar-link">Registrarse</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;