import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // Cargar el token desde localStorage al iniciar
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Función para iniciar sesión
  const login = (username, password) => {
    const token = btoa(`${username}:${password}`); // Codificar en Base64 para Basic Auth
    setToken(token);
    setUser({ username });
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify({ username }));
  };

  // Función para cerrar sesión
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};