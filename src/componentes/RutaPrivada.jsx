// src/componentes/RutaPrivada.jsx
import { Navigate, Outlet } from 'react-router-dom';

const RutaPrivada = () => {
    const token = localStorage.getItem('auth-token');
    return token ? <Outlet /> : <Navigate to="/login" />;
};

export default RutaPrivada;