import axios from 'axios';

const API_BASE = 'http://localhost:8080/api'; // Backend URL

export const fetchMenu = () => axios.get(`${API_BASE}/menu`);

export const placeOrder = (orderData) => axios.post(`${API_BASE}/order`, orderData);

export const fetchOrders = () => axios.get(`${API_BASE}/order`);

export const updateOrderStatus = (orderId, status) => axios.put(`${API_BASE}/order/${orderId}/status?status=${status}`);
