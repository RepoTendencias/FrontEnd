import React, { useState } from "react";
import './Get.css';
export function Get({ id }) {
  const [response1, setResponse1] = useState("")
  const [response2, setResponse2] = useState("")
  const [response3, setResponse3] = useState("")
  const idProp = id
  return (
    <div className="Get">
      <div className="desc">
        <h3>URL</h3>
        <input id="get_url" placeholder="url" className="get_url"/>
        <h3>Descripción</h3>
        <input id="description" placeholder="Descripción" className="get_descripcion" />
        <input type="hidden" className="get_response1" value={response1} />
        <input type="hidden" className="get_response2" value={response2} />
        <input type="hidden" className="get_response3" value={response3} />
      </div>
      <div className="responses">
        <div className="respuestas">
          <h3>Respuestas</h3>
          <div className="borde_respuesta">
            <div className="item-respuesta">
              <input type="checkbox" name={`response2${idProp}`} id={`response2_${idProp}`} value="200" onChange={(e) => { if (e.target.checked) { setResponse2("200") } }} />
              <label htmlFor={`response2_${idProp}`} >200</label>
              <textarea id="jason" className="get_body" placeholder="BodyRequest" ></textarea>
            </div>
            <div className="item-respuesta">
              <input type="checkbox" name={`response1${idProp}`} id={`response1_${idProp}`} value="400" onChange={(e) => { if (e.target.checked) { setResponse1("400") } }} />
              <label htmlFor={`response1_${idProp}`} >400</label>
              <input type = "text" id="description_400" placeholder="Descripción" className="get_descripcion_400"/>
            </div>
            <div className="item-respuesta">
              <input type="checkbox" name={`response3${idProp}`} id={`response3_${idProp}`} value="404" onChange={(e) => { if (e.target.checked) { setResponse3("404") } }} />
              <label htmlFor={`response3_${idProp}`}>404</label>
              <input type = "text" id="description_404" placeholder="Descripción" className="get_descripcion_404"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}