import React from "react";

export function Put(){

    return(
        <div>
            <input id="description" placeholder="Descripción"/>
            <input id="jason" placeholder="Request Body"/>
            <input type="checkbox" name="response1" value = "400"/>400
            <input type="checkbox" name="response2" value = "202"/>202
            <input type="checkbox" name="response2" value = "404"/>404
            
        </div>

    );
}