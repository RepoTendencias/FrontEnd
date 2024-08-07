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
    const url = "http://127.0.0.1:5000/api/generate_api"

    const post_descripcion = document.querySelectorAll(".post_descripcion");
    const post_body = document.querySelectorAll(".post_body");
    const post_response = document.querySelectorAll(".post_response");
    const post_url = document.querySelectorAll(".post_url");
    let post = []
    for (let i = 0; i < post_descripcion.length; i++) {
      post.push({url: post_url[i].value, descripcion: post_descripcion[i].value, body: JSON.parse(post_body[i].value), response: post_response[i].value})
    }

    const get_url = document.querySelectorAll(".get_url");  
    const get_descripcion = document.querySelectorAll(".get_descripcion");
    const get_body = document.querySelectorAll(".get_body");
    const get_response1 = document.querySelectorAll(".get_response1");
    const get_response2 = document.querySelectorAll(".get_response2");
    const get_response3 = document.querySelectorAll(".get_response3");
    const get_descripcion400 = document.querySelectorAll(".get_descripcion_400");
    const get_descripcion404 = document.querySelectorAll(".get_descripcion_404");
    let get = []
    for (let i = 0; i < get_descripcion.length; i++) {
      get.push({url: get_url[i].value, descripcion: get_descripcion[i].value, body: JSON.parse(get_body[i].value), response: get_response1[i].value, response2: get_response2[i].value, response3: get_response3[i].value, desc400: get_descripcion400[i].value, desc404: get_descripcion404[i].value})
    }
    const put_url = document.querySelectorAll(".put_url");
    const put_descripcion = document.querySelectorAll(".put_descripcion");
    const put_body = document.querySelectorAll(".put_body");
    const put_response = document.querySelectorAll(".put_response");
    let put = []
    for (let i = 0; i < put_descripcion.length; i++) {
      put.push({url: put_url[i].value, descripcion: put_descripcion[i].value, body: JSON.parse(put_body[i].value), response: put_response[i].value})
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
    .then(response => response.blob())
    .then(blob => {
      // Crear un enlace temporal para descargar el archivo
      const enlaceDescarga = document.createElement('a');
      enlaceDescarga.href = window.URL.createObjectURL(blob);
      enlaceDescarga.download = "api_files.zip";

      // Agregar el enlace al cuerpo del documento
      document.body.appendChild(enlaceDescarga);

      // Simular un clic en el enlace para iniciar la descarga
      enlaceDescarga.click();

      // Eliminar el enlace después de la descarga
      document.body.removeChild(enlaceDescarga);
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
