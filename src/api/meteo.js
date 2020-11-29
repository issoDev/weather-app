import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.prevision-meteo.ch/services/json'
});
