import React from 'react';
import useUsuarios from './useUsuarios';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  Typography 
} from '@mui/material';

function ListaDeUsuarios() {
  const { usuarios, cargando, error } = useUsuarios();

  if (cargando) {
    return <div>Cargando datos de usuarios...</div>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <TableContainer component={Paper}>
      <Typography variant="h4" component="h1" sx={{ p: 2 }}>
        Usuarios Registrados de la Biblioteca
      </Typography>
      <Table sx={{ minWidth: 650 }} aria-label="tabla de usuarios">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nombres</TableCell>
            <TableCell>Apellidos</TableCell>
            <TableCell>DNI</TableCell>
            <TableCell>Celular</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usuarios.map((usuario) => (
            <TableRow
              key={usuario.id_us}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {usuario.id_us}
              </TableCell>
              <TableCell>{usuario.nombres_us}</TableCell>
              <TableCell>{usuario.apellidos_us}</TableCell>
              <TableCell>{usuario.dni_us}</TableCell>
              <TableCell>{usuario.celular_us}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ListaDeUsuarios;