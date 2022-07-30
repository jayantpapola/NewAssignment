import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    fname:'dummy',
    lname:'dummy',
    number:9876543210,
    email:'dummy@gmail.com'
  },
}

export const formReducer = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    formAction: (state,action) => {
      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { formAction } = formReducer.actions

export default formReducer.reducer