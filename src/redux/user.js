import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  email: '',
  idToken: '',
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.email = action.payload.email;
      state.idToken = action.payload.idToken;
    },
    logOutUser: (state, action) => {
      Object.assign(state, initialState);
    },
  },
});
export default userSlice.reducer;
export const {setUserInfo, logOutUser} = userSlice.actions;
