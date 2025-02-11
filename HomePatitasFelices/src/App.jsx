import './App.css';
import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Encabezado from './componentes/Encabezado';
import Home from './componentes/Home';
import PieDePagina from './componentes/PieDePagina';
import LoginPage from './componentes/Login';
import Servicios from './componentes/Servicios'; // Importa el componente Servicios
import Productos from './componentes/Productos'; // Importa el componente Productos
import { auth } from './servicios/Credenciales';

function App() {
    const [user, setUser] = useState(null);

    // Monitorea el estado de autenticación del usuario
    auth.onAuthStateChanged((user) => {
        setUser(user);
    });

    return (
        <Router>
            <div>
                <Encabezado /> {/* Encabezado común para todas las rutas */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/servicios" element={<Servicios />} />
                    <Route path="/productos" element={<Productos />} /> {/* Ruta para Productos */}
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
                <PieDePagina /> {/* Pie de página común para todas las rutas */}
            </div>
        </Router>
    );
}

export default App;
