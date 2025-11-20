import React, { useState } from 'react'
import { MdDelete, MdOutlineModeEdit } from "react-icons/md";


const task = ({data,setData ,editTask}) => {
    const[isChecked, setIsChecked] = useState([])
    // console.log(index);
    
    const handleCheck = (e) => {
      // setIsChecked(!isChecked)
      const check = [...isChecked]
      check[e] = !check[e]
      setIsChecked(check)
    }

  const deleteTask = (e) => {
    const dlt = data.filter((_,index) => index !== e)  
    setData(dlt)
}

  return (
    <div>
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
         <div key={index}>
           <div className='data-container'>
             <div className="checkBox" checked={isChecked[index]}><input type="checkbox" className='inputCheckbox' onChange={() => handleCheck(index)}/>
             <span className='content-detail' style={isChecked[index] === true ? {textDecorationLine:"line-through"}:{textDecorationLine:"none"}}>{item}</span></div>
             
             <button className='editButton' onClick={()=>editTask(index)}><MdOutlineModeEdit /></button>
             <button className='buttonDelete' onClick= {()=>deleteTask(index)}><MdDelete/></button>
           </div>
        </div>
        )}
)} 
       
    </div>
  )
}

export default task
