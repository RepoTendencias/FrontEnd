import React, { useState } from "react";
import './Post.css';
export function Post({id}) {

    const [response, setResponse] = useState("")
    const idProp = id
    return (
        <div className="Post">
            <div className="desc">
                <h3>URL</h3>
                <input id="post_url" placeholder="url" className="post_url"/>
                <h3>Descripción</h3>
                <input id="description" className="post_descripcion" placeholder="Descripción" />
                <h3>Request Body</h3>
                <textarea id="requestBody" className="post_body" placeholder="Request Body"></textarea>
                <input type="hidden" className="post_response" value={response} />
            </div>
            <div className="responses">
                <div className="respuestas">
                    <h3>Respuestas</h3>
                    <div className="borde_respuesta">
                        <div className="item-respuesta">
                            <input type="checkbox" name={`response${idProp}`} id={`response1_${idProp}`} value="400" onChange={(e) => { if(e.target.checked) {setResponse("400")}}} />
                            <label htmlFor={`response1_${idProp}`} >400</label>
                        </div>
                        <div className="item-respuesta">
                            <input type="checkbox" name={`response${idProp}`} id={`response2_${idProp}`} value="200"  onChange={(e) => { if(e.target.checked) {setResponse("200")}}} />
                            <label htmlFor={`response2_${idProp}`} >200</label>
                        </div>
                        <div className="item-respuesta">
                            <input type="checkbox" name={`response${idProp}`} id={`response3_${idProp}`} value="404"  onChange={(e) => { if(e.target.checked) {setResponse("404")}}}/>
                            <label htmlFor={`response3_${idProp}`}>404</label>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
}