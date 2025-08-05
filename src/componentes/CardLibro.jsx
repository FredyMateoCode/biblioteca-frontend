import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import imagen001 from '../assets/imagenes/imagen001.jpg';

const CardLibro = () => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        margin: '1rem',
        backgroundColor: '#f9f9f9',
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <CardMedia
        component="img"
        height="160"
        image={imagen001}
        alt="Portada del libro"
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Modelo de un card
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Una novela de Gabriel García Márquez que marcó la literatura latinoamericana.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardLibro;
