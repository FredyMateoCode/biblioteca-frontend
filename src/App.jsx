import { useState } from 'react' // Función para manejar estados dentro de los componentes.

/*Desarrollo*/
import Navbar from './componentes/Navbar';//importamos el componente Navbar

function App() {

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1>Componentes en desarrollo</h1>
      </div>
    </>
  )
}

export default App
