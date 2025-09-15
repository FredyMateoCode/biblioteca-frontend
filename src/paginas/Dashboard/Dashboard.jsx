//Importaciones de React y librerias externas
import React, { useState, useEffect  } from 'react'; // 'useState' para gestionar estados, 'useEffect' para efectos secundarios.
import { Outlet, useLocation, useNavigate } from 'react-router-dom'; // 'Outlet' para renderizar rutas anidadas, 'useLocation' para obtener la URL, 'useNavigate' para la navegación.
import { jwtDecode } from 'jwt-decode'; // Para decodificar el token JWT y obtener la información del usuario.

// Importaciones de componentes y estilos de Material-UI
import {
  Box, CssBaseline, AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem,
  ListItemIcon, ListItemText, Collapse, Avatar, Menu, MenuItem, Tooltip, Badge
} from '@mui/material';

// Importaciones de íconos de Material-UI
import {
  Menu as MenuIcon, ChevronLeft as ChevronLeftIcon, Dashboard as DashboardIcon,
  AutoStories as AutoStoriesIcon, WorkOutline as WorkOutlineIcon, School as SchoolIcon,
  Group as GroupIcon, RealEstateAgent as RealEstateAgentIcon, Checklist as ChecklistIcon,
  BookOnline as BookOnlineIcon, BarChart as BarChartIcon, ExpandLess, ExpandMore, Rule as RuleIcon,
  Mail as MailIcon, Notifications as NotificationsIcon, ArrowDropDown as ArrowDropDownIcon
} from '@mui/icons-material';

//Importaciones de activos locales
import imagen001 from '../../assets/imagenes/Logo.png';
import Footer from '../../componentes/Footers/Footer';

