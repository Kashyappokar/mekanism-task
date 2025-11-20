import React, { useEffect, useRef, useState } from "react";

const PopUp = ({
  data,
  setData,
  addTask,
  input,
  isOpen,
  setIsOpen,
  isEditing,
  setIsEditing,
  editIndex,
  currentData,
}) => {

  const [value, setValue] = useState();
  useEffect(() => {
    if (isEditing && currentData) {
    }
  }, [isEditing, currentData]);

  const handleChange = (e) => {
    const updatedValue = e.target.value;
    setValue((prev) => e.target.value);

  };

  const submitEdit = () => {
    const updatedData = [...data];

    if (editIndex !== null) {
      updatedData[editIndex] = value;
      setData(updatedData);
    }

    setIsOpen(!isOpen)
  };

  return (
    <div>
      <div
        className="PopUp-container"
        style={isOpen ? { display: "flex" } : { display: "none" }}
      >
        <div className="PopUp-heading">
          <h1>{isEditing ? "EDIT NOTE" : "NEW NOTE"}</h1>
        </div>

        <div className="PopUp-inputTask">
          <input
            type="text"
            placeholder="Input Your Note"
            className="inputBar"
            ref={input}
            value={value || ""}
            onChange={handleChange}
          />
        </div>

        <div className="buttonArea">
          <button
            className="cancel"
            id="button"
            onClick={() => {
              setIsOpen(!isOpen), setIsEditing(!isEditing);
            }}
          >
            CANCEL
          </button>
          <button
            className="apply"
            id="button"
            onClick={isEditing ? submitEdit : addTask}
          >
            {isEditing ? "Save Edit" : "Apply"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
