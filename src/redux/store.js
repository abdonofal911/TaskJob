import {configureStore} from '@reduxjs/toolkit';
import weatherSlice from './weather';
import userSlice from './user';
export const store = configureStore({
  reducer: {
    weather: weatherSlice,
    user: userSlice,
  },
});
