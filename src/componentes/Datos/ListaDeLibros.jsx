import React, { useState } from 'react';
import obtenerLibros from '../../servicios/obtenerLibros.js';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Paper,
  Typography,
  Box,
} from '@mui/material';

// ✅ Importa el componente reutilizable de editar.
import BotonEditar from '../Reutilizables/BotonEditar.jsx';
import BotonEliminar from '../Reutilizables/BotonEliminar.jsx';
import BotonVer from '../Reutilizables/BotonVer.jsx';
import Swal from 'sweetalert2'; // ✅ Importa SweetAlert2

function ListaDeLibros() {
  const { libros, cargando, error } = obtenerLibros();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (cargando) {
    return <div>Cargando datos de libros...</div>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  const librosEnPagina = libros.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  /*Lógica para editar registro*/
  const handleEditarLibro = (id) => {
    // Muestra un SweetAlert en lugar del console.log
    Swal.fire({
      title: '¡Funcionalidad en construcción!',
      text: `La edición para el libro con ID: ${id} aún no está disponible.`,
      icon: 'info', // Puedes usar 'info', 'warning', 'error', 'success', etc.
      confirmButtonText: 'Entendido'
    });
  };

  /*Lógica para ver registro*/
  const handleVerLibro = (id) => {
    // Muestra un SweetAlert en lugar del console.log
    Swal.fire({
      title: '¡Funcionalidad en construcción!',
      text: `La Visualización para el libro con ID: ${id} aún no está disponible.`,
      icon: 'success', // Puedes usar 'info', 'warning', 'error', 'success', etc.
      confirmButtonText: 'Entendido'
    });
  };

  /*Lógica para eliminar registro*/
  const handleEliminarLibro = (id) => {
    // Muestra un SweetAlert en lugar del console.log
    Swal.fire({
      title: '¡Funcionalidad en construcción!',
      text: `La Eliminación para el libro con ID: ${id} aún no está disponible.`,
      icon: 'warning', // Puedes usar 'info', 'warning', 'error', 'success', etc.
      confirmButtonText: 'Entendido'
    });
  };

  
  return (
    <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
      <Typography variant="h6" component="h6" sx={{ p: 2 }}>
        Libros Registrados
      </Typography>
      <Table size="small" aria-label="tabla de usuarios">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>TÍTULO</TableCell>
            <TableCell>CANTIDAD</TableCell>
            <TableCell>AUTOR</TableCell>
            <TableCell>PAÍS</TableCell>
            <TableCell>EDITORIAL</TableCell>
            <TableCell>EDICIÓN</TableCell>
            <TableCell>ESTADO</TableCell>
            <TableCell>ACCIÓN</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {librosEnPagina.map((libro) => (
            <TableRow
              key={libro.id_libro}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{libro.id_libro}</TableCell>
              <TableCell>{libro.titulo_libro}</TableCell>
              <TableCell>{libro.cantidad_libro}</TableCell>
              <TableCell>{libro.autor_libro}</TableCell>
              <TableCell>{libro.pais_libro}</TableCell>
              <TableCell>{libro.editorial_libro}</TableCell>
              <TableCell>{libro.edicion_libro}</TableCell>
              <TableCell>{libro.estado_libro}</TableCell>
              <TableCell>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {/* ✅ Usando el componente BotonEditar reutilizable */}
                  <BotonEditar onClick={() => handleEditarLibro(libro.id_libro)} />
                  <BotonVer onClick={() => handleVerLibro(libro.id_libro)} />
                  <BotonEliminar onClick={() => handleEliminarLibro(libro.id_libro)} />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={libros.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}

export default ListaDeLibros;