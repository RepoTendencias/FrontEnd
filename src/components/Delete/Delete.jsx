import React, { useState } from "react";
import './Delete.css'
export function Delete({ id }) {
    const [response, setResponse] = useState("")
    const idProp = id
    return (
        <div className="Delete">
            <div className="desc">
                <h3>URL</h3>
                <input id="delete_url" placeholder="url" className="delete_url"/>
                <h3>Descripción</h3>
                <input id="description" placeholder="Descripción" className="delete_descripcion" />
                <h3>ID</h3>
                <input id="ID" placeholder="ID" className="delete_id"/>
                <input type="hidden" className="delete_response" value={response} />
            </div>
            <div className="responses">
                <div className="respuestas">
                    <h3>Respuestas</h3>
                    <div className="borde_respuesta">
                        <div className="item-respuesta">
                            <input type="checkbox" name={`response${idProp}`} id={`response1_${idProp}`} value="400" onChange={(e) => { if (e.target.checked) { setResponse("400") } }} />
                            <label htmlFor={`response1_${idProp}`} >400</label>
                        </div>
                        <div className="item-respuesta">
                            <input type="checkbox" name={`response${idProp}`} id={`response2_${idProp}`} value="200" onChange={(e) => { if (e.target.checked) { setResponse("200") } }} />
                            <label htmlFor={`response2_${idProp}`} >200</label>
                        </div>
                        <div className="item-respuesta">
                            <input type="checkbox" name={`response${idProp}`} id={`response3_${idProp}`} value="404" onChange={(e) => { if (e.target.checked) { setResponse("404") } }} />
                            <label htmlFor={`response3_${idProp}`}>404</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}