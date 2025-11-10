import React, { useState } from 'react'
import '../AddNewTask.css'

const EditTask = () => {
  
  const[edited, setEdited] = useState([]);
  const[ArrIndex, setArrIndex] = useState(null);
  const[input ,setInput] = useState("")
  const canclePopUp = () => {
    document.querySelector(".POPUP").style.display = "none"
  }

  const EditTask = (index) => {
    console.log(index);
    
  }
  
  return (
    <>
      
    </>
  )
}

export default EditTask
