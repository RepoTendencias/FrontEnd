import React, { useState } from "react";
import './Put.css';
export function Put({ id }) {
    const [response, setResponse] = useState("")
    const idProp = id
    return (
        <div className="Put">
            <div className="desc">
                <h3>Descripción</h3>
                <input id="description" placeholder="Descripción" className="put_descripcion" />
                <h3>Request Body</h3>
                <textarea id="jason" placeholder="Request Body" className="put_body"></textarea>
                <input type="hidden" className="put_response" value={response} />
            </div>
            <div className="responses">
                <div className="respuestas">
                    <h3>Respuestas</h3>
                    <div className="borde_respuesta">
                        <div className="item-respuesta">
                            <input type="radio" name={`response${idProp}`} id={`response1_${idProp}`} value="400" onChange={(e) => { if (e.target.checked) { setResponse("400") } }} />
                            <label htmlFor={`response1_${idProp}`} >400</label>
                        </div>
                        <div className="item-respuesta">
                            <input type="radio" name={`response${idProp}`} id={`response2_${idProp}`} value="200" onChange={(e) => { if (e.target.checked) { setResponse("200") } }} />
                            <label htmlFor={`response2_${idProp}`} >200</label>
                        </div>
                        <div className="item-respuesta">
                            <input type="radio" name={`response${idProp}`} id={`response3_${idProp}`} value="404" onChange={(e) => { if (e.target.checked) { setResponse("404") } }} />
                            <label htmlFor={`response3_${idProp}`}>404</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}