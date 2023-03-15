import axios from 'axios';

axios.defaults.withCredentials = true

const backend = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000',
})

const loginAdmin = async (data) => await backend.post('/admin/login', data);
const verifyAdmin = async () => await backend.get('/admin/verify');
const registerJudge = (eventName) => async (data) => await backend.post(`/${eventName}/register`, data);
const registerEventStep1 = (eventName) => async (data) => await backend.post(`/events/${eventName}/step_1`, data);
const registerEventStep2 = (eventName) => async (data) => await backend.post(`/events/${eventName}/step_2`, data, { headers: { 'Content-Type': 'multipart/form-data' } });
const registerEventStep3 = (eventName) => async (data) => await backend.post(`/events/${eventName}/step_3`, data);
const registerEventStep4 = (eventName) => async (data) => await backend.post(`/events/${eventName}/step_4`, data);
const verifyPayment = (eventName) => async (data) => await backend.post(`/events/verify/payment/${eventName}`, data);
const getPendingPayments = (eventName) => async () => await backend.get(`/events/verify/payment/${eventName}`);

export {
    loginAdmin,
    verifyAdmin,
    registerJudge,
    registerEventStep1,
    registerEventStep2,
    registerEventStep3,
    registerEventStep4,
    verifyPayment,
    getPendingPayments,
}