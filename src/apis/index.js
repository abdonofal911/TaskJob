import axios from 'axios';

const BASE_URL = 'https://api.weatherapi.com/v1';

export const API = axios.create({baseURL: BASE_URL});

export const apiKey = 'af339e48e027461098b94404242103';
