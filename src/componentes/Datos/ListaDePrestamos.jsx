import React, { useState } from 'react';
import obtenerPrestamos from '../../servicios/obtenerPrestamos.js';
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

function ListaDePrestamos() {
  const { prestamos, cargando, error } = obtenerPrestamos();

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
    return <div>Cargando datos de Prestamos...</div>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  const prestamosEnPagina = prestamos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  /*Lógica para editar registro*/
  const handleEditarPrestamo = (id) => {
    // Muestra un SweetAlert en lugar del console.log
    Swal.fire({
      title: '¡Funcionalidad en construcción!',
      text: `La edición para el Préstamo con ID: ${id} aún no está disponible.`,
      icon: 'info', // Puedes usar 'info', 'warning', 'error', 'success', etc.
      confirmButtonText: 'Entendido'
    });
  };

  /*Lógica para ver registro*/
  const handleVerPrestamo = (id) => {
    // Muestra un SweetAlert en lugar del console.log
    Swal.fire({
      title: '¡Funcionalidad en construcción!',
      text: `La Visualización para el Préstamo con ID: ${id} aún no está disponible.`,
      icon: 'success', // Puedes usar 'info', 'warning', 'error', 'success', etc.
      confirmButtonText: 'Entendido'
    });
  };

  /*Lógica para eliminar registro*/
  const handleEliminarPrestamo = (id) => {
    // Muestra un SweetAlert en lugar del console.log
    Swal.fire({
      title: '¡Funcionalidad en construcción!',
      text: `La Eliminación para el Préstamo con ID: ${id} aún no está disponible.`,
      icon: 'warning', // Puedes usar 'info', 'warning', 'error', 'success', etc.
      confirmButtonText: 'Entendido'
    });
  };

  
  return (
    <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
      <Typography variant="h6" component="h6" sx={{ p: 2 }}>
        Préstamos Registrados
      </Typography>
      <Table size="small" aria-label="tabla de usuarios">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>USUARIO</TableCell>
            <TableCell>DNI</TableCell>
            <TableCell>LIBRO</TableCell>
            <TableCell>CANTIDAD</TableCell>
            <TableCell>FECHA DE PRÉSTAMO</TableCell>
            <TableCell>FECHA DE DEVOLUCIÓN</TableCell>
            <TableCell>ESTADO</TableCell>
            <TableCell>OBSERVACIÓN</TableCell>
            <TableCell>ACCIONES</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {prestamosEnPagina.map((prestamo) => (
            <TableRow
              key={prestamo.id_pres}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{prestamo.id_pres}</TableCell>
              <TableCell>{prestamo.tipo_usuario}</TableCell>
              <TableCell>{prestamo.dni_usuario}</TableCell>
              <TableCell>{prestamo.id_libro}</TableCell>
              <TableCell>{prestamo.cantidad}</TableCell>
              <TableCell>{prestamo.fecha_prestamo}</TableCell>
              <TableCell>{prestamo.fecha_devolución}</TableCell>
              <TableCell>{prestamo.estado}</TableCell>
              <TableCell>{prestamo.observacion}</TableCell>
              <TableCell>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {/* ✅ Usando el componente BotonEditar reutilizable */}
                  <BotonEditar onClick={() => handleEditarPrestamo(prestamo.id_pres)} />
                  <BotonVer onClick={() => handleVerPrestamo(prestamo.id_pres)} />
                  <BotonEliminar onClick={() => handleEliminarPrestamo(prestamo.id_pres)} />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={prestamos.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}

export default ListaDePrestamos;