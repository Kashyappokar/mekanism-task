import PopUp from "./components/PopUp";
import Card from "./components/Card";
import "./css/App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [title, setTitle] = useState("")

  const openPopUp = () => {
    setIsOpen(true);
    setIsEditing(false);
    setEditingIndex(null);
  };

  const editData = (dataIndex) => {
    if (!data) return;

    setEditingIndex(dataIndex);
    setIsEditing(true);
    setIsOpen(true);
  };

  const deleteData = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  const searchFnc = (e) =>{
    const{name} = e.target;    
    setTitle((prev) => ({
      ...prev,
      [name]: inputValue,
    }));
      const filteredData = data?.filter((items) => items.title === title)

      console.log(filteredData);
      setData(...data,...filteredData)
  }
  return (
    <>
      <div className="AppMain">
        <div className="NavBar">
          <div className="inputBar">
            <input
              type="text"
              placeholder="Search Here:"
              className="searchInput"
              onChange={(e) => searchFnc(e)}
            />
          </div>

          <div className="AddButton">
            <button className="addNoteButton" onClick={openPopUp}>
              +
            </button>
          </div>
        </div>

        <PopUp
          data={data}
          setData={setData}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          editingIndex={editingIndex}
          currentData={editingIndex !== null ? data[editingIndex] : null}
        />

        <section className="displaySection">
          <div className="displaySection">
            {data.length > 0 ? (
              data.map((item, index) => (
                <Card
                  index={index}
                  key={index}
                  title={item.title}
                  description={item.description}
                  editData={editData}
                  deleteData={deleteData}
                />
              ))
            ) : (
              <h1 style={{ textAlign: "center" }}>No notes yet.</h1>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
