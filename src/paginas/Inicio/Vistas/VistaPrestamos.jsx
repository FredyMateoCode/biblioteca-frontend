import React from 'react';
import { Typography } from '@mui/material';
import Prestamos from '../../../componentes/Datos/ListaDePrestamos.jsx';

export default function VistaPrestamos() {
  return (
    <>
      <Typography variant="h4">Hola soy la sección de Préstamos</Typography>
      <Prestamos  />
    </>
  );
}