export default function Dashboard() {
  //Estados (hooks)
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  //Estado para obtener el nombre del usuario
  const [nombreUsuario, setNombreUsuario] = useState(''); // Estado que guarda el nombre del usuario.
  const primeraLetra = nombreUsuario ? nombreUsuario.charAt(0) : ''; // Obtiene la primera letra del nombre para el Avatar.
  
  //Efecto de lado (se ejecuta al montar el componente)
  useEffect(() => {
  const token = localStorage.getItem('auth-token'); // Obtiene el token de autenticación.
  
  if (token) {
      try {
        const usuarioDecodificado = jwtDecode(token); // Decodifica el token para obtener el payload.
        setNombreUsuario(usuarioDecodificado.usuario);// Revisa tu payload para saber el nombre exacto de la propiedad (ej. 'nombre', 'usuario', etc.). En tu caso era 'usuario'.
      } catch (error) {
        console.error('Error al decodificar el token:', error);
      }
    }
  }, []);// El arreglo vacío `[]` indica que este efecto se ejecuta una sola vez al cargar el componente.

  // Constantes de diseño:
  const drawerWidth = 200;// Ancho del Drawer cuando está abierto.
  const collapsedWidth = 60;// Ancho del Drawer cuando está colapsado.

  //Manejo del menú de usuario
  const openMenu = Boolean(anchorEl); // Convierte el estado a booleano para el prop 'open' del menú.
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget); // Abre el menú anclándolo al elemento que disparó el evento.
  const handleMenuClose = () => setAnchorEl(null); // Cierra el menú reseteando el estado.

  //Obtiene el rol del usuario desde el almacenamiento local localStorage
  const userRol = localStorage.getItem('user-rol');

   //Efecto para manejar el cierre de sesión si se elimina el token
  useEffect(() => {
   const handleStorageChange = (e) => { 
    if (e.key === 'auth-token' && !e.newValue) { // Si el token fue eliminado del localStorage.
      navigate('/login', { replace: true }); // Redirige al usuario a la página de login.
    }
   };
   window.addEventListener('storage', handleStorageChange);// Escucha los cambios en el localStorage.
   return () => {
    window.removeEventListener('storage', handleStorageChange); // Limpia el 'listener' al desmontar el componente.
   };
  }, [navigate]);

  //Función para cerrar sesión
  const handleLogout = () => {
    //Elimina el token de autenticación del almacenamiento local
        localStorage.removeItem('auth-token');
    //Cerrar el menú deplegable
    handleMenuClose();
    // Redirige al usuario a la ruta principal del proyecto
    navigate('/');
  };

  // ✅ Funciones para el Drawer y submenú
  const toggleDrawer = () => setOpen(!open); // Cambia el estado del Drawer (abierto/cerrado).
  const toggleSubmenu = () => setSubmenuOpen(!submenuOpen); // Cambia el estado del submenú (abierto/cerrado).

  // ✅ Propiedades para los elementos de la lista de navegación
  const getListItemProps = (path) => {
    const isSelected = location.pathname === `/dashboard${path}`; // Verifica si la ruta actual coincide.
    const fullPath = `/dashboard${path}`; // Construye la ruta completa.
    const handleItemClick = (event) => {
      event.preventDefault(); // Previene la navegación por defecto del enlace.
      navigate(fullPath, { replace: true }); // Navega a la ruta.
    };
    return {
      component: 'a', // Renderiza el elemento como una etiqueta `<a>`.
      href: fullPath,
      onClick: handleItemClick,
      sx: { // Estilos en línea con la propiedad `sx`.
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
      <CssBaseline /> {/* ✅ Resetea los estilos CSS del navegador. */}
      <Box sx={{display: 'flex', width: '100%', maxWidth: '100vw', overflowX: 'hidden'}}>
        <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1,
          background: 'linear-gradient(to right, #b71c1c, #880e4f)', width: '100%'}}>
          {/* ✅ Barra de navegación superior */}
          <Toolbar sx={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: { xs: 1, sm: '0 16px' }, width: '100%', maxWidth: '100%'
          }}>
            {/* ... Icono de menú, logo, título ... */}
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
                  <Avatar sx={{ width: 32, height: 32, mr: 1 }}>{primeraLetra}</Avatar>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'white',
                    display: { xs: 'none', sm: 'block' } }}>
                    {nombreUsuario}
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
          {/* ✅ Menú lateral */}
          <Toolbar />
          <List sx={{ overflowX: 'hidden' }}>
            <ListItem {...getListItemProps('')}>
              <ListItemIcon><DashboardIcon /></ListItemIcon>
              {open && <ListItemText primary="Inicios" sx={{ color: 'black' }}  />}
            </ListItem>
            
            {/* ✅ La protección de la ruta de usuarios */}
            {userRol !== 'invitado' && (
              <ListItem {...getListItemProps('/libros')}>
                <ListItemIcon><AutoStoriesIcon /></ListItemIcon>
                {open && <ListItemText primary="Libros" sx={{ color: 'black' }}  />}
              </ListItem>                           
            )}

            {/* ✅ La protección de la ruta de usuarios */}
            {userRol !== 'invitado' && (
              <ListItem {...getListItemProps('/maestros')}>
                <ListItemIcon><WorkOutlineIcon /></ListItemIcon>
                {open && <ListItemText primary="Maestros" sx={{ color: 'black' }}  />}
              </ListItem>                           
            )}

            

            {/* ✅ La protección de la ruta de usuarios */}
            {userRol !== 'invitado' && (
              <ListItem {...getListItemProps('/estudiantes')}>
                <ListItemIcon><SchoolIcon /></ListItemIcon>
                {open && <ListItemText primary="Estudiantes" sx={{ color: 'black' }}  />}
              </ListItem>              
            )}

            {/* ✅ La protección de la ruta de usuarios */}
            {userRol !== 'invitado' && (
              <ListItem {...getListItemProps('/usuarios')}>
                <ListItemIcon><GroupIcon /></ListItemIcon>
                {open && <ListItemText primary="Usuarios" sx={{ color: 'black' }}  />}
              </ListItem>
            )}

            {/* ✅ La protección de la ruta de usuarios */}
            {userRol !== 'invitado' && (
              <ListItem {...getListItemProps('/prestamos')}>
                <ListItemIcon><RealEstateAgentIcon /></ListItemIcon>
                {open && <ListItemText primary="Préstamos" sx={{ color: 'black' }}  />}
              </ListItem>

            )}


            {/* ✅ La protección de la ruta de usuarios */}
            {userRol !== 'invitado' && (
              <ListItem {...getListItemProps('/inventario')}>
                <ListItemIcon><ChecklistIcon /></ListItemIcon>
                {open && <ListItemText primary="Inventario" sx={{ color: 'black' }}  />}
              </ListItem>
            )}

            {/* ✅ La protección de la ruta de usuarios */}
            {userRol !== 'invitado' && (
              <ListItem {...getListItemProps('/reservas')}>
                <ListItemIcon><BookOnlineIcon /></ListItemIcon>
                {open && <ListItemText primary="Reservas" sx={{ color: 'black' }}  />}
              </ListItem>

            )}
            
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