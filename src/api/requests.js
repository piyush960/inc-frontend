import axios from 'axios';

const backend = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001',
})

const registerJudge = async (data) => await backend.post('/judge/register', data);

export {
    registerJudge,
}