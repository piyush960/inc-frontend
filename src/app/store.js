import { configureStore } from '@reduxjs/toolkit'
import formReducer from '../features/form/formSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { formAPI } from './services/formAPI'

export const store = configureStore({
  reducer: {
    form: formReducer,
    [formAPI.reducerPath]: formAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(formAPI.middleware),
})


setupListeners(store.dispatch)