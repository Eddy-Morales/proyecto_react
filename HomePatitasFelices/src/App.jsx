import './App.css';
import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Encabezado from './componentes/Encabezado';
import Home from './componentes/Home';
import PieDePagina from './componentes/PieDePagina';
import LoginPage from './componentes/Login';
import Servicios from './componentes/Servicios'; // Importa el componente Servicios
import { auth } from './servicios/Credenciales';

function App() {
    const [user, setUser] = useState(null);

    auth.onAuthStateChanged((user) => {
        setUser(user);
    });

    return (
        <Router>
            <div>
                <Encabezado />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/servicios" element={<Servicios />} /> {/* Nueva ruta para Servicios */}
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
                <PieDePagina />
            </div>
        </Router>
    );
}

export default App;