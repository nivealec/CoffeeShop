import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

export const fetchCoffees = () => {
    return axios.get(`${API_URL}coffees/`);
};

export const createOrder = (orderData) => {
    return axios.post(`${API_URL}orders/`, orderData);
};
