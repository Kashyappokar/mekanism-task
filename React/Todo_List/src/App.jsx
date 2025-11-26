import { useRef, useState } from "react";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import "./AddNewTask.css";
import "./App.css";
import PopUp from "./components/popUpComponent/PopUp";
import Task from "./components/taskComponent/Task.jsx";

function App() {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const input = useRef(null);
  const search = useRef(null);
  const [filterData, setFilterData] = useState([]);
  const [isChecked, setIsChecked] = useState([]);

  const addTask = () => {
    if (
      input.current.value.trim() === "" ||
      input.current.value.trim() === " "
    ) {
      return alert("Invalid Input please fill the input properly");
    }
    setIsOpen(!isOpen);
    setData([...data, input.current.value]);
    input.current.value = "";
    setEditIndex(null);
  };

  const editTask = (dataIndex) => {
    setEditIndex(dataIndex);
    setIsEditing(true);
    setIsOpen(true);
  };

  const openPopUp = () => {
    setIsOpen(!isOpen);
    input.current.value = "";
  };

  const filterTask = () => {
    const searchinput = search.current.value;
    const filteredData = data.filter((todo) =>
      todo.toLowerCase().includes(searchinput.toLowerCase())
    );
    console.log(filteredData);

    if (searchinput === "") {
      setFilterData([]);
      return;
    }
    if (data.length <= 0) {
      return alert("No Task Yet Added");
    }
    if (filteredData.length > 0) {
      setFilterData(filteredData);
    }
  };

  const fnc = (value) => {
    const seletedCategory = value.target.value;

    const existingData = data.map((item, index) => ({
      item: item,
      index: index,
    }));

    if (seletedCategory === "complete") {
      const completeData = existingData.filter((item) => isChecked[item.index]);
      setFilterData(completeData);
    } else if (seletedCategory === "pending") {
      const pendingData = existingData.filter((item) => !isChecked[item.index]);
      setFilterData(pendingData);
    } else if (seletedCategory === "All") {
      setFilterData(existingData);
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="heading">
          <h1>TODO LIST</h1>
        </div>

        <div className="navTab">
          <div className="search-container">
            <input
              type="text"
              className="searchTab"
              onChange={filterTask}
              ref={search}
            />
            <CiSearch className="searchIcon" />
          </div>
          <div className="dropDown-container">
            <select name="task" className="dropDown" onChange={fnc}>
              <option value="All" className="optionTab">
                ALL
              </option>
              <option value="complete" className="optionTab">
                Complete
              </option>
              <option value="pending" className="optionTab">
                Incomplete
              </option>
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

        <Task
          data={data}
          setData={setData}
          editTask={editTask}
          filterData={filterData}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />

        <div className="button">
          <button className="Add-task" onClick={() => openPopUp()}>
            <GoPlus />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
