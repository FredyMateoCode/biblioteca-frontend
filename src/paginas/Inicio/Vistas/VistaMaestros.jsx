import React from 'react';
import { Typography } from '@mui/material';
import Profesores from '../../../componentes/Datos/ListaDeProfesores.jsx';

export default function VistaMaestros() {
  return (
    <>
      <Typography variant="h4">Hola soy la sección de Maestros</Typography>
      <Profesores  />
    </>
  );
}