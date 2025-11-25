import "../css/Card.css";
import { MdDeleteOutline, MdOutlineModeEdit } from "react-icons/md";

const Card = ({ title, description, editData, index, deleteData }) => {
  return (
    <>
      <div className="mainSection">
        <div className="TopSection">
          <div className="TitleBox">{title}</div>

          <div className="buttonArea">
            <button className="editButton" onClick={() => editData(index)}>
              <MdOutlineModeEdit />
            </button>
            <button className="DeleteButton" onClick={() => deleteData(index)}>
              <MdDeleteOutline />
            </button>
          </div>
        </div>

        <div className="DisplaySection">{description}</div>
      </div>
    </>
  );
};

export default Card;
