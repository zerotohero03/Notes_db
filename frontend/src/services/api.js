// frontend/src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/';

export const getNotes = () => axios.get(`${API_URL}notes`);
export const addNote = (note) => axios.post(`${API_URL}notes`, note);
export const deleteNote = (id) => axios.delete(`${API_URL}notes/${id}`);
