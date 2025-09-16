import React from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

// Acepta una prop 'onClick' para manejar la acción.
function BotonEliminar({ onClick }) {
  return (
    <IconButton color="error" aria-label="eliminar" onClick={onClick}>
      <DeleteIcon fontSize="small" />
    </IconButton>
  );
}

export default BotonEliminar;