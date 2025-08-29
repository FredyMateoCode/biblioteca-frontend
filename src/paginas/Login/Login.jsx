import React from 'react';
import { Box, Card, CardContent, Typography, TextField, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

//Componentes para trabajar con rutas y evitar recargar las páginas
import { Routes, Route, Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

import './Login.css'; // Asegúrate de que esta es la ruta correcta

export default function Login() {
  //Para poder utilizar el hook
  const navigate = useNavigate();

  return (
    <Box className="login-container">
      <Card className="login-card">
        <CardContent>
          <Box className="login-header">
            <AccountCircleIcon sx={{ fontSize: 80, color: 'error.main' }} />
            <Typography variant="h5" component="h1" gutterBottom>
              Iniciar Sesión
            </Typography>
          </Box>
          
          <Box component="form" className="login-form">
            <TextField
              fullWidth
              label="Usuario"
              variant="outlined"
              margin="normal"
              type="text"
            />
            <TextField
              fullWidth
              label="Contraseña"
              variant="outlined"
              margin="normal"
              type="password"
            />
            <Button
              fullWidth
              variant="contained"
              color="error"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => navigate('/dashboard')} // <-- Aquí se hace la magia
            >
              Ingresar
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="error"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => navigate('/')} // <-- Aquí se hace la magia
            >
              Cancelar
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}