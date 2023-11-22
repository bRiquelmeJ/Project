import React, { createContext, useState, useContext } from 'react';
import { fetchMedalsFromApi } from '../api/auth'; // Asume que esta es la función para obtener las medallas

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

// Crear el proveedor de contexto de medallas
export const MedalsProvider = ({ children }) => {
    const [medals, setMedals] = useState(() => {
        // Intenta recuperar las medallas del localStorage o establece un array vacío si no hay ninguna
        const savedMedals = localStorage.getItem('medals');
        return savedMedals ? JSON.parse(savedMedals) : [];
    });

    // Define cómo se obtienen las medallas, posiblemente pasando el userId como argumento
    const getMedals = async (userId) => {
        try {
            const medalsData = await fetchMedalsFromApi(userId);
            setMedals(medalsData);
            localStorage.setItem('medals', JSON.stringify(medalsData));
        } catch (error) {
            console.error('Error al obtener las medallas:', error);
        }
    };

    // Proporciona el contexto a los componentes hijos
    return (
        <MedalsContext.Provider value={{ medals, getMedals }}>
            {children}
        </MedalsContext.Provider>
    );
};
