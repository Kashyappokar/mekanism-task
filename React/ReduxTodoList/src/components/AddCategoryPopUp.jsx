import React, { useRef } from 'react'

const AddCategoryPopUp = ({categoryName,setIsOpen}) => {
    const inputRef = useRef(null);
    const handleAddCategory = () => {
        const value = inputRef.current.value;
        if(value.trim() === ''){
            return alert('Please add a category');
        }
        categoryName(value);        
        setIsOpen(false);
    }
        return (
    <div className='flex justify-center items-center fixed left-[38%] top-[29%] bg-[#242424] p-5 shadow-[0px_2px_100px_1300px_rgba(75,75,75,0.500)] rounded-md'>
        <div className="flex flex-col justify-center items-center gap-5">
            <h1 className='text-2xl font-bold'>Add Category</h1>
            <input
                type="text"
                className="rounded-md bg-amber-300 text-lg text-medium h-8 w-96 p-5 placeholder:text-lg font-medium focus:outline-none"
                placeholder="Add a new category"
                ref={inputRef}
            />
            <button className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-32' onClick={handleAddCategory}>Add</button>
        </div>
    </div>
  )
}

export default AddCategoryPopUp