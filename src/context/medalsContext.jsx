//Al teminar el quiz hacer un put y actualizar la medalla
//En este archivo crear un context que me permita manipular las medallas
//Este context tiene dos cosas, estado de las medallas y la funcion que hace get para obtener las medallas
//la funcion ademas de obtener las nuevas medallas tiene que guardar las medallas nuevas en el local storage
// y el context de proliferar tanto el estado como la funcion en tod la aplicacion
// TODO: crear context


// MedalsContext.js
import React, { createContext, useState, useEffect } from 'react';
import { fetchMedalsFromApi } from '../api/auth'; // Asegúrate de tener la ruta correcta

export const MedalsContext = createContext();

export const MedalsProvider = ({ children }) => {
    const [medals, setMedals] = useState(() => {
        // Intenta recuperar las medallas del localStorage o establece un array vacío si no hay ninguna
        const savedMedals = localStorage.getItem('medals');
        return savedMedals ? JSON.parse(savedMedals) : [];
    });

    // Asumimos que recibes el userId de alguna parte, podría ser del AuthContext
    const userId = ''; // Debes obtener el userId del AuthContext o de donde sea apropiado

    const getMedals = async () => {
        try {
            const medalsData = await fetchMedalsFromApi(userId);
            setMedals(medalsData);
            localStorage.setItem('medals', JSON.stringify(medalsData));
        } catch (error) {
            console.error('Error al obtener las medallas:', error);
        }
    };

    // Carga inicial de medallas
    useEffect(() => {
        if (userId) {
            getMedals();
        }
    }, [userId]);

    return (
        <MedalsContext.Provider value={{ medals, getMedals }}>
            {children}
        </MedalsContext.Provider>
    );
};
