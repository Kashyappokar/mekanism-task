import { configureStore } from '@reduxjs/toolkit'
import { categorySlice } from '../features/categorySlice'
import { todoSlice } from '../features/todoSclice'

export const store = configureStore({
  reducer: {
    categories: categorySlice.reducer,
    todos: todoSlice.reducer
  }
})