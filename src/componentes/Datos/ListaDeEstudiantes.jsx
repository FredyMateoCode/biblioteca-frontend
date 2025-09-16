import React, { useState } from 'react';
import obtenerEstudiantes from '../../servicios/obtenerEstudiantes.js';
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

function ListaDeEstudiantes() {
  const { estudiantes, cargando, error } = obtenerEstudiantes();

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
    return <div>Cargando datos de Estudiantes...</div>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  const estudiantesEnPagina = estudiantes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  /*Lógica para editar registro*/
  const handleEditarEstudiante = (id) => {
    // Muestra un SweetAlert en lugar del console.log
    Swal.fire({
      title: '¡Funcionalidad en construcción!',
      text: `La edición para el estudiante con ID: ${id} aún no está disponible.`,
      icon: 'info', // Puedes usar 'info', 'warning', 'error', 'success', etc.
      confirmButtonText: 'Entendido'
    });
  };

  /*Lógica para ver registro*/
  const handleVerEstudiante = (id) => {
    // Muestra un SweetAlert en lugar del console.log
    Swal.fire({
      title: '¡Funcionalidad en construcción!',
      text: `La Visualización para el Estudiante con ID: ${id} aún no está disponible.`,
      icon: 'success', // Puedes usar 'info', 'warning', 'error', 'success', etc.
      confirmButtonText: 'Entendido'
    });
  };

  /*Lógica para eliminar registro*/
  const handleEliminarEstudiante = (id) => {
    // Muestra un SweetAlert en lugar del console.log
    Swal.fire({
      title: '¡Funcionalidad en construcción!',
      text: `La Eliminación para el Estudiante con ID: ${id} aún no está disponible.`,
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
            <TableCell>INGRESO</TableCell>
            <TableCell>GRADO INICIAL</TableCell>
            <TableCell>SECCIÓN</TableCell>
            <TableCell>CELULAR</TableCell>
            <TableCell>NACIMIENTO</TableCell>
            <TableCell>GÉNERO</TableCell>
            <TableCell>ACCIONES</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {estudiantesEnPagina.map((estudiante) => (
            <TableRow
              key={estudiante.id_est}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{estudiante.id_est}</TableCell>
              <TableCell>{estudiante.dni_est}</TableCell>
              <TableCell>{estudiante.nombres_est}</TableCell>
              <TableCell>{estudiante.apellidos_est}</TableCell>
              <TableCell>{estudiante.ingreso_est}</TableCell>
              <TableCell>{estudiante.grado_inicial_est}</TableCell>
              <TableCell>{estudiante.seccion_est}</TableCell>
              <TableCell>{estudiante.celular_est}</TableCell>
              <TableCell>{estudiante.nacimiento_est}</TableCell>
              <TableCell>{estudiante.genero_est}</TableCell>
              <TableCell>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {/* ✅ Usando el componente BotonEditar reutilizable */}
                  <BotonEditar onClick={() => handleEditarEstudiante(estudiante.id_est)} />
                  <BotonVer onClick={() => handleVerEstudiante(estudiante.id_est)} />
                  <BotonEliminar onClick={() => handleEliminarEstudiante(estudiante.id_est)} />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={estudiantes.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}

export default ListaDeEstudiantes;