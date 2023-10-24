import React, { useState } from 'react';
import './CardsContainer.css';
import { Card } from '../Card/Card';

function CardsContainer() {
  const [componentes, setComponentes] = useState([]);

  const agregarComponente = () => {
    // Crear una copia del arreglo de componentes existente y agregar el nuevo componente
    const nuevosComponentes = [...componentes, <Card key={componentes.length} />];
    setComponentes(nuevosComponentes);
  };

  return (
    <div className="container">
      <div className="componentes">
        {componentes.map((componente, index) => (
          <div key={index}>{componente}</div>
        ))}
      </div>
      <button className="circular-button" onClick={agregarComponente}>+</button>
    </div>
  );
}

export default CardsContainer;
