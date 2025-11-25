import React, { useState } from 'react'
import { MdDelete, MdOutlineModeEdit } from "react-icons/md";


const task = ({data,setData ,editTask}) => {
    const[isChecked, setIsChecked] = useState([])

    
    const handleCheck = (e) => {
      // setIsChecked(!isChecked)
      const check = [...isChecked]
      check[e] = !check[e]
      setIsChecked(check)
    }
console.log(isChecked);


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
             <div className="checkBox" ><input type="checkbox" checked={isChecked[index]} className='inputCheckbox' onChange={() => handleCheck(index)}/>
             <span className='content-detail' style={isChecked[index] === true ? {textDecorationLine:"line-through"}:{textDecorationLine:"none"}}>{item}</span>
             <button className='editButton' onClick={()=>editTask(index)}><MdOutlineModeEdit /></button>
             <button className='buttonDelete' onClick= {()=>deleteTask(index)}><MdDelete/></button>
           </div>
           </div>
        </div>
        )}
)} 
       
    </div>
  )
}

export default task
