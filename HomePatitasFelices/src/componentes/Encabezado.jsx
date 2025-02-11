import React from 'react';
import '../componentes/Encabezado.css';
const Encabezado = () => {
    return (
        <header>
            <div className="logo">
                <img src="../imagenes/logo.jpg" alt="Logo" />
            </div>
            <nav>
                {/*NAVEGACION*/}
                <a href="/">Inicio</a>
                <a href="/servicios">Servicios</a>
                <a href="/contacto">Contacto</a>
                <a href='/Login'>Login</a>
                <a href='/registro'>Resgistrarse</a>
            </nav>
        </header>
    );
};

export default Encabezado;
