import axios from 'axios';

const api = axios.create({
  baseURL: 'http://squad5-fifo-api.herokuapp.com/api',
});

export default api;