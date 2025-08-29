import { useState, useEffect } from 'react';

const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const respuesta = await fetch('https://biblioteca-backend-cf59.onrender.com/mostrarUsuarios/usuariosBiblioteca');
        if (!respuesta.ok) {
          throw new Error('Error al obtener los datos');
        }
        const datos = await respuesta.json();
        setUsuarios(datos);
      } catch (err) {
        setError("Hubo un error al cargar los usuarios.");
        console.error("Error al cargar los usuarios:", err);
      } finally {
        setCargando(false);
      }
    };
    obtenerDatos();
  }, []);

  return { usuarios, cargando, error };
};

export default useUsuarios;