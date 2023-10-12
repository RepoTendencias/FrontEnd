import React from "react";

export function Get(){

    return(
        <div>
            <input id="description" placeholder="Descripción"/>
            <input type="checkbox" name="response1" value = "400"/>400
            <input type="checkbox" name="response2" value = "200"/>200
            <input type="checkbox" name="response2" value = "404"/>404
            <input id="jason" placeholder="BodyRequest"/>
        </div>

    );
}