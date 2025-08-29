import React from 'react';
import { Typography } from '@mui/material';
import Usuarios from '../../../componentes/ListaDeUsuarios.jsx';

export default function VistaNoticias() {
  return (
    <>
      <Typography variant="h4">Hola soy la sección noticias</Typography>
      <Usuarios  />
    </>
  );
}