import axios from "./axios";
import Cookies from "js-cookie";

export const registerRequest = (user) => {
    return axios.post(`/register`, user);
};

export const loginRequest = (user) => {
    return axios.post(`/login`, user);
};

// Esta función ya no usa el hook y espera que el token sea pasado como argumento.
export const verifyTokenRequest = (token) => {
    return axios.get('/verify', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

// Esta función espera recibir el userId y el token como argumentos.
export const fetchMedalsFromApi = async (userId, token) => {
    console.log('userId:', userId); // Imprime el userId

    try {
        const response = await axios.get(`/medals/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response.data); // Imprime los datos recibidos
        return response;
    } catch (error) {
        console.error('Error al obtener las medallas: ', error.response ? error.response.data : error);
        throw error;
    }
};

const winQuiz = async () => {
    try {
        const response = await axios.put(`/medals/win-quizz/${user._id}`, {
            medalName: 'nombreDeLaMedalla', // Reemplaza esto con el nombre de la medalla que el usuario ha ganado
        }, {
            headers: {
                Authorization: `Bearer ${token}`, // Reemplaza esto con el token de autenticación del usuario
            },
        });

        console.log(response.data); // Imprime la medalla actualizada
    } catch (error) {
        console.error('Error al ganar el quiz:', error.response ? error.response.data : error);
    }
};