import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(window.sessionStorage.getItem('admin_data')) || { username: '', roles: [], isAuthenticated: false }

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.username = action.payload.username;
      state.roles = action.payload.roles;
      state.isAuthenticated = action.payload.isAuthenticated;
      window.sessionStorage.setItem("admin_data", JSON.stringify(state));
    },
    resetAuthState() {
      window.sessionStorage.removeItem("admin_data");
      return initialState;
    }
  },
})

export const { setLogin, resetAuthState } = authSlice.actions

export default authSlice.reducer