import React, { createContext, useState, useContext, useEffect } from 'react';
import { fetchMedalsFromApi } from '../api/auth'; // Asume que esta es la función para obtener las medallas
<<<<<<< Updated upstream
=======
import { AuthContext } from './AuthContext'; // Importa AuthContext

>>>>>>> Stashed changes
// Crear el contexto de medallas
export const MedalsContext = createContext();

// Crear un hook personalizado para acceder al contexto de medallas
export const useMedals = () => {
    const context = useContext(MedalsContext);
    if (!context) {
        throw new Error('useMedals must be used within a MedalsProvider');
    }
    return context;
};

export const MedalsProvider = ({ children }) => {
    const { user: { id: userId } = {} } = useContext(AuthContext); // Accede al userId desde AuthContext
    const [medals, setMedals] = useState(() => {
        const savedMedals = localStorage.getItem('medals');
        return savedMedals ? JSON.parse(savedMedals) : [];
    });

<<<<<<< Updated upstream
    // Define cómo se obtienen las medallas, posiblemente pasando el userId como argumento
    const [loading, setLoading] = useState(false);

    const getMedals = async (userId) => {
        setLoading(true); // Inicia el indicador de carga
=======
    // Función para obtener medallas de la API y actualizar el estado
    const getMedals = async () => {
        if (!userId) return; // Si no hay userId, no hagas nada
>>>>>>> Stashed changes
        try {
            const medalsData = await fetchMedalsFromApi(userId);
            if (medalsData) {
                console.log('Medallas obtenidas:', medalsData); // Agrega esto para depuración
                setMedals(medalsData);
                localStorage.setItem('medals', JSON.stringify(medalsData));
            } else {
                console.log('No se recibieron medallas desde la API');
            }
        } catch (error) {
            console.error('Error al obtener las medallas:', error);
        } finally {
            setLoading(false); // Finaliza el indicador de carga
        }
    };
<<<<<<< Updated upstream
    
    
=======

    // Llama a getMedals automáticamente cuando el userId esté disponible
    useEffect(() => {
        getMedals();
    }, [userId]); // Dependencia: vuelve a ejecutar el efecto cuando el userId cambie

>>>>>>> Stashed changes
    return (
        <MedalsContext.Provider value={{ medals, getMedals, loading }}>
            {children}
        </MedalsContext.Provider>
<<<<<<< Updated upstream
    );}
=======
    );
};
>>>>>>> Stashed changes
