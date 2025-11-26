import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import './scroll.css'
const Todos = ({selectedCategory}) => {
  const todos = useSelector(state => state.todos.todos);
  const [isChecked, setIsChecked] = useState([]);
  const handleCheckboxChange = (index) => {
    const newIsChecked = [...isChecked];
    newIsChecked[index] = !newIsChecked[index];
    setIsChecked(newIsChecked);
  };
  return (
    <div id="todo-list" className='flex justify-center items-center w-[70%] ml-[15%] flex-col overflow-y-scroll h-[60vh]'>
      {todos.length === 0 ? (
        <p className="text-xl font-medium text-white p-1 rounded-md">No todos available</p>
      ) : (
        todos.map((todo, index) => (
          todo.category === selectedCategory || selectedCategory === "All Tasks" ? (
        <div key={index} className="flex justify-start w-2xl items-center gap-10 border-b-2 border-b-blue-500 p-2 rounded-md">
          <input type="checkbox" value={isChecked} checked={isChecked[index] || false} onChange={() => handleCheckboxChange(index)} className="w-5 h-5" />
          <div className='flex justify-between items-center gap-1 w-96'>
            <p className="text-xl font-medium text-white p-1 rounded-md" style={{textDecoration: isChecked[index]  ? 'line-through red 4px' : 'none'}}>{todo.text}</p>
            <span className="text-sm font-medium bg-amber-300 text-black px-2 py-1 rounded-md relative left-[39%]">{todo.category}</span>
          </div>
        </div>
      ) : null
    )))}
    </div>
  )
}

export default Todos
