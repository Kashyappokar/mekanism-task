import React, { useContext, useState } from 'react'
import { ContextApi } from '../contextApi/context'
import { MdDelete, MdEdit } from "react-icons/md";

const TodoLists = () => {
    const{todos, setTodos} = useContext(ContextApi)
    const [ischecked, setIsChecked] = useState([])
    const editTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index] = prompt("Edit todo:", updatedTodos[index]);
        setTodos(updatedTodos);
        console.log("button clicked Edit");
      };
    const deleteTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
      };

    const handleChange = (index) => {
        const check = [...ischecked]
        check[index] = !check[index]
        console.log(check);
        setIsChecked(check)
    };
    // console.log(ischecked)
    return (
    <div className='w-full h-full flex flex-col gap-2.5 justify-start mt-5 items-center'>
    
        {todos?.map((items, index) =>{
            return(
                <div key={index}>
                   <div className='bg-[#242424ba] rounded-xl text-white w-xl flex justify-evenly overflow-hidden text-clip h-auto items-center p-2.5'>
                    <input type="checkbox" checked={ischecked[index]} onChange={() =>handleChange(index)} className='w-[10%] h-4' />
                    <span className='text-xl font-medium text-clip overflow-hidden w-[50%]' style={{textDecoration: ischecked[index] ? 'line-through' : 'none'}}>{items}</span>
                   <div className='flex justify-end relative gap-3 ml-[-50px]'>
                     <button className='bg-[#ff646caa] text-white w-8 flex justify-center hover:bg-[#ff646c] duration-300 ease-in-out items-center h-8 rounded-md' onClick={() => editTodo(index)}><MdEdit /></button>
                     <button className='bg-[#646cffaa] text-white w-8 flex justify-center hover:bg-[#646cff] duration-300 ease-in-out items-center h-8 rounded-md' onClick={() => deleteTodo(index)}><MdDelete /></button>
                    </div>
                   </div>
                </div>
            )
        })}
    </div>
  )
}

export default TodoLists