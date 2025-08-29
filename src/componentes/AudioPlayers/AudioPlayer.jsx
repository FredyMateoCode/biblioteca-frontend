import React, { useState, useRef } from 'react';
import { Box, IconButton, Slider, Typography } from '@mui/material';
import { PlayArrow, Pause, VolumeUp, VolumeOff } from '@mui/icons-material';
import miAudio from '../../assets/audios/audio.wav';

const AudioPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
    audioRef.current.volume = newValue;
  };

  return (
    <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 2, display: 'flex', alignItems: 'center', gap: 2, maxWidth: 400, mx: 'auto' }}>
      <audio ref={audioRef} src={miAudio} />
      
      <IconButton onClick={handlePlayPause}>
        {isPlaying ? <Pause /> : <PlayArrow />}
      </IconButton>
      
      <Typography variant="body2" sx={{ minWidth: 40 }}>
        {isPlaying ? "Reproduciendo" : "Pausado"}
      </Typography>
      
      <VolumeOff sx={{ color: 'text.secondary' }} />
      <Slider 
        value={volume} 
        onChange={handleVolumeChange} 
        min={0} 
        max={1} 
        step={0.01} 
        sx={{ flexGrow: 1 }} 
      />
      <VolumeUp sx={{ color: 'text.secondary' }} />
    </Box>
  );
};

export default AudioPlayer;