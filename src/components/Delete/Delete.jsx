import React from "react";

export function Delete(){

    return(
        <div>
            <input id="description" placeholder="Descripción"/>
            <input id="ID" placeholder="ID"/>
            <input type="checkbox" name="response1" value = "400"/>400
            <input type="checkbox" name="response2" value = "202"/>202
            <input type="checkbox" name="response2" value = "404"/>404
        </div>

    );
}