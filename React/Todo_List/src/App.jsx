import { useState } from 'react'
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { MdOutlineModeEdit, MdDelete  } from "react-icons/md";
import './AddNewTask.css'
import './App.css'
function App() {
  const[data, setData] = useState([])
  const[input, setInput] = useState("")
  const[edit, setEdit] = useState(null)
  const[isChecked, setIsChecked] = useState(false)
  const[editInput, setEditInput] = useState("")
  const AddNewData = () => {
    document.querySelector(".PopUp-container").style.display = "flex"   
  }
  
  const canclePopUp = () => {
    document.querySelector(".PopUp-container").style.display = "none"
    document.querySelector(".POPUP").style.display = "none"
  }
  
  const addTask = () => {

    
  if(input === ""){
    return alert("Invalid Input please fill the input properly")
  }
  
  
  
  document.querySelector(".PopUp-container").style.display = "none"
  
    setData([...data, input])
  
  setInput("")
}

const deleteTask = (e) => {
  const dlt = data.filter((_,index) => index !== e)
  setData(dlt)
}

const editTask = (i) => {  
  document.querySelector(".POPUP").style.display = "flex"
  // setInput(data);
  setEdit(i);
  // console.log(input);
  // console.log(edit);
  // console.log(i);
}

const applyEditTask = () => {
  // const editedTask = data.splice(edit, 1, editInput);
  // console.log(editedTask);
  console.log(editInput);
  
  setData([...data,editInput])
} 
const handleCheck = (e) => {
  setIsChecked(e.target.checked)
  console.log(e.target.checked);
}



  return (
    <>
    <div className="main-container">
      <div className="heading">
        <h1>TODO LIST</h1>
      </div>
      
      <div className="navTab">
        <div className='search-container'>
          <input type="text" className="searchTab" />
          <CiSearch  className='searchIcon'/>
        </div>
        <div className='dropDown-container'>
          <select name="task" className='dropDown'>
            <option value="All" category="All" className='optionTab'>ALL</option>
            <option value="Complete" category="Complete" className='optionTab'>Complete</option>
            <option value="Incomplete" category="Incomplete" className='optionTab'>Incomplete</option>
          </select>
        </div>
      </div>

        <div className="PopUp-container">
            <div className="PopUp-heading">
                <h1>NEW NOTE</h1>
            </div>

            <div className="PopUp-inputTask">
                <input type="text" placeholder='Input Your Note' className='inputBar' onChange={(e) => {
                  setInput(e.target.value)
                  }} />
            </div>

            <div className="buttonArea">
                <button className="cancel" id='button' onClick={canclePopUp}>CANCEL</button>
                <button className="apply" id='button' onClick={addTask}>APPLY</button>
            </div>
        </div>       
        
        <div className='POPUP' id='PopUp-EditContainer'>
            <div className="PopUp-heading">
                <h1>EDIT NOTE</h1>
            </div>

            <div className="PopUp-inputTask" id='editTask'>
                <input type="text" placeholder='Input Your Note' className='inputBar' id='editTaskInput' onChange={(e) => {
                  setEditInput(e.target.value)
                  }} />
            </div>

            <div className="buttonArea">
                <button className="cancel" id='button' onClick={canclePopUp}>CANCEL</button>
                <button className="edit" id='button' onClick={applyEditTask}>APPLY</button>
            </div>
        </div>       

    {data.length <= 0 ? 
    (
      <>
        <div style={{marginTop:"50px",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"}}>
          <h1>No Task Yet Added</h1>
        </div>
      </>
    )
       : 
       data?.map((item,index) => {
        return(
          <>
        {isChecked === true ? (
            <div>
              <div className='data-container'>
                <span className="checkBox"><input type="checkbox" className='inputCheckbox' onChange={handleCheck}/>
                <span className='content-detail' style={{textDecorationLine:"line-through"}}>{item}<span id='edit'>
                <button className='editButton' onClick={()=>editTask(index)}><MdOutlineModeEdit /></button>
                <button className='buttonDelete' onClick= {()=>deleteTask(index)}><MdDelete/></button></span></span></span>
              </div>
            </div>
          ) : 
          <div>
              <div className='data-container'>
                <span className="checkBox"><input type="checkbox" className='inputCheckbox' onChange={handleCheck}/>
                <span className='content-detail' style={{textDecorationLine:"none"}}>{item}<span id='edit'>
                <button className='editButton' onClick={()=>editTask(index)}><MdOutlineModeEdit /></button>
                <button className='buttonDelete' onClick= {()=>deleteTask(index)}><MdDelete/></button></span></span></span>
              </div>
            </div>
          }
          </>
        )}
)} 


      

    <div className='button'>
      <button className='Add-task' onClick={AddNewData}>
        <GoPlus/>
      </button>
    </div>
    </div>
    </>
  )
}

export default App
