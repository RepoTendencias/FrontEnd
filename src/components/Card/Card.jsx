import React from "react";
import './Card.css'
import { Get } from "../Get/Get";
import { Put } from "../Put/Put";
import { Delete } from "../Delete/Delete";
import { Post } from "../Post/Post";
import { useState } from "react";

export function Card(){
    const [selectedOption, setSeledOption] = useState('opcionInicial')
    const handleSelectChange=(event)=>{
        setSeledOption(event.target.value);
    }
        return(
            <div className="card"> 
                <div className="card-content">
                    <select name={selectedOption} onChange={handleSelectChange}>
                        <option value="GET"> Get</option>
                        <option value="POST"> Post</option>
                        <option value="PUT"> Put</option>
                        <option value="DELETE"> Delete</option>
                    </select>
                    {selectedOption === 'GET' && <Get/>}
                    {selectedOption === 'POST' && <Post/>}
                    {selectedOption === 'PUT' && <Put/>}
                    {selectedOption === 'DELETE' && <Delete/>}
                </div>
            </div>
        );
    }

