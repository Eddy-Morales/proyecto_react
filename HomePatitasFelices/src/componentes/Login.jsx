import React, { useState } from 'react';
import '../componentes/Login.css';
import { auth, signInWithEmailAndPassword } from '../servicios/Credenciales';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');4
    const navigate = useNavigate();

    const logear = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/app1');
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    };

    return (
        <main>
            <div>
                <div className="loginPage">
                    <h1 className="loginPage-title">Iniciar sesión</h1>
                    <form onSubmit={logear}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit">Iniciar sesión</button>
                    </form>
                    <button onClick={() => navigate('/')}>Regresar a Home</button>  
                </div>
            </div>
        </main>
    );
};

export default LoginPage;