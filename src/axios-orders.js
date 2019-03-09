import axios from 'axios';

const instance = axios.create({
  baseURL:'https://ageless-union-532.firebaseio.com/'
});

export default instance;