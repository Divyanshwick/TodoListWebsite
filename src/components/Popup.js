import React from "react";
import { useState } from "react";
import "../css/components/Popup.css";

function Popup({
  isEdit = false,
  index,
  setTodoList,
  setPopupVisible,
  todoList,
  setShowEditPopup,
}) {
  const [todo, setTodo] = useState("");
  const [category, setCategory] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    setPopupVisible(false);
    setTodoList([...todoList, { taskName: todo, category: category }]);
  };

  const editHandler = (event) => {
    event.preventDefault();
    todoList[index].taskName = todo;
    todoList[index].category = category;
    setTodoList([...todoList]);
    setShowEditPopup(false);
  };

  return (
    <>
      <div className="container"></div>
      <div className="popup">
        <div className="popup__header">
          <p>{isEdit ? "Edit Item" : "Add New To-Do Item"}</p>
        </div>
        <div className="popup__main">
          <form>
            <div className="main__wrapper">
              <span>To-Do</span>
              <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
              />
            </div>
            <div className="main__wrapper">
              <span>Category</span>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="popup__footer">
          <button
            className="footer__btnLeft"
            style={{ color: "#EF5350" }}
            onClick={() => {
              isEdit ? setShowEditPopup(false) : setPopupVisible(false);
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="footer__btnRight"
            style={{ color: "#7289DA" }}
            onClick={isEdit ? editHandler : handleAdd}
          >
            {isEdit ? "Edit" : "Add"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Popup;
