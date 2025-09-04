import React from 'react';
import { Typography } from '@mui/material';
import Usuarios from '../../../componentes/Datos/ListaDeUsuarios.jsx';

export default function VistaUsuarios() {
  return (
    <>
      <Typography variant="h4">Hola soy la sección de Usuarios</Typography>
      <Usuarios  />
    </>
  );
}