import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

import { GlobalStyles } from '@mui/material';
import { useLocation } from 'react-router-dom';


import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Avatar,
  Menu,
  MenuItem,
  Tooltip
} from '@mui/material';

import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  Dashboard as DashboardIcon,
  ShoppingCart as ShoppingCartIcon,
  Shop as ShopIcon,
  AutoStories as AutoStoriesIcon,
  BarChart as BarChartIcon,
  WorkOutline as WorkOutlineIcon,
  ExpandLess,
  ExpandMore,
  Description as DescriptionIcon,
  Notifications as NotificationsIcon,
  Mail as MailIcon,
  ArrowDropDown as ArrowDropDownIcon,
  School as SchoolIcon,
  Group as GroupIcon,
  RealEstateAgent as RealEstateAgentIcon,
  Checklist as ChecklistIcon,
  Rule as RuleIcon,
  BookOnline as BookOnlineIcon
} from '@mui/icons-material';

import Card1 from './Card1';
import Card2 from './Car2'; // Corregido: antes estaba mal escrito como 'Car2'
import Redes from './Redes';
import imagen001 from '../assets/imagenes/Logo.png';

// Páginas internas
const Inicio = () => <Card2 />;
const Ordenes = () => <Redes />;
const ReportesSalas = () => <Typography variant="h4">Reportes: Salas</Typography>;
const ReportesTrafico = () => <Typography variant="h4">Reportes: Tráfico</Typography>;

export default function Dashboard() {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const drawerWidth = 200;
  const collapsedWidth = 60;

  const openMenu = Boolean(anchorEl);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleLogout = () => {
    handleMenuClose();
    // Agrega aquí tu lógica de cierre de sesión
  };

  const toggleDrawer = () => setOpen(!open);
  const toggleSubmenu = () => setSubmenuOpen(!submenuOpen);

  return (
    <Router>
      {/* Estilo global para eliminar eestilos de etiquetas a */}
      <CssBaseline />
        <GlobalStyles
          styles={{
            a: {
              color: 'inherit',
              textDecoration: 'none',
            },
          }}
        />
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        {/* AppBar superior */}
        <AppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            background: 'linear-gradient(to right, #b71c1c, #880e4f)'
          }}
        >
          <Toolbar
  sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: { xs: 1, sm: '0 16px' },
  }}
>
  {/* Icono del menú y logo (oculto en móvil) */}
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1 }}>
    <IconButton color="inherit" edge="start" onClick={toggleDrawer}>
      {open ? <ChevronLeftIcon /> : <MenuIcon />}
    </IconButton>

    <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 1 }}>
      <img src={imagen001} alt="Logo" style={{ width: 32, height: 32 }} />
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Mi Biblioteca</Typography>
    </Box>
  </Box>

  {/* Iconos y usuario (siempre visibles) */}
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
    <IconButton color="inherit"><MailIcon /></IconButton>
    <IconButton color="inherit"><NotificationsIcon /></IconButton>

    <Tooltip title="Cuenta">
      <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleMenuOpen}>
        <Avatar sx={{ width: 32, height: 32, mr: 1 }}>F</Avatar>
        <Typography
          variant="body1"
          sx={{ fontWeight: 'bold', color: 'white', display: { xs: 'none', sm: 'block' } }}
        >
          Fred
        </Typography>
        <ArrowDropDownIcon sx={{ color: 'white' }} />
      </Box>
    </Tooltip>

    <Menu
      anchorEl={anchorEl}
      open={openMenu}
      onClose={handleMenuClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
    </Menu>
  </Box>
</Toolbar>

        </AppBar>

        {/* Drawer lateral */}
        <Drawer
          variant="permanent"
          sx={{
            width: open ? drawerWidth : collapsedWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: open ? drawerWidth : collapsedWidth,
              boxSizing: 'border-box',
              transition: 'width 0.3s'
            }
          }}
        >
          <Toolbar />
          <List>
            <ListItem button component={Link} to="/inicio">
              <ListItemIcon><DashboardIcon /></ListItemIcon>
              {open && <ListItemText primary="Inicio" />}
            </ListItem>

            <ListItem button component={Link} to="/inicio">
              <ListItemIcon><AutoStoriesIcon /></ListItemIcon>
              {open && <ListItemText primary="Libros" />}
            </ListItem>

            <ListItem button component={Link} to="/inicio">
              <ListItemIcon><WorkOutlineIcon /></ListItemIcon>
              {open && <ListItemText primary="Maestros" />}
            </ListItem>

            <ListItem button component={Link} to="/inicio">
              <ListItemIcon><SchoolIcon /></ListItemIcon>
              {open && <ListItemText primary="Estudiantes" />}
            </ListItem>

            <ListItem button component={Link} to="/inicio">
              <ListItemIcon><GroupIcon /></ListItemIcon>
              {open && <ListItemText primary="Usuarios" />}
            </ListItem>

            <ListItem button component={Link} to="/inicio">
              <ListItemIcon><RealEstateAgentIcon /></ListItemIcon>
              {open && <ListItemText primary="Préstamos" />}
            </ListItem>

            <ListItem button component={Link} to="/ordenes">
              <ListItemIcon><ChecklistIcon /></ListItemIcon>
              {open && <ListItemText primary="Inventario" />}
            </ListItem>

            <ListItem button component={Link} to="/ordenes">
              <ListItemIcon><BookOnlineIcon /></ListItemIcon>
              {open && <ListItemText primary="Reservas" />}
            </ListItem>

            <ListItem button onClick={toggleSubmenu} sx={{ cursor: 'pointer' }} button onClick={toggleSubmenu}>
              <ListItemIcon><BarChartIcon /></ListItemIcon>
              {open && <ListItemText primary="Reportes" />}
              {open && (submenuOpen ? <ExpandLess /> : <ExpandMore />)}
            </ListItem>

            <Collapse in={submenuOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ pl: open ? 4 : 2 }}>
                <ListItem button component={Link} to="/reportes/salas">
                  <ListItemIcon><RealEstateAgentIcon /></ListItemIcon>
                  {open && <ListItemText primary="Préstamos" />}
                </ListItem>
                <ListItem button component={Link} to="/reportes/trafico">
                  <ListItemIcon><RuleIcon /></ListItemIcon>
                  {open && <ListItemText primary="Vencidos" />}
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Drawer>

        {/* Main content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            transition: 'margin-left 0.3s'
          }}
        >
          <Toolbar />

          <Routes>
            <Route path="/" element={<Navigate to="/inicio" replace />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/ordenes" element={<Ordenes />} />
            <Route path="/reportes/salas" element={<ReportesSalas />} />
            <Route path="/reportes/trafico" element={<ReportesTrafico />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}
