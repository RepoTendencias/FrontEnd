import React from "react";
import './Card.css'
import { Get } from "../Get/Get";
import { Put } from "../Put/Put";
import { Delete } from "../Delete/Delete";
import { Post } from "../Post/Post";
import { useState } from "react";

export function Card({id}){
    const [selectedOption, setSeledOption] = useState('GET')
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
                    {selectedOption === 'GET' && <Get id={id} className={`Get ${selectedOption === 'GET' ? 'show' : ''}`} />}
                    {selectedOption === 'POST' && <Post id={id} className={`Post ${selectedOption === 'POST' ? 'show' : ''}`} />}
                    {selectedOption === 'PUT' && <Put id={id} className={`Put ${selectedOption === 'PUT' ? 'show' : ''}`} />}
                    {selectedOption === 'DELETE' && <Delete id={id} className={`Delete ${selectedOption === 'DELETE' ? 'show' : ''}`} />}
                </div>
            </div>
        );
    }

