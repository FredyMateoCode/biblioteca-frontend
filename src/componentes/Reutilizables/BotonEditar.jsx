import React from 'react';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

// Acepta una prop 'onClick' y 'ariaLabel'
function BotonEditar({ onClick, ariaLabel = "editar" }) {
	return (
		<IconButton color="primary" aria-label={ariaLabel} onClick={onClick}>
			<EditIcon fontSize="small" />
		</IconButton>
	);
}

export default BotonEditar;