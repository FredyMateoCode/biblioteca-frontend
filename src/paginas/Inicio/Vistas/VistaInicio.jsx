// VistaInicio.jsx
import React from 'react';
import { Typography } from '@mui/material';
import CarouselVertical from '../../../componentes/Carousels/CarouselVertical';
import Mp3 from '../../../componentes/AudioPlayers/AudioPlayer.jsx';


export default function VistaInicio() {
  return (
    <>
      <CarouselVertical />
      <Mp3 />
    </>
  );
}