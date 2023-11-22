import axios from "./axios";
import Cookies from "js-cookie";


export const registerRequest = (user) => axios.post(`/register`, user);

export const loginRequest = (user) => axios.post(`/login`, user);

export const verifyTokenRequest = ()=> axios.get('/verify');

export const fetchMedalsFromApi = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:4000/api/medals/${userId}`, {
            headers: {
                Authorization: `Bearer ${Cookies.get('token')}`, // Asumiendo que usas cookies para el token
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};