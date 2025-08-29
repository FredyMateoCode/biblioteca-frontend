// src/componentes/BotonGenerico.jsx
import React from 'react';
import { Button } from '@mui/material';

export default function BotonGenerico({ onClick, texto, color = 'primary' }) {
  return (
    <Button
      variant="contained"
      color={color}
      onClick={onClick}
    >
      {texto}
    </Button>
  );
}