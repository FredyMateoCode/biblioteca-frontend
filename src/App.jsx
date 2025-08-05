import { useState } from 'react' // Función para manejar estados dentro de los componentes.

/*Desarrollo*/
import NavbarMUI from './componentes/NavbarMUI';
import CardLibro from './componentes/CardLibro';
import Card2 from './componentes/Car2';


function App() {

  return (

     <>
      <Card2 />

      <main>
        <CardLibro />
        <Card2 />
      </main>
    </>
  )
}

export default App
