import React from 'react'
import ContextApiProvider from './components/contextApi/ContextApiProvider'
import NavComponent from './components/NavComponent/NavComponent'
// import TodosList from './components/todos/TodosList'
import TodoLists from './components/todos/TodoLists'
function App() {

  return (
    <ContextApiProvider>
        <NavComponent />
    </ContextApiProvider>
  )
}

export default App
