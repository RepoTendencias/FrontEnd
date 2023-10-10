import React from "react";
import './Navbar.css';

export function Navbar (){

    return(
        <header className="header">
        <div className="logo-container">
            <h1 className="titulo">GENERAPI</h1>    
        </div>
        <nav>
            <ul className="nav-container">
                <li>
                    <a href="/">Inicio</a>
                </li>
                <li>
                    <a href="/API">API</a>
                </li>
            </ul>
        </nav>
        </header>
    );
}
