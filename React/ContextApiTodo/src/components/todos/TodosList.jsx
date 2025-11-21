import React, { useContext } from 'react'
import { ContextApi } from '../contextApi/context'

const TodosList = () => {
  const {todos, setTodos} = useContext(ContextApi)
  console.log(todos);
  if (!todos || todos.length === 0) {
    return <div className='text-white'>No todos yet</div>
  }
  return (
    <div className='text-white'>
      {todos.map((items,index) => (
        <div key={index}>{items}</div>
      ))}
    </div>
  )
}

export default TodosList