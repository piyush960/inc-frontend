import axios from 'axios';

const backend = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000',
})

const registerJudge =  (eventName) =>  async (data) => await backend.post(`/${eventName}/register`, data);
const registerEventStep1 = (eventName) =>  async (data) => await backend.post(`/events/${eventName}/step_1`, data);
const registerEventStep2 = (eventName) =>  async (data) => await backend.post(`/events/${eventName}/step_2`, data);
const registerEventStep3 = (eventName) =>  async (data) => await backend.post(`/events/${eventName}/step_3`, data);
const verifyEmail = (eventName) =>  async (data) => await backend.post(`/events/verify/payment/${eventName}`, data);


export {
    registerJudge, registerEventStep1, registerEventStep2, registerEventStep3, verifyEmail
}