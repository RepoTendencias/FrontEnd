import React, { useState } from 'react';
import './CardsContainer.css';
import { Card } from '../Card/Card';

function CardsContainer() {
  const [componentes, setComponentes] = useState([]);

  const agregarComponente = () => {
    // Crear una copia del arreglo de componentes existente y agregar el nuevo componente
    const nuevosComponentes = [...componentes, <Card key={componentes.length} id={componentes.length} />];
    setComponentes(nuevosComponentes);
  };

  const enviarTodo = () => {
    const url = "http://127.0.0.1:5000"

    const post_descripcion = document.querySelectorAll(".post_descripcion");
    const post_body = document.querySelectorAll(".post_body");
    const post_response = document.querySelectorAll(".post_response");
    const post_url = document.querySelectorAll(".post_url");
    let post = []
    for (let i = 0; i < post_descripcion.length; i++) {
      post.push({url: post_url[i].value, descripcion: post_descripcion[i].value, body: post_body[i].value, response: post_response[i].value})
    }

    const get_url = document.querySelectorAll(".get_url");  
    const get_descripcion = document.querySelectorAll(".get_descripcion");
    const get_body = document.querySelectorAll(".get_body");
    const get_response = document.querySelectorAll(".get_response");
    let get = []
    for (let i = 0; i < get_descripcion.length; i++) {
      get.push({url: get_url[i].value, descripcion: get_descripcion[i].value, body: get_body[i].value, response: get_response[i].value})
    }
    const put_url = document.querySelectorAll(".put_url");
    const put_descripcion = document.querySelectorAll(".put_descripcion");
    const put_body = document.querySelectorAll(".put_body");
    const put_response = document.querySelectorAll(".put_response");
    let put = []
    for (let i = 0; i < put_descripcion.length; i++) {
      put.push({url: post_url[i].value, descripcion: put_descripcion[i].value, body: put_body[i].value, response: put_response[i].value})
    }

    const delete_url = document.querySelectorAll(".delete_url");
    const delete_descripcion = document.querySelectorAll(".delete_descripcion");
    const delete_id = document.querySelectorAll(".delete_id");
    const delete_response = document.querySelectorAll(".delete_response");
    let delete_arr = []
    for (let i = 0; i < delete_descripcion.length; i++) {
      delete_arr.push({url: delete_url[i].value, descripcion: delete_descripcion[i].value, id: delete_id[i].value, response: delete_response[i].value})
    }

    const dataEnviar = {post: post, get: get, put: put, delete: delete_arr}
    console.log(dataEnviar)
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Set the content type as needed
        },
        body: JSON.stringify(dataEnviar), // Convert data to JSON string
    };

    fetch(url, requestOptions)
    .then((respuesta) =>{
        const respuestaJson = respuesta.json();
        console.log(respuestaJson)
        
    }).catch((error) => {
        console.log(error)
    })
  }

  return (
    <div className="container">
      <div className="componentes">
        {componentes.map((componente, index) => (
          <div key={index}>{componente}</div>
        ))}
      </div>
      <button className="circular-button" onClick={agregarComponente}>+</button>
      <button className="enviar" onClick={enviarTodo}>Enviar todo</button>
    </div>
  );
}

export default CardsContainer;
