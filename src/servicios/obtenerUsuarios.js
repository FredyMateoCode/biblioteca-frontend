import { useState, useEffect } from 'react';
import axios from 'axios'; // ✅ Importa axios

const obtenerUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      // ✅ Obtén el token del almacenamiento local
      const token = localStorage.getItem('auth-token');

      try {
        // ✅ Haz la llamada con axios, pasando el token en el encabezado
        const respuesta = await axios.get('http://192.168.146.180:4000/mostrarUsuarios/usuariosBiblioteca', {
          headers: {
            'auth-token': token,
          },
        });
        
        // axios envuelve los datos en una propiedad .data
        setUsuarios(respuesta.data);
      } catch (err) {
        // Axios maneja los errores de forma más limpia
        if (err.response && (err.response.status === 401 || err.response.status === 403)) {
          setError("Acceso no autorizado. Por favor, inicie sesión.");
        } else {
          setError("Hubo un error al cargar los usuarios.");
        }
        console.error("Error al cargar los usuarios:", err);
      } finally {
        setCargando(false);
      }
    };
    obtenerDatos();
  }, []);

  return { usuarios, cargando, error };
};

export default obtenerUsuarios;