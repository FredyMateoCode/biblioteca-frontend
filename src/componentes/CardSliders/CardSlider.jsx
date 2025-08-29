import React from 'react';
import { Box, Card, CardContent, Typography, Rating, Button, CardActions, CardMedia } from '@mui/material';
import { Visibility as VisibilityIcon } from '@mui/icons-material';

import './CardSlider.css';

// Importa tus imágenes aquí
import imagen1 from '../../assets/imagenes/imagen1.jpg';
import imagen2 from '../../assets/imagenes/imagen2.jpg';
import imagen3 from '../../assets/imagenes/imagen3.jpg';
import imagen4 from '../../assets/imagenes/imagen4.jpg';
import imagen5 from '../../assets/imagenes/imagen5.jpg';

const cardsData = [
  { id: 1, title: 'Producto A', description: 'Descripción del Producto A.', rating: 4.5, image: imagen1 },
  { id: 2, title: 'Servicio B', description: 'Detalles del Servicio B.', rating: 3.8, image: imagen2 },
  { id: 3, title: 'Evento C', description: 'Información del Evento C.', rating: 5.0, image: imagen3 },
  { id: 4, title: 'Lugar D', description: 'Acerca del Lugar D.', rating: 4.2, image: imagen4 },
  { id: 5, title: 'Artículo E', description: 'Características del Artículo E.', rating: 3.5, image: imagen5 },
];

export default function CardSlider() {
  return (
    <Box className="slider-container">
      <Box className="slider-track">
        {/* Duplicamos los elementos para el efecto de bucle infinito */}
        {[...cardsData, ...cardsData].map((card, index) => (
          <Box key={index} className="slider-card-wrapper">
            <Card className="slider-card">
              <CardMedia component="img" height="140" image={card.image} alt={card.title} />
              <CardContent>
                <Typography variant="h6" component="div">{card.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>{card.description}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Rating value={card.rating} precision={0.5} readOnly />
                  <Typography sx={{ ml: 0.5 }} variant="body2" color="text.secondary">({card.rating})</Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" endIcon={<VisibilityIcon />}>Ver más</Button>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
}