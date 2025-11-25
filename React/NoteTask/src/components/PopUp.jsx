import React, { useState, useEffect } from "react";
import "../css/PopUp.css";

const PopUp = ({
  data,
  setData,
  isOpen,
  setIsOpen,
  isEditing,
  setIsEditing,
  editingIndex,
  currentData,
}) => {
  const [value, setValue] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (isEditing && currentData) {
      setValue({
        title: currentData.title,
        description: currentData.description,
      });
    } else {
      setValue({
        title: "",
        description: "",
      });
    }
  }, [isEditing, currentData]);

  const handleChange = (e) => {
    const { name, value: inputValue } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: inputValue,
    }));
  };

  const closeModal = () => {
    setIsOpen(false);
    setIsEditing(false);
  };

  const submit = () => {
    if (!value.title || !value.description) return;

    setData([...data, value]);
    setValue({
      title:"",
      description:""
    })
    document.querySelector(".titleBar").value = "";
    document.querySelector(".descBox").value = "";
    closeModal();
  };

  const submitEdit = () => {
    if (!value.title || !value.description) return;

    const updatedData = [...data];

    if (editingIndex !== null) {
      updatedData[editingIndex] = value;
      setData(updatedData);
    }

    closeModal();
  };

  return (
    <div
      className="PopUpMain"
      style={!isOpen ? { display: "none" } : { display: "flex" }}
    >
      <div className="headingbar">
        <h3>{isEditing ? "Edit Note" : "Add Note"}</h3>
      </div>

      <div className="inputBar">
        <input
          className="titleBar"
          type="text"
          name="title"
          placeholder="Enter Title Here:"
          value={value.title}
          onChange={handleChange}
        />
      </div>

      <div className="descriptionArea">
        <textarea
          className="descBox"
          name="description"
          placeholder="Enter Description Here: XYZ"
          value={value.description}
          onChange={handleChange}
        ></textarea>
      </div>

      <button className="cancelButton" onClick={closeModal}>
        X
      </button>

      <button className="AddNote" onClick={isEditing ? submitEdit : submit}>
        {isEditing ? "Save Changes" : "Enter"}
      </button>
    </div>
  );
};

export default PopUp;
