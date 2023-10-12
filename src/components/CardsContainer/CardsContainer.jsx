import React, { useState } from 'react';
import { Card } from '../Card/Card';

function CardsContainer() {
  const [componentes, setComponentes] = useState([]);

  const agregarComponente = () => {
    // Crear una copia del arreglo de componentes existente y agregar el nuevo componente
    const nuevosComponentes = [...componentes, <Card key={componentes.length} />];
    setComponentes(nuevosComponentes);
  };

  return (
    <div>
      <button onClick={agregarComponente}>Agregar Componente</button>
      {componentes.map((componente, index) => (
        <div key={index}>{componente}</div>
      ))}
    </div>
  );
}

export default CardsContainer;
