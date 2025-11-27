import { useEffect, useRef, useState } from "react";
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
    setData([
      ...data,
      {
        todo: input.current.value,
        complete: false,
        index: data.length,
      },
    ]);
    input.current.value = "";
    setEditIndex(null);
  };
  console.log("data:", data);

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
    const filteredData = data.filter((todo) => {
      const TodoList = todo.todo.toLowerCase();

      return TodoList.includes(searchinput.toLowerCase());
    });

    if (searchinput === "") {
      setFilterData([]);
      return;
    }
    if (data.length <= 0) {
      return alert("No Task Yet Added");
    }
    if (filteredData.length > 0) {
      setFilterData(
        filteredData.map((item) => ({
          item: item.todo,
          complete: item.complete,
          index: item.index,
        }))
      );
    }
  };

  const fnc = (value) => {
    const seletedCategory = value.target.value;

    const existingData = data.map((item) => ({
      item: item.todo,
      complete: item.complete,
      index: item.index,
    }));

    if (seletedCategory === "complete") {
      const completeData = existingData.filter((item) => item.complete);
      setFilterData(completeData);
    } else if (seletedCategory === "pending") {
      const pendingData = existingData.filter((item) => !item.complete);
      setFilterData(pendingData);
    } else if (seletedCategory === "All") {
      setFilterData(existingData);
    }
  };

  const [page, setPage] = useState(1);

  const ApiData = () => {
    const limit = 4;
    const skip = (page - 1) * limit;
    useEffect(() => {
      let isMounted = true;
      const fetchData = async () => {
        const response = await fetch(
          `https://dummyjson.com/todos?limit=${limit}&skip=${skip}`
        );
        const json = await response.json();
        const todos = json.todos.map((todo, index) => ({
          todo: todo.todo,
          complete: todo.completed,
          index: index,
        }));
        if (isMounted) {
          setData(todos);
        }
      };
      fetchData();
      return () => {
        isMounted = false;
      };
    }, [page, limit, skip]);
  };
  ApiData();

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
          <button className="Add-task" onClick={() => openPopUp()}>
            <GoPlus />
          </button>
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
          <button
            className="prev-button"
            onClick={() => {
              page > 1 ? setPage(page - 1) : null;
            }}
          >
            Previous
          </button>
          <button
            className="load-more-button"
            onClick={() => setPage(page + 1)}
          >
            Load More
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
