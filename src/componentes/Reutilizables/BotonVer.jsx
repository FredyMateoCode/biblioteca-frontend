import React from 'react';
import { IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

// Acepta una prop 'onClick' para manejar la acción.
function BotonVer({ onClick }) {
  return (
    <IconButton color="info" aria-label="ver" onClick={onClick}>
      <VisibilityIcon fontSize="small" />
    </IconButton>
  );
}

export default BotonVer;