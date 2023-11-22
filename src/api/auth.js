import axios from "./axios";
import Cookies from "js-cookie";

export const registerRequest = (user) => {
    return axios.post(`/register`, user);
};

export const loginRequest = (user) => {
    return axios.post(`/login`, user);
};

export const verifyTokenRequest = () => {
    const token = Cookies.get('token'); // Asegúrate de que el nombre de la cookie aquí sea el correcto
    return axios.get('/verify', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const fetchMedalsFromApi = async (userId) => {
    console.log('userId:', userId); // Imprime el userId

    const token = Cookies.get('token');
    try {
        const response = await axios.get(`http://localhost:4000/api/medals/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
};