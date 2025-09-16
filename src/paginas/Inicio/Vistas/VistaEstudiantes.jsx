import React from 'react';
import { Typography } from '@mui/material';
import Estudiantes from '../../../componentes/Datos/ListaDeEstudiantes.jsx';

export default function VistaEstudiantes() {
  return (
    <>
      <Typography variant="h4">Hola soy la sección de Estudiantes</Typography>
      <Estudiantes  />
    </>
  );
}