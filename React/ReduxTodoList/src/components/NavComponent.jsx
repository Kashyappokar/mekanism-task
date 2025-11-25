import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/todoSclice";
const NavComponent = () => {
  const categories = useSelector(state => state.categories.categories);
  const value = useRef(null);
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');
  
 
  const handleSubmit = () => {
    const data = value.current.value
    if(data.trim() === ""){
      return alert('Please add a todo');
    }
    if(!category || category.trim() === ""){
      return alert('Please select a category');
    }
    dispatch(addTodo({ text: data, category }));
    value.current.value = "";
    // document.querySelector('select').textContent = "select";

   }
 
  return (
    <div className="flex justify-center items-center w-[70%] ml-[20%]">
      <div className="flex justify-center items-center gap-5">
        <input
          type="text"
          className="rounded-md bg-amber-300 text-lg text-medium h-8 w-96 p-5 placeholder:text-lg font-medium focus:outline-none"
          placeholder="Add a new todo"
          ref={value}
        />

        <select
          name="category"
          className="rounded-md text-blue-500 flex justify-center items-center w-20 text-clip  p-2 bg-white focus:outline-none"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" hidden  className="text-lg font-medium text-white bg-blue-500">
            select
          </option>
          {categories.map((category, index) => (
            <option key={index} value={category} className="text-lg font-medium text-white bg-blue-500">
              {category}
            </option>
          ))}
        </select>

        <button className="rounded-md bg-blue-500 text-white text-lg font-medium h-8 w-24 flex justify-center items-center p-5 hover:bg-blue-600" onClick={handleSubmit}>
          Add
        </button>
      </div>
    </div>
  );
};

export default NavComponent;
