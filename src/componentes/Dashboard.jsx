import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
} from '@mui/material';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  Dashboard as DashboardIcon,
  ShoppingCart as ShoppingCartIcon,
  BarChart as BarChartIcon,
  ExpandLess,
  ExpandMore,
  Description as DescriptionIcon,
} from '@mui/icons-material';

import Card1 from './Card1';
import Card2 from './Car2';


// Contenido de ejemplo
const Inicio = () => <Card1 />;

const Ordenes = () => <Typography variant="h4">Órdenes</Typography>;
const ReportesSalas = () => <Typography variant="h4">Reportes: Salas</Typography>;
const ReportesTrafico = () => <Typography variant="h4">Reportes: Tráfico</Typography>;

export default function Dashboard() {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);
  const toggleSubmenu = () => setSubmenuOpen(!submenuOpen);

  const drawerWidth = 180;
  const collapsedWidth = 60;

  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <IconButton color="inherit" edge="start" onClick={toggleDrawer}>
              {open ? <ChevronLeftIcon /> : <MenuIcon />}
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Mi Biblioteca
            </Typography>
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
            },
          }}
        >

          <Toolbar />
          <List>
            <ListItem button component={Link} to="/inicio">
              <ListItemIcon><DashboardIcon /></ListItemIcon>
              {open && <ListItemText primary="Inicio" />}
            </ListItem>

            <ListItem button component={Link} to="/ordenes">
              <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
              {open && <ListItemText primary="Órdenes" />}
            </ListItem>

            <ListItem button onClick={toggleSubmenu}>
              <ListItemIcon><BarChartIcon /></ListItemIcon>
              {open && <ListItemText primary="Reportes" />}
              {open && (submenuOpen ? <ExpandLess /> : <ExpandMore />)}
            </ListItem>

            <Collapse in={submenuOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ pl: open ? 4 : 2 }}>
                <ListItem button component={Link} to="/reportes/salas">
                  <ListItemIcon><DescriptionIcon /></ListItemIcon>
                  {open && <ListItemText primary="Salas" />}
                </ListItem>
                <ListItem button component={Link} to="/reportes/trafico">
                  <ListItemIcon><DescriptionIcon /></ListItemIcon>
                  {open && <ListItemText primary="Tráfico" />}
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Drawer>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            marginLeft: open ? `${drawerWidth}px` : `${collapsedWidth}px`,
            transition: 'margin-left 0.3s',
          }}
        >
          <Toolbar />
          <Routes>
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
