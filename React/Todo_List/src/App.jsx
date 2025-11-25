import { useEffect, useRef, useState } from 'react'
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import './AddNewTask.css'
import './App.css'
import PopUp from './components/popUpComponent/PopUp';
import Task from './components/taskComponent/task.jsx'


function App() {
  const[data, setData] = useState([])
  const[isOpen, setIsOpen] = useState(false)
  const[editIndex, setEditIndex] = useState(null)
  const[isEditing, setIsEditing] = useState(false)
  const input = useRef(null)
  const search = useRef(null)

  const addTask = () => {    
  if(input.current.value.trim() === "" || input.current.value.trim() === " "){
    return alert("Invalid Input please fill the input properly")
  }
    setIsOpen(!isOpen)
    setData([...data, input.current.value])
    input.current.value = ""
    setEditIndex(null)
}



const editTask = (dataIndex) => {  
  setEditIndex(dataIndex)
  setIsEditing(true);
  setIsOpen(true);
}

const openPopUp = () => {
  setIsOpen(!isOpen)
  input.current.value = ""  
}

const selected = useRef()
// console.log(selected.current.getAttribute(""));

const filterTask = () => {
  const category = selected.current.value

  data.forEach(todo =>{
    console.log(todo);
    
  })
}
  return (
    <>
    <div className="main-container">
      <div className="heading">
        <h1>TODO LIST</h1>
      </div>
      
      <div className="navTab">
        <div className='search-container'>
          <input type="text" className="searchTab" ref={search}/>
          <CiSearch  className='searchIcon'/>
        </div>
        <div className='dropDown-container'>
          <select name="task" className='dropDown' onChange={filterTask}  ref={selected}>
            <option value="All" category="All" className='optionTab'>ALL</option>
            <option value="Complete" category="Complete" className='optionTab'>Complete</option>
            <option value="Incomplete" category="Incomplete" className='optionTab'>Incomplete</option>
          </select>
        </div>
      </div>

    <PopUp
      data={data}
      setData={setData}
      addTask={addTask} 
      input={input} 
      isOpen={isOpen} 
      setIsOpen={setIsOpen} 
      isEditing={isEditing}
      setIsEditing={setIsEditing}
      editIndex={editIndex}
      currentData={editIndex !== null ? data[editIndex] : null} 
      setEditIndex={setEditIndex}
     />

    <Task data={data} setData={setData} editTask={editTask}/>

    <div className='button'>
      <button className='Add-task' onClick={() => openPopUp()}>
        <GoPlus/>
      </button>
    </div>
    </div>
    </>
  )
}

export default App
