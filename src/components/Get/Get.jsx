import React from "react";
import './Get.css'
export function Get() {
    return (
      <div className="Get">
        <div className="desc">
          <h3>Descripción</h3>
          <input id="description" placeholder="Descripción" />
        </div>
        <div className="responses">
          <div>
            <h3>Respuestas</h3>
            <input type="checkbox" name="response1" value="400" />400
            <input type="checkbox" name="response2" value="200" />200
            <input type="checkbox" name="response3" value="404" />404
          </div>
          <div>
            <h3>JSON</h3>
            <input id="jason" placeholder="BodyRequest" />
          </div>
        </div>
      </div>
    );
  }