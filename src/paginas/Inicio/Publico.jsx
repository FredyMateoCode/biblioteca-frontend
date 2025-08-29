// publico.jsx
import React, { useState, Suspense } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import {
  Box, CssBaseline, AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem,
  ListItemIcon, ListItemText, Collapse, Tooltip, Button, Badge 
} from '@mui/material';
import {
  Menu as MenuIcon, ChevronLeft as ChevronLeftIcon, Dashboard as DashboardIcon,
  AutoStories as AutoStoriesIcon, WorkOutline as WorkOutlineIcon, School as SchoolIcon,
  Group as GroupIcon, RealEstateAgent as RealEstateAgentIcon, Checklist as ChecklistIcon,
  BookOnline as BookOnlineIcon, BarChart as BarChartIcon, ExpandLess, ExpandMore,
  Rule as RuleIcon, Mail as MailIcon, Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon, Newspaper as NewspaperIcon, DesignServices as DesignServicesIcon,
  PhotoAlbum as PhotoAlbumIcon, GeneratingTokens as GeneratingTokensIcon, Flag as FlagIcon,
  PersonAdd as PersonAddIcon, PermPhoneMsg as PermPhoneMsgIcon, EventAvailable as EventAvailableIcon,
  DeveloperBoard as DeveloperBoardIcon, LocalLibrary as LocalLibraryIcon

} from '@mui/icons-material';
import imagen001 from '../../assets/imagenes/Logo.png';
import CardSlider from '../../componentes/CardSliders/CardSlider';

import Footer from '../../componentes/Footers/Footer';
import CarouselVertical from '../../componentes/Carousels/CarouselVertical';
import AudioPlayer from '../../componentes/AudioPlayers/AudioPlayer';

export default function Publico() {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const drawerWidth = 200;
  const collapsedWidth = 60;

  const toggleDrawer = () => setOpen(!open);
  const toggleSubmenu = () => setSubmenuOpen(!submenuOpen);

  const getListItemProps = (path) => {
    const isSelected = location.pathname === `/${path}`;
    const fullPath = `/${path}`;
    const handleItemClick = (event) => {
      event.preventDefault();
      navigate(fullPath, { replace: true });
    };
    return {
      component: 'a',
      href: fullPath,
      onClick: handleItemClick,
      sx: {
        bgcolor: isSelected ? 'rgba(255, 0, 0, 0.45)' : 'inherit',
        '&:hover': {
          bgcolor: isSelected ? 'rgba(255, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.04)',
        },
        borderRadius: 2,
        marginX: 0.5,
      },
    };
  };

  return (
    <Box sx={{ display: 'flex', width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1, background: 'linear-gradient(to right, #b71c1c, #880e4f)', width: '100%'}}>
        <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: { xs: 1, sm: '0 16px' }, width: '100%', maxWidth: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1 }}>
            <IconButton color="inherit" edge="start" onClick={toggleDrawer}>
              {open ? <ChevronLeftIcon /> : <MenuIcon />}
            </IconButton>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 1 }}>
              <img src={imagen001} alt="Logo" style={{ width: 32, height: 32 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Biblioteca - Divina Pastora</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Badge badgeContent={50} color="primary">
              <MailIcon color="inherit" />
            </Badge>
            <IconButton color="inherit"><MailIcon /></IconButton>
            <IconButton color="inherit"><NotificationsIcon /></IconButton>
            <Tooltip title="Acceder">
              <Button sx={{ textTransform: 'none' }} variant="contained" color="primary"
                endIcon={<AccountCircleIcon />} onClick={() => navigate('/login')}>
                Acceder
              </Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: open ? drawerWidth : collapsedWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: open ? drawerWidth : collapsedWidth,
            boxSizing: 'border-box',
            transition: 'width 0.3s',
            overflowX: 'hidden'
          }
        }}
      >
        <Toolbar />
        <List sx={{ overflowX: 'hidden' }}>
          <ListItem {...getListItemProps('')}>
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            {open && <ListItemText primary="Inicio" sx={{ color: 'black' }} />}
          </ListItem>
          <ListItem {...getListItemProps('noticias')}>
            <ListItemIcon><NewspaperIcon /></ListItemIcon>
            {open && <ListItemText primary="Noticias" sx={{ color: 'black' }} />}
          </ListItem>
          <ListItem {...getListItemProps('servicios')}>
            <ListItemIcon><DesignServicesIcon /></ListItemIcon>
            {open && <ListItemText primary="Servicios" sx={{ color: 'black' }} />}
          </ListItem>
          <ListItem {...getListItemProps('repositorio')}>
            <ListItemIcon><PhotoAlbumIcon /></ListItemIcon>
            {open && <ListItemText primary="Repositorio" sx={{ color: 'black' }} />}
          </ListItem>
          <ListItem {...getListItemProps('destacados')}>
            <ListItemIcon><GeneratingTokensIcon /></ListItemIcon>
            {open && <ListItemText primary="Destacados" sx={{ color: 'black' }} />}
          </ListItem>
          <ListItem {...getListItemProps('oxapampa')}>
            <ListItemIcon><FlagIcon /></ListItemIcon>
            {open && <ListItemText primary="Oxapampa" sx={{ color: 'black' }} />}
          </ListItem>
          <ListItem {...getListItemProps('registrarme')}>
            <ListItemIcon><PersonAddIcon /></ListItemIcon>
            {open && <ListItemText primary="Registrarme" sx={{ color: 'black' }} />}
          </ListItem>
          <ListItem {...getListItemProps('nosotros')}>
            <ListItemIcon><PermPhoneMsgIcon /></ListItemIcon>
            {open && <ListItemText primary="Nosotros" sx={{ color: 'black' }} />}
          </ListItem>
          <ListItem
            onClick={toggleSubmenu}
            sx={{
              cursor: 'pointer',
              bgcolor: submenuOpen ? 'rgba(255,255,255,0.15)' : 'inherit',
              borderRadius: 1,
              marginX: 1,
              '&:hover': {
                bgcolor: submenuOpen ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.08)',
              }
            }}
          >
            <ListItemIcon><EventAvailableIcon /></ListItemIcon>
            {open && <ListItemText primary="Contactos" />}
            {open && (submenuOpen ? <ExpandLess /> : <ExpandMore />)}
          </ListItem>
          <Collapse in={submenuOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ pl: open ? 4 : 2 }}>
              <ListItem {...getListItemProps('contactos/desarrollador')}>
                <ListItemIcon><DeveloperBoardIcon /></ListItemIcon>
                {open && <ListItemText primary="Desarrollador" sx={{ color: 'black' }}  />}
              </ListItem>
              <ListItem {...getListItemProps('contactos/biblioteca')}>
                <ListItemIcon><LocalLibraryIcon /></ListItemIcon>
                {open && <ListItemText primary="Biblioteca" sx={{ color: 'black' }}  />}
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: '100%', maxWidth: '100%', overflowX: 'hidden' }}>
        <Toolbar />
        <Suspense fallback={<div>Cargando contenido componentes...</div>}>
          <Outlet /> {/* <-- Aquí se renderizan las rutas anidadas */}

        </Suspense>
        
        <Toolbar />
        <Footer />
      </Box>
    </Box>
  );
}