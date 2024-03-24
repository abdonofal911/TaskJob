import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {API, apiKey} from '../apis';

export const getWeatherForecast = createAsyncThunk(
  'weather/getWeatherForecast',
  async (city, {rejectWithValue}) => {
    try {
      const response = await API.get(
        `/forecast.json?key=${apiKey}&q=${city}&days=3`,
      );
      const weatherData = response.data;
      return weatherData;
    } catch (error) {
      console.error('Error fetching weather:', error);
      return rejectWithValue(error);
    }
  },
);

const initialState = {
  weather: {},
  getWeatherLoader: false,
  weatherForecast: {},
  getWeatherForecastLoader: false,
  locationsSearch: [],
  getLocationsSearchLoader: false,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    loadLocalWeather: (state, action) => {
      state.weatherForecast = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getWeatherForecast.fulfilled, (state, action) => {
      state.weatherForecast = action.payload;
      state.getWeatherForecastLoader = false;
      console.log('getWeatherForecast.fulfilled');
    });
    builder.addCase(getWeatherForecast.pending, (state, action) => {
      state.getWeatherForecastLoader = true;
      console.log('getWeatherForecast.pending');
    });
    builder.addCase(getWeatherForecast.rejected, (state, action) => {
      state.getWeatherForecastLoader = false;
      const errorResponse = action.payload.response;
      console.log(
        'getWeatherForecast.rejected ',
        errorResponse.status + errorResponse.statusText,
      );
    });
  },
});
export default weatherSlice.reducer;
export const {loadLocalWeather} = weatherSlice.actions;
