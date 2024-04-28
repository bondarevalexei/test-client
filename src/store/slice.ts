import { User } from '@/entity/User';
import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  isAuth: boolean;
  user: User | null;
}

const initialState: UserState = {
  isAuth: false,
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
      state.user = action.payload;
    },
    update: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuth = false;
      state.user = null;
    },
  },
});

export const { login, logout, update } = userSlice.actions;

export default userSlice.reducer;
