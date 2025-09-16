import { useState, useEffect } from 'react';
import axios from 'axios'; // ✅ Importa axios

/*Variable de Entorno*/
const API_URL = import.meta.env.VITE_API_URL;

const obtenerLibros = () => {
  const [libros, setLibros] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      // ✅ Obtén el token del almacenamiento local
      const token = localStorage.getItem('auth-token');

      try {
        // ✅ Haz la llamada con axios, pasando el token en el encabezado
        const respuesta = await axios.get(`${API_URL}/mostrarLibros/librosBiblioteca`, {
          headers: {
            'auth-token': token,
          },
        });
        
        // axios envuelve los datos en una propiedad .data
        setLibros(respuesta.data);
      } catch (err) {
        // Axios maneja los errores de forma más limpia
        if (err.response && (err.response.status === 401 || err.response.status === 403)) {
          setError("Acceso no autorizado. Por favor, inicie sesión.");
        } else {
          setError("Hubo un error al cargar los libros.");
        }
        console.error("Error al cargar los libros:", err);
      } finally {
        setCargando(false);
      }
    };
    obtenerDatos();
  }, []);

  return { libros, cargando, error };
};

export default obtenerLibros;