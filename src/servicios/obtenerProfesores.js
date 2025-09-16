import { useState, useEffect } from 'react';
import axios from 'axios'; // ✅ Importa axios


const API_URL = import.meta.env.VITE_API_URL;

const obtenerProfesores = () => {
  const [profesores, setProfesores] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      // ✅ Obtén el token del almacenamiento local
      const token = localStorage.getItem('auth-token');

      try {
        // ✅ Haz la llamada con axios, pasando el token en el encabezado
        const respuesta = await axios.get(`${API_URL}/mostrarProfesores/profesoresBiblioteca`, {
          headers: {
            'auth-token': token,
          },
        });
        
        // axios envuelve los datos en una propiedad .data
        setProfesores(respuesta.data);
      } catch (err) {
        // Axios maneja los errores de forma más limpia
        if (err.response && (err.response.status === 401 || err.response.status === 403)) {
          setError("Acceso no autorizado. Por favor, inicie sesión.");
        } else {
          setError("Hubo un error al cargar los Profesores.");
        }
        console.error("Error al cargar los Profesores:", err);
      } finally {
        setCargando(false);
      }
    };
    obtenerDatos();
  }, []);

  return { profesores, cargando, error };
};

export default obtenerProfesores;