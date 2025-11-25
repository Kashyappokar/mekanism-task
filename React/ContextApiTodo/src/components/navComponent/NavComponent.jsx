import React, { useContext, useRef } from 'react'
import { ContextApi } from '../contextApi/context'
import TodoLists from '../todos/TodoLists'

const NavComponent = () => {
  const {todos, setTodos} = useContext(ContextApi)
  const input = useRef(null)

  const AddTodo = () => {
    const data = input.current.value;

    if(data.trim() === "" || data.trim() === " "){
      return alert("input should not be empty.")
    }
    
    setTodos([...todos, data])
    input.current.value = ''
  }
  return (
    <>
        <div className="bg-[#3b3b3b] flex flex-col gap-2.5 justify-center items-center relative w-screen h-screen pt-11">
          <h1 className='text-white text-5xl font-medium'>Todo Here</h1>
          <div className='flex justify-center w-full gap-3'>
            <input type="text"  placeholder='Add a new todo' ref={input} className='bg-white p-2 text-black rounded-md w-96'/>
            <button className='bg-[#646cffaa] text-white p-2.5 rounded-md hover:bg-[#646cff] duration-300 ease-in-out' onClick={AddTodo}>Add Todo</button>
          </div>
          <TodoLists />
        </div>
    </>
  )
}

export default NavComponent