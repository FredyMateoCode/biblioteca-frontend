// app.jsx (Código corregido)
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';

// Componentes del Layout (padres)
const Publico = lazy(() => import('./paginas/Inicio/Publico'));
const Login = lazy(() => import('./paginas/Login/Login'));
const Dashboard = lazy(() => import('./paginas/Dashboard/Dashboard'));

// Componentes de las vistas (hijos)
const VistaInicio = lazy(() => import('./paginas/Inicio/Vistas/VistaInicio.jsx'));
const VistaLibros = lazy(() => import('./paginas/Inicio/Vistas/VistaLibros.jsx'));
const VistaMaestros = lazy(() => import('./paginas/Inicio/Vistas/VistaMaestros.jsx'));
const VistaEstudiantes = lazy(() => import('./paginas/Inicio/Vistas/VistaEstudiantes.jsx'));
const VistaUsuarios = lazy(() => import('./paginas/Inicio/Vistas/VistaUsuarios.jsx'));
const VistaPrestamos = lazy(() => import('./paginas/Inicio/Vistas/VistaPrestamos.jsx'));
const VistaInventario = lazy(() => import('./paginas/Inicio/Vistas/VistaInventario.jsx'));
const VistaReservas = lazy(() => import('./paginas/Inicio/Vistas/VistaReservas.jsx'));
const ReportesPrestamos = lazy(() => import('./paginas/Inicio/Vistas/ReportesPrestamos.jsx'));
const ReportesVencidos = lazy(() => import('./paginas/Inicio/Vistas/ReportesVencidos.jsx'));

const VistaNoticias = lazy(() => import('./paginas/Inicio/Vistas/VistaNoticias.jsx'));
const VistaServicios = lazy(() => import('./paginas/Inicio/Vistas/VistaServicios.jsx'));
const VistaRepositorio = lazy(() => import('./paginas/Inicio/Vistas/VistaRepositorio.jsx'));
const VistaDestacados = lazy(() => import('./paginas/Inicio/Vistas/VistaDestacados.jsx'));
const VistaOxapampa = lazy(() => import('./paginas/Inicio/Vistas/VistaOxapampa.jsx'));
const VistaRegistrarme = lazy(() => import('./paginas/Inicio/Vistas/VistaRegistrarme.jsx'));
const VistaNosotros = lazy(() => import('./paginas/Inicio/Vistas/VistaNosotros.jsx'));
const VistaDesarrollador = lazy(() => import('./paginas/Inicio/Vistas/VistaDesarrollador.jsx'));
const VistaBiblioteca = lazy(() => import('./paginas/Inicio/Vistas/VistaBiblioteca.jsx'));

// Importa el componente que quieres que sea siempre visible
import PlaygroundSpeedDial from './componentes/Speeds/PlaygroundSpeedDial'; 

// Componente para la página 404 (opcional pero recomendado)
const NotFound = () => <h1>404: Página no encontrada</h1>;

export default function App() {
  return (
    <BrowserRouter>
      {/* Envuelve el componente en un Box con estilos de posicionamiento */}
      <Box
        sx={{
          position: 'fixed', // Posiciona el elemento relativo a la ventana del navegador
          bottom: 16,        // 16px desde la parte inferior
          right: 16,         // 16px desde la parte derecha
          zIndex: 1000,      // Asegura que esté por encima de otros elementos
        }}
      >
        <PlaygroundSpeedDial /> 
      </Box>
      <Suspense fallback={
          // Reemplaza el <div> por un componente Box de MUI con el CircularProgress
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', // Ocupa toda la altura de la ventana
          }}>
            <CircularProgress />
          </Box>
        }
      >
        <Routes>
          {/* Rutas públicas, usan el layout de Publico.jsx */}
          <Route path="/" element={<Publico />} >
            <Route index element={<VistaInicio />} />
            <Route path="noticias" element={<VistaNoticias />} />
            <Route path="servicios" element={<VistaServicios />} />
            <Route path="repositorio" element={<VistaRepositorio />} />
            <Route path="destacados" element={<VistaDestacados />} />
            <Route path="oxapampa" element={<VistaOxapampa />} />
            <Route path="registrarme" element={<VistaRegistrarme />} />
            <Route path="nosotros" element={<VistaNosotros />} />
            <Route path="contactos/desarrollador" element={<VistaDesarrollador />} />
            <Route path="contactos/biblioteca" element={<VistaBiblioteca />} />          
          </Route>
          
          {/* Rutas de Dashboard, usan el layout de Dashboard.jsx */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<VistaInicio />} />
            <Route path="libros" element={<VistaLibros />} />
            <Route path="maestros" element={<VistaMaestros />} />
            <Route path="estudiantes" element={<VistaEstudiantes />} />
            <Route path="usuarios" element={<VistaUsuarios />} />
            <Route path="prestamos" element={<VistaPrestamos />} />
            <Route path="inventario" element={<VistaInventario />} /> 
            <Route path="reservas" element={<VistaReservas />} />
            <Route path="reportes/prestamos" element={<ReportesPrestamos />} />
            <Route path="reportes/vencidos" element={<ReportesVencidos />} />
          </Route>
          
          {/* Otras rutas de nivel superior */}
          <Route path="/login" element={<Login />} />

          
          {/* Ruta de 'catch-all' para páginas no encontradas. Debe ir al final. */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}