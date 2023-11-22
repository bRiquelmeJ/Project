import React, { createContext, useState, useContext, useEffect } from 'react';
import { loginRequest, verifyTokenRequest } from '../api/auth';
import Cookies from 'js-cookie';

// Crear el contexto de autenticación
export const AuthContext = createContext();

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

// Proveedor de contexto de autenticación que envuelve la aplicación
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Estado para el usuario actual
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado para el control de acceso

    // Función para iniciar sesión
    const signin = async (userData) => {
        try {
            const res = await loginRequest(userData);
            Cookies.set('token', res.data.token); // Guarda el token en las cookies
            setIsAuthenticated(true); // Establece el estado de autenticación a true
            setUser(res.data.user); // Establece el usuario en el estado
        } catch (error) {
            console.error('Error en signin:', error);
        }
    };

    // Función para cerrar sesión
    const logout = () => {
        Cookies.remove("token"); // Elimina el token de las cookies
        setIsAuthenticated(false); // Establece el estado de autenticación a false
        setUser(null); // Elimina el usuario del estado
    };

    // Efecto para verificar el token y autenticar al usuario al cargar la app
    useEffect(() => {
        const checkLogin = async () => {
            const token = Cookies.get('token');
            if (!token) {
                setIsAuthenticated(false); // Si no hay token, establece isAuthenticated a false
                return;
            }

            try {
                const res = await verifyTokenRequest(token);
                setIsAuthenticated(true); // Verifica el token y establece isAuthenticated a true
                setUser(res.data.user); // Establece el usuario en el estado
            } catch (error) {
                console.error('Error verificando el token:', error);
                setIsAuthenticated(false); // En caso de error, establece isAuthenticated a false
            }
        };

        checkLogin();
    }, []);

    return (
        <AuthContext.Provider value={{
            user, // El usuario actual
            isAuthenticated, // Estado de autenticación del usuario
            signin, // Función para iniciar sesión
            logout, // Función para cerrar sesión
        }}>
            {children} // Los hijos que tendrán acceso al contexto
        </AuthContext.Provider>
    );
};
