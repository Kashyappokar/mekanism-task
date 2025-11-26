import { createSlice } from '@reduxjs/toolkit'

export const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: []
  },
  reducers: {
    addCategory: (state, action) => {
        state.categories.push(action.payload)
    }
  }
})

export  const { addCategory } = categorySlice.actions

export default categorySlice.reducer