import React from "react";
import './Home.css';
import primeraImage from '../../img/PRIMERA.png';
import segundaImage from '../../img/SEGUND.png';

function Home() {
    return (
        <>
            <section className="gris-color" >
                <div className="information">
                    <h2>Generador de API</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, quibusdam? Quos perspiciatis natus error iure cupiditate ex, accusantium blanditiis repellat, aspernatur, molestiae aliquam autem eos quam maiores corrupti deleniti repellendus!</p>
                </div>
                <div className="">
                    <img src={primeraImage} alt="Descripción" />
                </div>
            </section>
            <section>
                <div className="">
                    <img src={segundaImage} alt="Descripción" />
                </div>
                <div className="information">
                    <h2>Generador de API</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, quibusdam? Quos perspiciatis natus error iure cupiditate ex, accusantium blanditiis repellat, aspernatur, molestiae aliquam autem eos quam maiores corrupti deleniti repellendus!</p>
                </div>
            </section>
        </>
    );
}

export default Home;
