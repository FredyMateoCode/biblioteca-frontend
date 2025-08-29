import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  Box, CssBaseline, AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem,
  ListItemIcon, ListItemText, Collapse, Avatar, Menu, MenuItem, Tooltip, Badge
} from '@mui/material';
import {
  Menu as MenuIcon, ChevronLeft as ChevronLeftIcon, Dashboard as DashboardIcon,
  AutoStories as AutoStoriesIcon, WorkOutline as WorkOutlineIcon, School as SchoolIcon,
  Group as GroupIcon, RealEstateAgent as RealEstateAgentIcon, Checklist as ChecklistIcon,
  BookOnline as BookOnlineIcon, BarChart as BarChartIcon, ExpandLess, ExpandMore, Rule as RuleIcon,
  Mail as MailIcon, Notifications as NotificationsIcon, ArrowDropDown as ArrowDropDownIcon
} from '@mui/icons-material';
import imagen001 from '../../assets/imagenes/Logo.png';
import Footer from '../../componentes/Footers/Footer';

export default function Dashboard() {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();
  const navigate = useNavigate(); // El hook ya está aquí

  const drawerWidth = 200;
  const collapsedWidth = 60;

  const openMenu = Boolean(anchorEl);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  
  // Modifica la función handleLogout
  const handleLogout = () => {
    // Aquí es donde pondrías tu lógica para cerrar la sesión
    // Por ejemplo, limpiar el token de autenticación del estado global o del almacenamiento local
    // localStorage.removeItem('authToken'); 
    
    handleMenuClose();
    // Redirige al usuario a la ruta principal del proyecto
    navigate('/');
  };

  const toggleDrawer = () => setOpen(!open);
  const toggleSubmenu = () => setSubmenuOpen(!submenuOpen);

  const getListItemProps = (path) => {
    const isSelected = location.pathname === `/dashboard${path}`;
    const fullPath = `/dashboard${path}`;
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
    <>
      <CssBaseline />
      <Box sx={{display: 'flex', width: '100%', maxWidth: '100vw', overflowX: 'hidden'}}>
        <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1,
          background: 'linear-gradient(to right, #b71c1c, #880e4f)', width: '100%'}}>
          <Toolbar sx={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: { xs: 1, sm: '0 16px' }, width: '100%', maxWidth: '100%'
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1 }}>
              <IconButton color="inherit" edge="start" onClick={toggleDrawer}>
                {open ? <ChevronLeftIcon /> : <MenuIcon />}
              </IconButton>
              <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 1 }}>
                <img src={imagen001} alt="Logo" style={{ width: 32, height: 32 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Mi Biblioteca</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton color="inherit">
                <Badge badgeContent={13} color="secondary">
                  <MailIcon color="inherit" />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={15} color="primary">
                  <NotificationsIcon color="inherit" />
                </Badge>
              </IconButton>
              <Tooltip title="Cuenta Activa">
                <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleMenuOpen}>
                  <Avatar sx={{ width: 32, height: 32, mr: 1 }}>M</Avatar>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'white',
                    display: { xs: 'none', sm: 'block' } }}>
                    Fred Mateo
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
                <MenuItem onClick={handleLogout}>Ver Perfil</MenuItem>
                <MenuItem onClick={handleLogout}>Mi Cuenta</MenuItem>
                {/* Llama a la función handleLogout al hacer click */}
                <MenuItem onClick={handleLogout}>Cerrar sesión 2025</MenuItem>
              </Menu>
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
              {open && <ListItemText primary="Inicios" sx={{ color: 'black' }}  />}
            </ListItem>
            <ListItem {...getListItemProps('/libros')}>
              <ListItemIcon><AutoStoriesIcon /></ListItemIcon>
              {open && <ListItemText primary="Libros" sx={{ color: 'black' }}  />}
            </ListItem>
            <ListItem {...getListItemProps('/maestros')}>
              <ListItemIcon><WorkOutlineIcon /></ListItemIcon>
              {open && <ListItemText primary="Maestros" sx={{ color: 'black' }}  />}
            </ListItem>
            <ListItem {...getListItemProps('/estudiantes')}>
              <ListItemIcon><SchoolIcon /></ListItemIcon>
              {open && <ListItemText primary="Estudiantes" sx={{ color: 'black' }}  />}
            </ListItem>
            <ListItem {...getListItemProps('/usuarios')}>
              <ListItemIcon><GroupIcon /></ListItemIcon>
              {open && <ListItemText primary="Usuarios" sx={{ color: 'black' }}  />}
            </ListItem>
            <ListItem {...getListItemProps('/prestamos')}>
              <ListItemIcon><RealEstateAgentIcon /></ListItemIcon>
              {open && <ListItemText primary="Préstamos" sx={{ color: 'black' }}  />}
            </ListItem>
            <ListItem {...getListItemProps('/inventario')}>
              <ListItemIcon><ChecklistIcon /></ListItemIcon>
              {open && <ListItemText primary="Inventario" sx={{ color: 'black' }}  />}
            </ListItem>
            <ListItem {...getListItemProps('/reservas')}>
              <ListItemIcon><BookOnlineIcon /></ListItemIcon>
              {open && <ListItemText primary="Reservas" sx={{ color: 'black' }}  />}
            </ListItem>
            <ListItem
              onClick={toggleSubmenu}
              sx={{
                cursor: 'pointer',
                bgcolor: submenuOpen ? 'rgba(255,255,255,0.15)' : 'inherit',
                borderRadius: 1, marginX: 1, '&:hover': {
                  bgcolor: submenuOpen ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.08)',
                }
              }}
            >
              <ListItemIcon><BarChartIcon /></ListItemIcon>
              {open && <ListItemText primary="Reportes" />}
              {open && (submenuOpen ? <ExpandLess /> : <ExpandMore />)}
            </ListItem>
            <Collapse in={submenuOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ pl: open ? 4 : 2 }}>
                <ListItem {...getListItemProps('/reportes/prestamos')}>
                  <ListItemIcon><RealEstateAgentIcon /></ListItemIcon>
                  {open && <ListItemText primary="Préstamos" sx={{ color: 'black' }}  />}
                </ListItem>
                <ListItem {...getListItemProps('/reportes/vencidos')}>
                  <ListItemIcon><RuleIcon /></ListItemIcon>
                  {open && <ListItemText primary="Vencidos" sx={{ color: 'black' }}  />}
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Drawer>
        <Box component="main" sx={{
          flexGrow: 1, p: 3, width: '100%', maxWidth: '100%', overflowX: 'hidden'
        }}>
          <Toolbar />
          <Box sx={{
            width: '100%', maxWidth: '100%', overflowX: 'hidden'
          }}>
            <Outlet />
          </Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
}