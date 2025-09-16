import React from 'react';
import { Typography } from '@mui/material';
import Libros from '../../../componentes/Datos/ListaDeLibros.jsx';

export default function VistaLibros() {
  
  return (
    <>
      <Typography variant="h4">Hola soy la sección de Libros</Typography>
      <Libros  />
    </>
  );
}