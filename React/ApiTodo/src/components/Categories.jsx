import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoAddOutline } from "react-icons/io5";
import AddCategoryPopUp from "./AddCategoryPopUp";
import { addCategory } from "../features/categorySlice";
import "./scroll.css";

const Categories = ({ setSelectedCategory }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All Tasks");

  const getData = (categoryName) => {
    dispatch(addCategory(categoryName));
  };
  return (
    <div className="fixed top-0 left-0 w-80 h-screen bg-[#242424] text-white text-lg font-medium flex flex-col gap-5 justify-start items-center pt-16">
      <h1 className="text-2xl font-bold">Categories</h1>

      <div>
        <button onClick={() => {setSelectedCategory("All Tasks"); setActiveCategory("All Tasks");}} className={`flex justify-center items-center w-32 cursor-pointer p-1 mt-5 rounded-md ${activeCategory === "All Tasks" ? 'bg-amber-300 text-black hover:bg-amber-500' : ''}`}>
          All Task
        </button>
      </div>

      <div>
        <ul
          id="category-list"
          className="flex flex-col justify-center items-center gap-2 text-white max-h-50 overflow-auto scroll-w-none"
        >
          {categories.length < 1 ? (
            <>
              <h1 className="text-center">No Categories</h1>
            </>
          ) : (
            categories?.map((category, index) => (
              <li
                key={index}
                className={`flex justify-center items-center w-32 cursor-pointer p-1 rounded-md h-8 text-white ${activeCategory === category ? 'bg-amber-300 text-black hover:bg-amber-500' : ''}`}
                onClick={() => {setSelectedCategory(category); setActiveCategory(category);}}
              >
                {category}
              </li>
            ))
          )}
        </ul>
        <button
          className="mt-5 flex justify-center items-center gap-2 bg-blue-500 rounded-md p-2 hover:bg-blue-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {" "}
          <IoAddOutline />
          Add Category
        </button>
        {isOpen ? (
          <AddCategoryPopUp categoryName={getData} setIsOpen={setIsOpen} />
        ) : null}
      </div>
    </div>
  );
};

export default Categories;
