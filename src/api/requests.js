import axios from 'axios';

const backend = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001',
})

const registerJudge =   async (data) => await backend.post('/judge/register', data);
const registerConceptStep1 = async (data) => await backend.post('/events/concepts/step_1', data);
const registerConceptStep2 = async (data) => await backend.post('/events/concepts/step_2', data);
const registerConceptStep3 = async (data) => await backend.post('/events/concepts/step_3', data);


export {
    registerJudge, registerConceptStep1, registerConceptStep2, registerConceptStep3 , 
}