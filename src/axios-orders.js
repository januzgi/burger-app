import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-dabf0.firebaseio.com/'
});

export default instance;
