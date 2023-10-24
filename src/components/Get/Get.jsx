import React, { useState } from "react";
import './Get.css'
export function Get() {
    return (
      <div className="Get">
        <div className="desc">
          <h3>Descripción</h3>
          <input id="description" placeholder="Descripción" />
        </div>
        <div className="responses">
          <div className="respuestas">
            <h3>Respuestas</h3>
            <div className="borde_respuesta">
            <div className="item-respuesta">
              <input type="radio" name="response" id="response1" value="400" />
              <label for="response1" >400</label>
            </div>
            <div className="item-respuesta">
              <input type="radio" name="response" value="200" id="response2" />
              <label for="response2" >200</label>
            </div>
            <div className="item-respuesta">
              <input type="radio" name="response" value="404" id="response3" />
              <label for="response3" >404</label>
            </div>
            </div>
          </div>
          <div>
            <h3>JSON</h3>
            <textarea id="jason" placeholder="BodyRequest" rows="8" cols="100"/>
          </div>
        </div>
      </div>
    );
  }