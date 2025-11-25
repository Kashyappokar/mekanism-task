import React, { useState } from 'react'
import { ContextApi } from './context.js'


const ContextApiProvider = ({ children }) => {
    const[todos, setTodos] = useState([])
  return (
    <ContextApi.Provider value={{todos,setTodos}}>
      {children}
    </ContextApi.Provider>
  )
}

export default ContextApiProvider
