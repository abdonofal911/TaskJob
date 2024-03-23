// import axios from 'axios';

// const BASE_URL = 'https://api.weatherapi.com/v1';

// export const API = axios.create({baseURL: BASE_URL});

// export const apiKey = 'af339e48e027461098b94404242103';
import axios from 'axios';
import {Alert} from 'react-native';

const BASE_URL = 'https://identitytoolkit.googleapis.com/v1';

const SERVER_KEY = 'AIzaSyCaPaqNjjWGQMlNvR2lmQgGEiC8CaZFY50';

export const login = async (email, password) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/accounts:signInWithPassword?key=${SERVER_KEY}`,
      {
        email: email,
        password: password,
      },
    );
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const signup = async ({username, email, password}) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/accounts:signUp?key=${SERVER_KEY}`,
      {
        username: username,
        email: email,
        password: password,
      },
    );
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

const handleError = error => {
  Alert.alert(error.response.data.error.message);
};
