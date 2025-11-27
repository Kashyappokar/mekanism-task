import React, { useState } from "react";
import { MdDelete, MdOutlineModeEdit } from "react-icons/md";

const task = ({
  data,
  setData,
  editTask,
  filterData,
  isChecked,
  setIsChecked,
}) => {
  const handleCheck = (e) => {
    
    const check = [...data];
    check[e].complete = !check[e].complete;
    setIsChecked(check);
  };

  const deleteTask = (e) => {
    const dlt = data.filter((_, index) => index !== e);
    setData(dlt);
  };

  return (
    <div>
      {data.length <= 0 ? (
        <>
          <div
            style={{
              marginTop: "50px",
              fontFamily:
                "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
            }}
          >
            <h1>No Task Yet Added</h1>
          </div>
        </>
      ) : filterData.length > 0 ? (
        filterData.map((item) => {
          return (
            <div key={item.index}>
              <div className="data-container">
                <div className="checkBox">
                  <input
                    type="checkbox"
                    // checked={isChecked[item.index] || false}
                    checked={item.complete || false}
                    className="inputCheckbox"
                    onChange={() => handleCheck(item.index)}
                  />
                  <span
                    className="content-detail"
                    style={{
                      textDecorationLine: item.complete
                        ? "line-through"
                        : "none",
                    }}
                  >
                    {item.item}
                  </span>
                  <button
                    className="editButton"
                    onClick={() => editTask(item.index)}
                  >
                    <MdOutlineModeEdit />
                  </button>
                  <button
                    className="buttonDelete"
                    onClick={() => deleteTask(item.index)}
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        data?.map((item, index) => {
          return (
            <div key={index}>
              <div className="data-container">
                <div className="checkBox">
                  <input
                    type="checkbox"
                    // checked={isChecked[item.index] || false}
                    checked={item.complete || false}
                    className="inputCheckbox"
                    onChange={() => handleCheck(item.index)}
                  />
                  <span
                    className="content-detail"
                    style={{
                      textDecorationLine: item.complete
                        ? "line-through"
                        : "none",
                    }}
                  >
                    {item.todo}
                  </span>
                  <button
                    className="editButton"
                    onClick={() => editTask(item.index)}
                  >
                    <MdOutlineModeEdit />
                  </button>
                  <button
                    className="buttonDelete"
                    onClick={() => deleteTask(item.index)}
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
export default task;
