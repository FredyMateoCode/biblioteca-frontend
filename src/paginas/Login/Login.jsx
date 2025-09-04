import React, { useState } from 'react';
import axios from 'axios'; // 1. Importar Axios
import { Box, Card, CardContent, Typography, TextField, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import imagen001 from '../../assets/imagenes/Logo.png';

export default function Login() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const response = await axios.post('https://biblioteca-backend-cf59.onrender.com/autenticarUsuarios', {
      usuario,
      password,
    });

    const { token, rol } = response.data; // ✅ Extrae el token y el rol
    
    // ✅ 1. Guarda el token en el almacenamiento local
    localStorage.setItem('auth-token', token);
    localStorage.setItem('user-rol', rol); // ✅ Almacena el rol
    
    // 2. Muestra un mensaje de éxito en la consola para verificar
    console.log('Login exitoso:', response.data.message);
    
    // Redirige al usuario a la página deseada
    navigate('/dashboard');

  } catch (error) {
      if (error.response) {
      console.error('Error desde el backend:', error.response.data.message);
    } else {
      console.error('Error de red o de solicitud:', error.message);
    }
  }
};
// ... resto del código ...

  return (
    <Box className="login-container">
      <Card className="login-card">
        <CardContent>
          <Box className="login-header">
            <Box
              component="img"
              src={imagen001}
              alt="Logo de la Institución"
              sx={{
                width: 80, // ✅ Define el tamaño del logo
                height: 80,
                marginBottom: 1, // Espacio entre el logo y el texto
              }}
            />
            <Typography variant="h5" component="h1" gutterBottom>
              Iniciar Sesión
            </Typography>
          </Box>
          <Box component="form" className="login-form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Usuario"
              variant="outlined"
              margin="normal"
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
            <TextField
              fullWidth
              label="Contraseña"
              variant="outlined"
              margin="normal"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              fullWidth
              variant="contained"
              color="error"
              sx={{ mt: 3, mb: 2 }}
              type="submit"
            >
              Ingresar
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="error"
              onClick={() => navigate('/')}
            >
              Cancelar
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}