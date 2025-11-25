import React, { useState } from "react"
import NavComponent from "./components/NavComponent"
import Todos from "./components/Todos"
import Categories from "./components/Categories"
function App() {
  const [selectedCategory, setSelectedCategory] = useState("All Tasks");
  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-start pt-16  bg-[#3b3b3b] gap-8">
        <Categories  setSelectedCategory={setSelectedCategory} />
        <h1 className="text-3xl font-bold text-white">Redux Todo List</h1>
        <NavComponent />
        <Todos selectedCategory={selectedCategory} />
      </div>
    </>
  )
}

export default App