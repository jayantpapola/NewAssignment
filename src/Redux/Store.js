import { configureStore } from '@reduxjs/toolkit'
import formReducer from './Reducer/FromReducer'

export const store = configureStore({
  reducer: {
    formData:formReducer
  },
})