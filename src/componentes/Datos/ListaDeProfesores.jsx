import React, { useState } from 'react';
import obtenerProfesores from '../../servicios/obtenerProfesores.js';
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

function ListaDeProfesores() {
  const { profesores, cargando, error } = obtenerProfesores();

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
    return <div>Cargando datos de profesores...</div>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  const profesoresEnPagina = profesores.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  /*Lógica para editar registro*/
  const handleEditarProfesor = (id) => {
    // Muestra un SweetAlert en lugar del console.log
    Swal.fire({
      title: '¡Funcionalidad en construcción!',
      text: `La edición para el Maestro con ID: ${id} aún no está disponible.`,
      icon: 'info', // Puedes usar 'info', 'warning', 'error', 'success', etc.
      confirmButtonText: 'Entendido'
    });
  };

  /*Lógica para ver registro*/
  const handleVerProfesor = (id) => {
    // Muestra un SweetAlert en lugar del console.log
    Swal.fire({
      title: '¡Funcionalidad en construcción!',
      text: `La Visualización para el Maestro con ID: ${id} aún no está disponible.`,
      icon: 'success', // Puedes usar 'info', 'warning', 'error', 'success', etc.
      confirmButtonText: 'Entendido'
    });
  };

  /*Lógica para eliminar registro*/
  const handleEliminarProfesor = (id) => {
    // Muestra un SweetAlert en lugar del console.log
    Swal.fire({
      title: '¡Funcionalidad en construcción!',
      text: `La Eliminación para el Maestro con ID: ${id} aún no está disponible.`,
      icon: 'warning', // Puedes usar 'info', 'warning', 'error', 'success', etc.
      confirmButtonText: 'Entendido'
    });
  };

  
  return (
    <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
      <Typography variant="h6" component="h6" sx={{ p: 2 }}>
        Pofesores Registrados
      </Typography>
      <Table size="small" aria-label="tabla de usuarios">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>DNI</TableCell>
            <TableCell>NOMBRES</TableCell>
            <TableCell>APELLIDOS</TableCell>
            <TableCell>CURSO</TableCell>
            <TableCell>CELULAR</TableCell>
            <TableCell>FECHA</TableCell>
            <TableCell>ACCIONES</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {profesoresEnPagina.map((profesor) => (
            <TableRow
              key={profesor.id_prof}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{profesor.id_prof}</TableCell>
              <TableCell>{profesor.dni_prof}</TableCell>
              <TableCell>{profesor.nombres_prof}</TableCell>
              <TableCell>{profesor.apellidos_prof}</TableCell>
              <TableCell>{profesor.curso_prof}</TableCell>
              <TableCell>{profesor.celular_prof}</TableCell>
              <TableCell>{profesor.fecha}</TableCell>
              <TableCell>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {/* ✅ Usando el componente BotonEditar reutilizable */}
                  <BotonEditar onClick={() => handleEditarProfesor(profesor.id_prof)} />
                  <BotonVer onClick={() => handleVerProfesor(profesor.id_prof)} />
                  <BotonEliminar onClick={() => handleEliminarProfesor(profesor.id_prof)} />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={profesores.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}

export default ListaDeProfesores;