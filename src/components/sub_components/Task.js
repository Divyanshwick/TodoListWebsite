import "../../css/components/Task.css";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditIcon from "@mui/icons-material/Edit";
import { Radio } from "@mui/material";
import { useState } from "react";
import DeletePopup from "../DeletePopup";
import Popup from "../Popup";

const Task = ({ taskName, category, setTodoList, todoList, index }) => {
  const [checked, setChecked] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  return (
    <>
      <div className="task">
        <div className="task__radioBtn">
          <Radio
            checked={checked}
            onClick={() => setChecked(!checked)}
            sx={{
              "& .MuiSvgIcon-root": {
                color: "#43A047",
              },
            }}
          />
        </div>
        <div className="task__info">
          <span style={{ textDecoration: checked ? "line-through" : "none" }}>
            {taskName}
          </span>
          <p>{category}</p>
        </div>
        <div className="task__icon">
          <EditIcon
            style={{ color: "#FCD392" }}
            onClick={() => setShowEditPopup(true)}
          />
        </div>
        <div className="task__icon">
          <DeleteRoundedIcon
            style={{ color: "#E53935" }}
            onClick={() => setShowDeletePopup(true)}
          />
        </div>
      </div>

      {showEditPopup && (
        <Popup
          isEdit={true}
          todoList={todoList}
          setTodoList={setTodoList}
          index={index}
          setShowEditPopup={setShowEditPopup}
        />
      )}
      {showDeletePopup && (
        <DeletePopup
          todoList={todoList}
          setTodoList={setTodoList}
          index={index}
          setShowDeletePopup={setShowDeletePopup}
        />
      )}
    </>
  );
};

export default Task;
